"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef, useState } from "react"
import { FireButton } from "./fire-button"
import { Volume2, VolumeX } from "lucide-react"

export function HeroSection() {
  const ref = useRef<HTMLDivElement>(null)
  const [isMuted, setIsMuted] = useState(false)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [0, 200])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  const toggleMute = () => {
    const audio = document.querySelector('audio') as HTMLAudioElement
    if (audio) {
      if (isMuted) {
        audio.muted = false
      } else {
        audio.muted = true
      }
      setIsMuted(!isMuted)
    }
  }

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Layer 1: Background texture image (z-0) */}
      <motion.div
        className="absolute inset-0 z-0"
        style={{ y }}
      >
        {/* Mobile/Tablet background */}
        <div
          className="absolute inset-0 bg-contain bg-center bg-no-repeat md:hidden"
          style={{
            backgroundImage: "url('/images/kk-warroom-hero.jpg')",
            backgroundColor: "#000",
          }}
        />
        
        {/* Desktop background */}
        <div
          className="hidden md:block absolute inset-0 bg-contain bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/images/kk-warroom-hero.jpg')",
            backgroundColor: "#000",
          }}
        />
      </motion.div>

      {/* Layer 2: Effects and overlays (z-10) */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        {/* Dark overlay for text legibility */}
        <div className="absolute inset-0 bg-black/20" />
        
        {/* Ambient fire particles */}
        <motion.div
          className="absolute inset-0"
          animate={{
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{ duration: 4, repeat: Infinity }}
        >
          <div className="absolute top-10 right-20 w-32 h-32 bg-ember/10 rounded-full blur-3xl" />
          <div className="absolute bottom-20 left-10 w-40 h-40 bg-amber-600/5 rounded-full blur-3xl" />
        </motion.div>
      </div>

      {/* Layer 3: Content - Text and Button Animations (z-20) */}
      <motion.div
        className="relative z-20 container mx-auto px-4 text-center flex flex-col items-center justify-center w-full h-screen pointer-events-auto"
        style={{ opacity }}
      >
        {/* Mute Button - Top Right */}
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          onClick={toggleMute}
          className="absolute top-6 right-6 p-3 bg-card/80 backdrop-blur-md border border-ember/30 rounded-full hover:border-ember/60 transition-all shadow-lg shadow-ember/10 group"
          aria-label="Toggle music mute"
        >
          {isMuted ? (
            <VolumeX className="w-5 h-5 text-muted-foreground group-hover:text-ember transition-colors" />
          ) : (
            <Volume2 className="w-5 h-5 text-ember" />
          )}
        </motion.button>

        {/* Spacer to push content down */}
        <div className="flex-1" />
        
        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3 w-full px-2"
        >
          <a href="https://warroom.humanfirstbykk.com" target="_blank" rel="noopener noreferrer">
            <FireButton size="large" variant="primary">
              ENTER THE WAR ROOM
            </FireButton>
          </a>
          <a href="https://war-roomdemo.vercel.app/" target="_blank" rel="noopener noreferrer">
            <FireButton size="large" variant="secondary">
              WARROOM FREE TRIAL
            </FireButton>
          </a>
        </motion.div>
      </motion.div>
    </section>
  )
}
