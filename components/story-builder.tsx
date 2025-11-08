"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Textarea } from "@/components/ui/textarea"
import { Sparkles, Wand2, ImageIcon, Video, Loader2, RotateCcw, Save, Film } from "lucide-react"
import Image from "next/image"

type Step = "input" | "story" | "storyboard" | "video" | "complete"

interface StoryBuilderProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function StoryBuilder({ open, onOpenChange }: StoryBuilderProps) {
  const [step, setStep] = useState<Step>("input")
  const [idea, setIdea] = useState("")
  const [story, setStory] = useState("")
  const [storyboardImages, setStoryboardImages] = useState<Array<{ url: string; caption: string }>>([])
  const [loading, setLoading] = useState(false)
  const [loadingMessage, setLoadingMessage] = useState("")
  const [progress, setProgress] = useState(0)
  const [displayedStory, setDisplayedStory] = useState("")
  const [isTyping, setIsTyping] = useState(false)

  useEffect(() => {
    if (loading) {
      setProgress(0)
      const interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 95) return prev
          return prev + 5
        })
      }, 200)
      return () => clearInterval(interval)
    } else {
      setProgress(100)
    }
  }, [loading])

  useEffect(() => {
    if (step === "story" && story && !isTyping) {
      setIsTyping(true)
      setDisplayedStory("")
      let index = 0
      const interval = setInterval(() => {
        if (index < story.length) {
          setDisplayedStory((prev) => prev + story[index])
          index++
        } else {
          setIsTyping(false)
          clearInterval(interval)
        }
      }, 20)
      return () => clearInterval(interval)
    }
  }, [story, step, isTyping])

  const handleGenerateStory = async () => {
    setLoading(true)
    setLoadingMessage("Gemini is expanding your idea...")

    await new Promise((resolve) => setTimeout(resolve, 3500))

    const generatedStory = `${idea}

In a realm where imagination knows no bounds, this story unfolds...

Scene 1: The Beginning — The journey starts with a spark of curiosity, a moment that changes everything. The atmosphere is thick with possibility.

Scene 2: The Discovery — As the protagonist delves deeper, they uncover something extraordinary. Colors dance, emotions flow, and the world transforms before their eyes.

Scene 3: The Transformation — What began as a simple idea has blossomed into something profound. The final revelation brings everything together in a breathtaking crescendo.

This is your story, brought to life by the power of AI.`

    setStory(generatedStory)
    setLoading(false)
    setStep("story")
  }

  const handleGenerateStoryboard = async () => {
    setLoading(true)
    setLoadingMessage("Generating cinematic frames using Imagen...")

    await new Promise((resolve) => setTimeout(resolve, 5500))

    const images = [
      {
        url: "/robot-discovering-art-studio-in-purple-space-nebul.jpg",
        caption: "Scene 1 — The Awakening",
      },
      {
        url: "/robot-painting-first-brushstroke-with-cosmic-color.jpg",
        caption: "Scene 2 — The Discovery",
      },
      {
        url: "/robot-creating-beautiful-galaxy-painting-in-space.jpg",
        caption: "Scene 3 — The Transformation",
      },
      {
        url: "/3d-purple-and-white-e-commerce-illustration-with-s.jpg",
        caption: "Scene 4 — The Dream",
      },
    ]

    setStoryboardImages(images)
    setLoading(false)
    setStep("storyboard")
  }

  const handleGenerateVideo = async () => {
    setLoading(true)
    setLoadingMessage("Veo is bringing your story to life...")

    await new Promise((resolve) => setTimeout(resolve, 6000))

    setLoading(false)
    setStep("video")
  }

  const handleSave = () => {
    // Simulate saving to MongoDB
    setStep("complete")
  }

  const handleStartOver = () => {
    setStep("input")
    setIdea("")
    setStory("")
    setDisplayedStory("")
    setStoryboardImages([])
    setIsTyping(false)
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-h-[90vh] max-w-4xl overflow-y-auto border-white/20 bg-gradient-to-br from-[#5B4B8A]/95 via-[#7B5B8A]/95 to-[#8B6B9A]/95 text-white backdrop-blur-xl">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-3 text-3xl font-bold">
            <Sparkles className="h-8 w-8 text-red-400 animate-pulse" />
            Story Builder
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6 py-4">
          {/* Step 1: Idea Input */}
          {step === "input" && (
            <div className="space-y-6 animate-in fade-in duration-500">
              <div>
                <h3 className="mb-4 flex items-center gap-2 text-2xl font-bold">
                  <Sparkles className="h-6 w-6 text-red-400" />
                  Start with an Idea
                </h3>
                <p className="mb-4 text-white/80">
                  Enter your story idea and watch it come to life through AI-powered narrative, visuals, and video.
                </p>
                <Textarea
                  placeholder="Enter your story idea (e.g., 'A robot who learns to paint in space')"
                  value={idea}
                  onChange={(e) => setIdea(e.target.value)}
                  className="min-h-[120px] resize-none border-white/20 bg-white/10 text-white placeholder:text-white/50 focus-visible:ring-red-400"
                />
              </div>
              <Button
                onClick={handleGenerateStory}
                disabled={!idea.trim() || loading}
                className="w-full bg-red-400 text-white hover:bg-red-500 hover:shadow-[0_0_20px_rgba(239,68,68,0.8)] transition-all duration-300"
              >
                {loading ? (
                  <div className="flex w-full flex-col items-center gap-2">
                    <div className="flex items-center gap-2">
                      <Loader2 className="h-5 w-5 animate-spin" />
                      <span className="animate-pulse">{loadingMessage}</span>
                    </div>
                    <div className="h-1 w-full overflow-hidden rounded-full bg-white/20">
                      <div
                        className="h-full bg-gradient-to-r from-red-400 to-red-600 transition-all duration-300"
                        style={{ width: `${progress}%` }}
                      />
                    </div>
                  </div>
                ) : (
                  <>
                    <Wand2 className="mr-2 h-5 w-5" />
                    Generate Story Outline
                  </>
                )}
              </Button>
            </div>
          )}

          {/* Step 2: Expanded Story */}
          {step === "story" && (
            <div className="space-y-6 animate-in fade-in duration-500">
              <div>
                <h3 className="mb-4 flex items-center gap-2 text-2xl font-bold">
                  <Wand2 className="h-6 w-6 text-red-400 animate-pulse" />
                  Your Expanded Story
                </h3>
                <div className="rounded-xl border border-white/20 bg-white/10 p-6 backdrop-blur-sm">
                  <div className="mb-4 flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-red-300">
                    <Sparkles className="h-4 w-4 animate-pulse" />
                    Generated by Gemini 2.5 Flash
                  </div>
                  <p className="whitespace-pre-line leading-relaxed text-white/90">
                    {displayedStory}
                    {isTyping && <span className="animate-pulse">|</span>}
                  </p>
                </div>
              </div>
              <Button
                onClick={handleGenerateStoryboard}
                disabled={loading || isTyping}
                className="w-full bg-red-400 text-white hover:bg-red-500 hover:shadow-[0_0_20px_rgba(239,68,68,0.8)] transition-all duration-300"
              >
                {loading ? (
                  <div className="flex w-full flex-col items-center gap-2">
                    <div className="flex items-center gap-2">
                      <Loader2 className="h-5 w-5 animate-spin" />
                      <span className="animate-pulse">{loadingMessage}</span>
                    </div>
                    <div className="h-1 w-full overflow-hidden rounded-full bg-white/20">
                      <div
                        className="h-full bg-gradient-to-r from-red-400 via-purple-400 to-red-400 bg-[length:200%_100%] animate-shimmer"
                        style={{ width: `${progress}%` }}
                      />
                    </div>
                  </div>
                ) : (
                  <>
                    <ImageIcon className="mr-2 h-5 w-5" />
                    Visualize Scenes with Imagen
                  </>
                )}
              </Button>
            </div>
          )}

          {/* Step 3: Storyboard */}
          {step === "storyboard" && (
            <div className="space-y-6 animate-in fade-in duration-500">
              <div>
                <h3 className="mb-4 flex items-center gap-2 text-2xl font-bold">
                  <ImageIcon className="h-6 w-6 text-red-400 animate-pulse" />
                  Your Storyboard
                </h3>
                <div className="mb-4 flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-red-300">
                  <Sparkles className="h-4 w-4 animate-pulse" />
                  Generated by Imagen 3
                </div>
                <div className="grid gap-6">
                  {storyboardImages.map((image, idx) => (
                    <div
                      key={idx}
                      className="group overflow-hidden rounded-xl border border-white/20 bg-white/5 transition-all duration-300 hover:border-red-400/50 hover:shadow-[0_0_20px_rgba(239,68,68,0.3)] animate-in fade-in"
                      style={{ animationDelay: `${idx * 150}ms` }}
                    >
                      <div className="aspect-video w-full overflow-hidden bg-white/10">
                        <Image
                          src={image.url || "/placeholder.svg"}
                          alt={image.caption}
                          width={800}
                          height={450}
                          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                      </div>
                      <div className="p-4">
                        <p className="font-semibold text-white">{image.caption}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <Button
                onClick={handleGenerateVideo}
                disabled={loading}
                className="w-full bg-red-400 text-white hover:bg-red-500 hover:shadow-[0_0_20px_rgba(239,68,68,0.8)] transition-all duration-300"
              >
                {loading ? (
                  <div className="flex w-full flex-col items-center gap-2">
                    <div className="flex items-center gap-2">
                      <Film className="h-5 w-5 animate-spin" />
                      <span className="animate-pulse">{loadingMessage}</span>
                    </div>
                    <div className="h-1 w-full overflow-hidden rounded-full bg-white/20">
                      <div
                        className="h-full bg-gradient-to-r from-red-400 to-red-600 transition-all duration-300"
                        style={{ width: `${progress}%` }}
                      />
                    </div>
                  </div>
                ) : (
                  <>
                    <Video className="mr-2 h-5 w-5" />
                    Create Video
                  </>
                )}
              </Button>
            </div>
          )}

          {/* Step 4: Video Preview */}
          {step === "video" && (
            <div className="space-y-6 animate-in fade-in duration-500">
              <div>
                <h3 className="mb-4 flex items-center gap-2 text-2xl font-bold">
                  <Video className="h-6 w-6 text-red-400 animate-pulse" />
                  Your Cinematic Story
                </h3>
                <div className="mb-4 flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-red-300">
                  <Sparkles className="h-4 w-4 animate-pulse" />
                  Generated by Veo (Simulated Preview)
                </div>
                <div className="overflow-hidden rounded-xl border border-white/20 bg-white/5 transition-all duration-300 hover:border-red-400/50 hover:shadow-[0_0_30px_rgba(239,68,68,0.3)]">
                  <div className="group relative aspect-video w-full cursor-pointer bg-gradient-to-br from-purple-900/50 to-red-900/50">
                    {/* Background image */}
                    <Image
                      src="/robot-creating-beautiful-galaxy-painting-in-space.jpg"
                      alt="Video preview"
                      fill
                      className="object-cover opacity-40 transition-opacity duration-500 group-hover:opacity-60"
                    />
                    {/* Play button overlay */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="flex h-24 w-24 items-center justify-center rounded-full bg-red-400/80 backdrop-blur-sm transition-all duration-300 group-hover:scale-110 group-hover:bg-red-400 group-hover:shadow-[0_0_40px_rgba(239,68,68,0.8)]">
                        <Video className="h-12 w-12 text-white" />
                      </div>
                    </div>
                    {/* Caption */}
                    <div className="absolute bottom-4 left-4 right-4 text-center">
                      <p className="font-semibold text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                        Click to play your cinematic story
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex gap-4">
                <Button
                  onClick={handleSave}
                  className="flex-1 bg-red-400 text-white hover:bg-red-500 hover:shadow-[0_0_20px_rgba(239,68,68,0.8)] transition-all duration-300"
                >
                  <Save className="mr-2 h-5 w-5" />
                  Save Story
                </Button>
                <Button
                  onClick={handleStartOver}
                  variant="outline"
                  className="flex-1 border-white/20 bg-white/10 text-white hover:bg-white/20 hover:border-red-400/50 transition-all duration-300"
                >
                  <RotateCcw className="mr-2 h-5 w-5" />
                  Start Over
                </Button>
              </div>
            </div>
          )}

          {/* Step 5: Complete */}
          {step === "complete" && (
            <div className="space-y-6 animate-in fade-in duration-500 text-center">
              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-red-400/20 animate-pulse">
                <Save className="h-10 w-10 text-red-400" />
              </div>
              <div>
                <h3 className="mb-2 text-2xl font-bold">Story Saved Successfully!</h3>
                <p className="text-white/80">Your story has been saved to MongoDB Atlas and is ready to share.</p>
              </div>
              <Button
                onClick={handleStartOver}
                className="bg-red-400 text-white hover:bg-red-500 hover:shadow-[0_0_20px_rgba(239,68,68,0.8)] transition-all duration-300"
              >
                <Sparkles className="mr-2 h-5 w-5" />
                Create Another Story
              </Button>
            </div>
          )}
        </div>

        <div className="border-t border-white/10 pt-4 text-center">
          <p className="text-xs font-semibold uppercase tracking-wide text-white/50">
            <span className="animate-pulse">✨</span> AI Powered by Gemini • Imagen • Veo{" "}
            <span className="animate-pulse">✨</span>
          </p>
        </div>
      </DialogContent>
    </Dialog>
  )
}
