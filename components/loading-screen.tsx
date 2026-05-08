"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useEffect, useState } from "react"

export function LoadingScreen({ onComplete }: { onComplete: () => void }) {
  const [progress, setProgress] = useState(0)
  const [showLogo, setShowLogo] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          setTimeout(() => setShowLogo(true), 300)
          setTimeout(onComplete, 2500)
          return 100
        }
        return prev + Math.random() * 15
      })
    }, 100)
    return () => clearInterval(interval)
  }, [onComplete])

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-background"
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Ember particles */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(30)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 rounded-full bg-ember"
              style={{
                left: `${Math.random() * 100}%`,
                bottom: "-10%",
              }}
              animate={{
                y: [0, -window.innerHeight - 100],
                opacity: [0, 1, 1, 0],
                scale: [1, 0.5],
              }}
              transition={{
                duration: 4 + Math.random() * 4,
                repeat: Infinity,
                delay: Math.random() * 3,
                ease: "linear",
              }}
            />
          ))}
        </div>

        {/* HUD Frame */}
        <div className="absolute inset-4 border border-primary/30 pointer-events-none">
          <div className="absolute top-0 left-0 w-8 h-8 border-l-2 border-t-2 border-ember" />
          <div className="absolute top-0 right-0 w-8 h-8 border-r-2 border-t-2 border-ember" />
          <div className="absolute bottom-0 left-0 w-8 h-8 border-l-2 border-b-2 border-ember" />
          <div className="absolute bottom-0 right-0 w-8 h-8 border-r-2 border-b-2 border-ember" />
        </div>

        {/* Scanline effect */}
        <motion.div
          className="absolute inset-0 pointer-events-none opacity-5"
          style={{
            background:
              "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.03) 2px, rgba(255,255,255,0.03) 4px)",
          }}
        />

        <div className="relative z-10 flex flex-col items-center gap-8">
          {/* Logo reveal */}
          <AnimatePresence>
            {showLogo ? (
              <motion.div
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="text-center"
              >
                <motion.h1
                  className="text-6xl md:text-8xl font-black tracking-tighter fire-text"
                  animate={{ textShadow: ["0 0 20px rgba(255,100,50,0.5)", "0 0 40px rgba(255,100,50,0.8)", "0 0 20px rgba(255,100,50,0.5)"] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  {"KK's WAR ROOM"}
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="text-gold text-lg md:text-xl tracking-[0.3em] mt-4"
                >
                  PREPARE FOR BATTLE
                </motion.p>
              </motion.div>
            ) : (
              <motion.div className="flex flex-col items-center gap-6">
                {/* Loading text */}
                <motion.div
                  className="text-primary font-mono text-sm tracking-widest"
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  INITIALIZING WAR ROOM SYSTEMS
                </motion.div>

                {/* Progress bar */}
                <div className="w-64 md:w-96 h-2 bg-muted rounded-full overflow-hidden">
                  <motion.div
                    className="h-full rounded-full"
                    style={{
                      background: "linear-gradient(90deg, #8B0000, #FF4500, #FFD700)",
                      width: `${Math.min(progress, 100)}%`,
                    }}
                    transition={{ duration: 0.1 }}
                  />
                </div>

                {/* Progress percentage */}
                <div className="flex items-center gap-4">
                  <span className="text-ember font-mono text-2xl font-bold">
                    {Math.min(Math.round(progress), 100)}%
                  </span>
                  <span className="text-muted-foreground text-xs tracking-widest">
                    LOADING ASSETS
                  </span>
                </div>

                {/* Loading indicators */}
                <div className="flex gap-2">
                  {[...Array(5)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="w-2 h-2 rounded-full bg-primary"
                      animate={{
                        scale: [1, 1.5, 1],
                        opacity: [0.3, 1, 0.3],
                      }}
                      transition={{
                        duration: 1,
                        repeat: Infinity,
                        delay: i * 0.2,
                      }}
                    />
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Bottom HUD elements */}
        <div className="absolute bottom-8 left-0 right-0 flex justify-center gap-8 text-xs font-mono text-muted-foreground">
          <span>SYS::ONLINE</span>
          <span className="text-ember">AI::ACTIVE</span>
          <span>MODE::COMBAT</span>
        </div>
      </motion.div>
    </AnimatePresence>
  )
}
