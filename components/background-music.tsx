"use client"

import { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Volume2, VolumeX, Music } from "lucide-react"

export function BackgroundMusic() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [showPrompt, setShowPrompt] = useState(true)
  const [volume, setVolume] = useState(0.3)
  const audioRef = useRef<HTMLAudioElement>(null)

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume
    }
  }, [volume])

  const startMusic = () => {
    if (audioRef.current) {
      audioRef.current.play()
      setIsPlaying(true)
      setShowPrompt(false)
    }
  }

  const toggleMusic = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause()
      } else {
        audioRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  const dismissPrompt = () => {
    setShowPrompt(false)
  }

  return (
    <>
      <audio ref={audioRef} src="/audio/war-thunder.mp3" loop preload="auto" />

      {/* Initial prompt to enable music */}
      <AnimatePresence>
        {showPrompt && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50"
          >
            <div className="flex items-center gap-3 px-5 py-3 bg-card/90 backdrop-blur-md border border-ember/30 rounded-lg shadow-lg shadow-ember/10">
              <div className="flex items-center gap-2 text-ember">
                <Music className="w-5 h-5" />
                <span className="text-sm font-medium text-foreground">Enable battle music?</span>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={startMusic}
                  className="px-4 py-1.5 bg-ember/20 hover:bg-ember/30 border border-ember/50 rounded text-sm font-semibold text-ember transition-colors"
                >
                  Enable
                </button>
                <button
                  onClick={dismissPrompt}
                  className="px-4 py-1.5 bg-muted/50 hover:bg-muted/70 border border-border rounded text-sm text-muted-foreground transition-colors"
                >
                  No thanks
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Persistent music control button */}
      {!showPrompt && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="fixed bottom-6 right-6 z-50 flex items-center gap-3"
        >
          {/* Volume slider - shows on hover */}
          <motion.div
            initial={{ width: 0, opacity: 0 }}
            whileHover={{ width: "auto", opacity: 1 }}
            className="overflow-hidden"
          >
            <input
              type="range"
              min="0"
              max="1"
              step="0.1"
              value={volume}
              onChange={(e) => setVolume(parseFloat(e.target.value))}
              className="w-20 h-1 bg-muted rounded-full appearance-none cursor-pointer accent-ember"
            />
          </motion.div>

          {/* Toggle button */}
          <button
            onClick={toggleMusic}
            className="group relative p-3 bg-card/80 backdrop-blur-md border border-ember/30 rounded-full shadow-lg shadow-ember/10 hover:border-ember/60 transition-all"
          >
            {/* Animated ring when playing */}
            {isPlaying && (
              <motion.div
                className="absolute inset-0 rounded-full border-2 border-ember/50"
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.5, 0, 0.5],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            )}
            {isPlaying ? (
              <Volume2 className="w-5 h-5 text-ember" />
            ) : (
              <VolumeX className="w-5 h-5 text-muted-foreground group-hover:text-ember transition-colors" />
            )}
          </button>
        </motion.div>
      )}
    </>
  )
}
