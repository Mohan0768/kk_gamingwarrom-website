"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import { FireButton } from "./fire-button"

export function HeroSection() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [0, 200])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

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
          <a href="https://warroom-demo-262374983592.us-central1.run.app/" target="_blank" rel="noopener noreferrer">
            <FireButton size="large" variant="secondary">
              WARROOM FREE TRIAL
            </FireButton>
          </a>
        </motion.div>
      </motion.div>
    </section>
  )
}
