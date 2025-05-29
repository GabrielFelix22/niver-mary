"use client"

import { useState } from "react"
import { X } from "lucide-react"
import { Button } from "@/components/ui/button"

interface VideoPlayerProps {
  videoUrl: string
  title: string
}

export function VideoPlayer({ videoUrl, title }: VideoPlayerProps) {
  const [isOpen, setIsOpen] = useState(false)

  const openVideo = () => setIsOpen(true)
  const closeVideo = () => setIsOpen(false)

  return (
    <>
      <Button onClick={openVideo} className="bg-white text-black hover:bg-white/90 flex items-center gap-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-5 w-5"
        >
          <polygon points="5 3 19 12 5 21 5 3" />
        </svg>
        Assistir
      </Button>

      {isOpen && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <div className="relative w-full max-w-4xl">
            <Button
              variant="ghost"
              onClick={closeVideo}
              className="absolute -top-12 right-0 text-white hover:bg-white/10"
            >
              <X className="h-6 w-6" />
            </Button>

            <div className="aspect-video w-full bg-black rounded-lg overflow-hidden">
              <video src={videoUrl} controls autoPlay className="w-full h-full" title={title}>
                Seu navegador não suporta a reprodução de vídeos.
              </video>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
