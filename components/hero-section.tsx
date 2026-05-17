"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"

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
      {/* Animated background */}
      <motion.div
        className="absolute inset-0 z-0"
        style={{ y }}
      >
        {/* Background image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/images/war-room-hero-bg.png')",
          }}
        />
        
        {/* Dark overlay for text legibility */}
        <div className="absolute inset-0 bg-black/30 z-10" />
      </motion.div>

      {/* Content */}
      <motion.div
        className="relative z-20 container mx-auto px-4 py-20 text-center"
        style={{ opacity }}
      >
        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center gap-2"
          >
            <span className="text-xs font-mono text-muted-foreground tracking-widest">SCROLL TO DEPLOY</span>
            <div className="w-6 h-10 rounded-full border-2 border-ember/50 flex justify-center pt-2">
              <motion.div
                className="w-1.5 h-3 rounded-full bg-ember"
                animate={{ y: [0, 12, 0], opacity: [1, 0.3, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  )
}
