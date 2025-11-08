import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const { prompt, stepNumber, currentSteps } = await request.json()

    if (!prompt || !stepNumber) {
      return NextResponse.json({ error: "Prompt and step number are required" }, { status: 400 })
    }

    const apiKey = process.env.GEMINI_API_KEY

    if (!apiKey) {
      console.error("[v0] GEMINI_API_KEY not found in environment variables")
      return NextResponse.json({ error: "API key not configured" }, { status: 500 })
    }

    // Call Gemini API to regenerate specific step
    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash-exp:generateContent?key=${apiKey}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          contents: [
            {
              parts: [
                {
                  text: `You are a creative story writer. Given the following story idea and existing story outline, regenerate ONLY step ${stepNumber} with a fresh perspective. Keep it consistent with the overall story but provide new creative content.

Story Idea: "${prompt}"

Current Outline:
${JSON.stringify(currentSteps, null, 2)}

Regenerate step ${stepNumber} with a new title and description. Return your response as a JSON object:
{
  "step": {"number": ${stepNumber}, "title": "...", "description": "..."}
}

Make it engaging, cinematic, and different from the current version.`,
                },
              ],
            },
          ],
          generationConfig: {
            temperature: 1.0,
            topK: 40,
            topP: 0.95,
            maxOutputTokens: 1024,
          },
        }),
      },
    )

    if (!response.ok) {
      throw new Error(`Gemini API error: ${response.statusText}`)
    }

    const data = await response.json()
    const textContent = data.candidates?.[0]?.content?.parts?.[0]?.text

    if (!textContent) {
      throw new Error("No content in Gemini response")
    }

    const jsonText = textContent
      .replace(/```json\n?/g, "")
      .replace(/```\n?/g, "")
      .trim()
    const parsedStep = JSON.parse(jsonText)

    return NextResponse.json(parsedStep)
  } catch (error) {
    console.error("[v0] Error in regenerate-step:", error)
    return NextResponse.json(
      { error: "Failed to regenerate step", details: error instanceof Error ? error.message : "Unknown error" },
      { status: 500 },
    )
  }
}
