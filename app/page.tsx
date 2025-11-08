"use client"

import { useState } from "react"

import { Button } from "@/components/ui/button"
import { Github, Globe, Sparkles, Wand2, ImageIcon, Mic, Database, Cloud } from "lucide-react"
import Image from "next/image"
import { StoryBuilder } from "@/components/story-builder"

export default function Home() {
  const [storyBuilderOpen, setStoryBuilderOpen] = useState(false)

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-[#5B4B8A] via-[#7B5B8A] to-[#8B6B9A]">
      <div className="absolute inset-0 z-0">
        <iframe
          src="https://my.spline.design/motiontrails-mQJiWP02BoJRJj7QScWZ8Yil/"
          frameBorder="0"
          width="100%"
          height="100%"
          className="h-full w-full"
        />
      </div>

      {/* Navigation */}
      <nav className="relative z-10 px-16 py-8">
        <ul className="flex gap-12 text-sm font-bold tracking-wide text-white">
          <li
            onClick={() => scrollToSection("about")}
            className="cursor-pointer transition-all duration-300 hover:text-red-400 hover:drop-shadow-[0_0_8px_rgba(239,68,68,0.8)]"
          >
            ABOUT
          </li>
          <li
            onClick={() => scrollToSection("how-it-works")}
            className="cursor-pointer transition-all duration-300 hover:text-red-400 hover:drop-shadow-[0_0_8px_rgba(239,68,68,0.8)]"
          >
            HOW IT WORKS
          </li>
          <li
            onClick={() => scrollToSection("tech-stack")}
            className="cursor-pointer transition-all duration-300 hover:text-red-400 hover:drop-shadow-[0_0_8px_rgba(239,68,68,0.8)]"
          >
            TECH STACK
          </li>
          <li
            onClick={() => setStoryBuilderOpen(true)}
            className="cursor-pointer transition-all duration-300 hover:text-red-400 hover:drop-shadow-[0_0_8px_rgba(239,68,68,0.8)]"
          >
            DEMO
          </li>
          <li
            onClick={() => scrollToSection("team")}
            className="cursor-pointer transition-all duration-300 hover:text-red-400 hover:drop-shadow-[0_0_8px_rgba(239,68,68,0.8)]"
          >
            TEAM
          </li>
        </ul>
      </nav>

      {/* Hero Section */}
      <div id="about" className="relative z-10 flex items-center justify-between px-16 pt-12">
        <div className="max-w-2xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-red-200/90">AI ATL 2025:</p>
          <h1 className="mb-6 text-6xl font-bold leading-tight text-white">
            STORYSPARK —
            <br />
            TURN IDEAS INTO
            <br />
            CINEMATIC STORIES
          </h1>
          <p className="mb-10 max-w-xl text-base leading-relaxed text-white/90">
            Where imagination meets AI. StorySpark transforms your ideas into vivid, narrated stories using Google's
            cutting-edge generative media models.
          </p>

          {/* Buttons */}
          <div className="mb-12 flex gap-4">
            <Button
              size="lg"
              onClick={() => setStoryBuilderOpen(true)}
              className="rounded-full bg-white px-8 text-sm font-semibold uppercase tracking-wide text-[#7B6BA8] transition-all duration-300 hover:bg-white/90 hover:shadow-[0_0_20px_rgba(239,68,68,0.8),0_0_40px_rgba(239,68,68,0.5)]"
            >
              START CREATING
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="rounded-full border-2 border-white bg-transparent px-8 text-sm font-semibold uppercase tracking-wide text-white transition-all duration-300 hover:border-red-400 hover:bg-white/10 hover:text-red-400 hover:shadow-[0_0_20px_rgba(239,68,68,0.8),0_0_40px_rgba(239,68,68,0.5)]"
            >
              WATCH DEMO
            </Button>
          </div>

          {/* Carousel Dots */}
          <div className="flex gap-3">
            <div className="h-2.5 w-2.5 rounded-full bg-red-400 shadow-[0_0_8px_rgba(239,68,68,0.8)]"></div>
            <div className="h-2.5 w-2.5 rounded-full bg-white/40"></div>
            <div className="h-2.5 w-2.5 rounded-full bg-white/40"></div>
            <div className="h-2.5 w-2.5 rounded-full bg-white/40"></div>
            <div className="h-2.5 w-2.5 rounded-full bg-white/40"></div>
          </div>
        </div>

        <div className="relative animate-pulse-scale transition-transform duration-500 hover:scale-110">
          <div className="relative h-[720px] w-[540px]">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Untitled%20design%20%2812%29-AUzcUJl45XueiOf0D1t9cvkzHg1wce.png"
              alt="Gaming VR Headset"
              fill
              className="object-contain transition-all duration-500"
              style={{
                filter:
                  "drop-shadow(0 0 50px rgba(239, 68, 68, 0.8)) drop-shadow(0 0 100px rgba(239, 68, 68, 0.6)) drop-shadow(0 0 150px rgba(239, 68, 68, 0.4))",
              }}
            />
          </div>
        </div>
      </div>

      {/* Social Media Icons */}
      <div className="absolute bottom-12 left-16 z-10 flex gap-6">
        <Github className="h-5 w-5 cursor-pointer text-white transition-all duration-300 hover:text-red-400 hover:drop-shadow-[0_0_12px_rgba(239,68,68,0.9)]" />
        <Globe className="h-5 w-5 cursor-pointer text-white transition-all duration-300 hover:text-red-400 hover:drop-shadow-[0_0_12px_rgba(239,68,68,0.9)]" />
      </div>

      {/* How It Works Section */}
      <div id="how-it-works" className="relative z-10 mt-32 px-16 py-24">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-4 text-center text-sm font-semibold uppercase tracking-wider text-red-200/90">
            The StorySpark Workflow
          </h2>
          <h3 className="mb-16 text-center text-5xl font-bold text-white">How It Works</h3>

          <div className="space-y-12">
            {/* Step 1 */}
            <div className="group flex items-start gap-8 rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm transition-all duration-500 hover:border-red-400/50 hover:bg-white/10 hover:shadow-[0_0_30px_rgba(239,68,68,0.3)]">
              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-red-400 to-red-600 shadow-[0_0_20px_rgba(239,68,68,0.6)] transition-all duration-500 group-hover:shadow-[0_0_30px_rgba(239,68,68,0.9)]">
                <Sparkles className="h-8 w-8 text-white" />
              </div>
              <div>
                <h4 className="mb-3 text-2xl font-bold text-white">Step 1: Idea Input</h4>
                <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-red-300">User Interaction</p>
                <p className="leading-relaxed text-white/80">
                  Users begin by entering a short prompt or story idea — just a few sentences describing characters,
                  setting, or mood. The frontend captures this and sends it to the backend via a simple REST API call.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="group flex items-start gap-8 rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm transition-all duration-500 hover:border-red-400/50 hover:bg-white/10 hover:shadow-[0_0_30px_rgba(239,68,68,0.3)]">
              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-red-400 to-red-600 shadow-[0_0_20px_rgba(239,68,68,0.6)] transition-all duration-500 group-hover:shadow-[0_0_30px_rgba(239,68,68,0.9)]">
                <Wand2 className="h-8 w-8 text-white" />
              </div>
              <div>
                <h4 className="mb-3 text-2xl font-bold text-white">Step 2: Narrative Generation</h4>
                <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-red-300">Gemini API</p>
                <p className="leading-relaxed text-white/80">
                  Google Gemini 2.5 Flash processes the input and expands it into a structured narrative — including
                  plot points, character dialogue, and scene descriptions. Gemini's multimodal understanding ensures the
                  tone, pacing, and emotion fit the user's intent.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="group flex items-start gap-8 rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm transition-all duration-500 hover:border-red-400/50 hover:bg-white/10 hover:shadow-[0_0_30px_rgba(239,68,68,0.3)]">
              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-red-400 to-red-600 shadow-[0_0_20px_rgba(239,68,68,0.6)] transition-all duration-500 group-hover:shadow-[0_0_30px_rgba(239,68,68,0.9)]">
                <ImageIcon className="h-8 w-8 text-white" />
              </div>
              <div>
                <h4 className="mb-3 text-2xl font-bold text-white">Step 3: Scene Creation</h4>
                <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-red-300">Imagen 3</p>
                <p className="leading-relaxed text-white/80">
                  Each scene description from Gemini is passed to Google Imagen 3, which generates stunning,
                  high-fidelity visual frames representing key moments in the story. These are displayed in a story
                  carousel format, giving users a "storybook feel."
                </p>
              </div>
            </div>

            {/* Step 4 */}
            <div className="group flex items-start gap-8 rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm transition-all duration-500 hover:border-red-400/50 hover:bg-white/10 hover:shadow-[0_0_30px_rgba(239,68,68,0.3)]">
              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-red-400 to-red-600 shadow-[0_0_20px_rgba(239,68,68,0.6)] transition-all duration-500 group-hover:shadow-[0_0_30px_rgba(239,68,68,0.9)]">
                <Mic className="h-8 w-8 text-white" />
              </div>
              <div>
                <h4 className="mb-3 text-2xl font-bold text-white">Step 4: Voice Narration</h4>
                <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-red-300">ElevenLabs</p>
                <p className="leading-relaxed text-white/80">
                  The generated story text is converted into realistic, expressive audio using the ElevenLabs API. Users
                  can choose different voice tones (narrative, dramatic, calm) for a more immersive experience.
                </p>
              </div>
            </div>

            {/* Step 5 */}
            <div className="group flex items-start gap-8 rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm transition-all duration-500 hover:border-red-400/50 hover:bg-white/10 hover:shadow-[0_0_30px_rgba(239,68,68,0.3)]">
              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-red-400 to-red-600 shadow-[0_0_20px_rgba(239,68,68,0.6)] transition-all duration-500 group-hover:shadow-[0_0_30px_rgba(239,68,68,0.9)]">
                <Cloud className="h-8 w-8 text-white" />
              </div>
              <div>
                <h4 className="mb-3 text-2xl font-bold text-white">Step 5: Story Assembly</h4>
                <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-red-300">Frontend + Hosting</p>
                <p className="leading-relaxed text-white/80">
                  The generated content — text, visuals, and audio — is combined into a cohesive digital story view
                  using React. The full experience is hosted and served through Vultr Cloud for low-latency and
                  scalability.
                </p>
              </div>
            </div>

            {/* Step 6 */}
            <div className="group flex items-start gap-8 rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm transition-all duration-500 hover:border-red-400/50 hover:bg-white/10 hover:shadow-[0_0_30px_rgba(239,68,68,0.3)]">
              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-red-400 to-red-600 shadow-[0_0_20px_rgba(239,68,68,0.6)] transition-all duration-500 group-hover:shadow-[0_0_30px_rgba(239,68,68,0.9)]">
                <Database className="h-8 w-8 text-white" />
              </div>
              <div>
                <h4 className="mb-3 text-2xl font-bold text-white">Step 6: Data Storage</h4>
                <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-red-300">MongoDB Atlas</p>
                <p className="leading-relaxed text-white/80">
                  If the user is logged in, their story data, visuals, and narration metadata are saved securely in
                  MongoDB Atlas, allowing retrieval and sharing later. This integration also makes it easy to track user
                  preferences and generate story recommendations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tech Stack Section */}
      <div id="tech-stack" className="relative z-10 px-16 py-24">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-4 text-center text-sm font-semibold uppercase tracking-wider text-red-200/90">
            Powered By Cutting-Edge Technology
          </h2>
          <h3 className="mb-16 text-center text-5xl font-bold text-white">Tech Stack & Architecture</h3>

          <div className="grid gap-8 md:grid-cols-2">
            {/* Frontend */}
            <div className="group rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm transition-all duration-500 hover:border-red-400/50 hover:bg-white/10 hover:shadow-[0_0_30px_rgba(239,68,68,0.3)]">
              <h4 className="mb-6 text-2xl font-bold text-white">🧩 Frontend</h4>
              <ul className="space-y-3 text-white/80">
                <li className="flex items-start gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-red-400"></span>
                  <span>
                    <strong className="text-white">Next.js + React</strong> for dynamic rendering and interactivity
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-red-400"></span>
                  <span>
                    <strong className="text-white">TailwindCSS</strong> for responsive, dark-mode styling
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-red-400"></span>
                  <span>
                    <strong className="text-white">Framer Motion</strong> for smooth page and component animations
                  </span>
                </li>
              </ul>
            </div>

            {/* Backend */}
            <div className="group rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm transition-all duration-500 hover:border-red-400/50 hover:bg-white/10 hover:shadow-[0_0_30px_rgba(239,68,68,0.3)]">
              <h4 className="mb-6 text-2xl font-bold text-white">⚙️ Backend</h4>
              <ul className="space-y-3 text-white/80">
                <li className="flex items-start gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-red-400"></span>
                  <span>
                    <strong className="text-white">Node.js + Express.js</strong> API endpoints to orchestrate AI model
                    calls
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-red-400"></span>
                  <span>
                    <strong className="text-white">Google Gemini API</strong> for narrative generation
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-red-400"></span>
                  <span>
                    <strong className="text-white">Imagen 3 API</strong> for visual generation
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-red-400"></span>
                  <span>
                    <strong className="text-white">ElevenLabs API</strong> for audio generation
                  </span>
                </li>
              </ul>
            </div>

            {/* Infrastructure */}
            <div className="group rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm transition-all duration-500 hover:border-red-400/50 hover:bg-white/10 hover:shadow-[0_0_30px_rgba(239,68,68,0.3)]">
              <h4 className="mb-6 text-2xl font-bold text-white">☁️ Infrastructure</h4>
              <ul className="space-y-3 text-white/80">
                <li className="flex items-start gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-red-400"></span>
                  <span>
                    <strong className="text-white">Vultr Cloud</strong> for deployment, scalability, and real-time
                    performance
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-red-400"></span>
                  <span>
                    <strong className="text-white">MongoDB Atlas</strong> for story storage and user management
                  </span>
                </li>
              </ul>
            </div>

            {/* AI Models */}
            <div className="group rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm transition-all duration-500 hover:border-red-400/50 hover:bg-white/10 hover:shadow-[0_0_30px_rgba(239,68,68,0.3)]">
              <h4 className="mb-6 text-2xl font-bold text-white">🧠 AI Models Used</h4>
              <ul className="space-y-3 text-white/80">
                <li className="flex items-start gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-red-400"></span>
                  <span>
                    <strong className="text-white">Gemini 2.5 Flash</strong> — Story & Dialogue Generation
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-red-400"></span>
                  <span>
                    <strong className="text-white">Imagen 3</strong> — Visual Scene Rendering
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-red-400"></span>
                  <span>
                    <strong className="text-white">ElevenLabs</strong> — Voice & Narration Generation
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Architecture Flow */}
          <div className="mt-12 rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm">
            <h4 className="mb-6 text-2xl font-bold text-white">🛠️ Architecture Flow Summary</h4>
            <div className="flex flex-wrap items-center justify-center gap-4 text-center text-white/90">
              <span className="rounded-full bg-red-400/20 px-6 py-3 font-semibold">User Input</span>
              <span className="text-2xl text-red-400">→</span>
              <span className="rounded-full bg-red-400/20 px-6 py-3 font-semibold">Gemini (Text)</span>
              <span className="text-2xl text-red-400">→</span>
              <span className="rounded-full bg-red-400/20 px-6 py-3 font-semibold">Imagen (Visuals)</span>
              <span className="text-2xl text-red-400">→</span>
              <span className="rounded-full bg-red-400/20 px-6 py-3 font-semibold">ElevenLabs (Audio)</span>
              <span className="text-2xl text-red-400">→</span>
              <span className="rounded-full bg-red-400/20 px-6 py-3 font-semibold">MongoDB (Storage)</span>
              <span className="text-2xl text-red-400">→</span>
              <span className="rounded-full bg-red-400/20 px-6 py-3 font-semibold">Frontend Display via Vultr</span>
            </div>
          </div>

          {/* Outcome */}
          <div className="mt-12 text-center">
            <p className="text-lg leading-relaxed text-white/90">
              <strong className="text-white">Outcome:</strong> A fully AI-generated cinematic storytelling experience —
              built, generated, and hosted in under <strong className="text-red-300">36 hours at AI ATL 2025.</strong>
            </p>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div id="team" className="relative z-10 px-16 py-24">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-4 text-center text-sm font-semibold uppercase tracking-wider text-red-200/90">
            Built at AI ATL 2025
          </h2>
          <h3 className="mb-16 text-center text-5xl font-bold text-white">The Team</h3>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-12 text-center backdrop-blur-sm">
            <p className="text-xl text-white/90">Created by passionate innovators during the AI ATL 2025 hackathon.</p>
            <p className="mt-4 text-white/70">
              A testament to what's possible when creativity meets cutting-edge AI technology.
            </p>
          </div>
        </div>
      </div>

      <StoryBuilder open={storyBuilderOpen} onOpenChange={setStoryBuilderOpen} />
    </div>
  )
}
