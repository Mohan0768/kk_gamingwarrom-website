"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { FireButton } from "./fire-button"

export function CTASection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="relative py-32 overflow-hidden">
      {/* Dramatic background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-t from-background via-primary/20 to-background" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(255,69,0,0.3)_0%,_transparent_60%)]" />
        
        {/* Animated fire embers */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-ember"
            style={{
              left: `${Math.random() * 100}%`,
              bottom: "0%",
            }}
            animate={{
              y: [0, -500],
              opacity: [0, 1, 1, 0],
              scale: [1, 0.5],
            }}
            transition={{
              duration: 5 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "linear",
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-ember/30 bg-ember/10 mb-8"
          >
            <motion.div
              className="w-2 h-2 rounded-full bg-ember"
              animate={{ scale: [1, 1.5, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
            <span className="text-xs font-mono tracking-widest text-ember">FINAL MISSION OBJECTIVE</span>
          </motion.div>

          {/* Main heading */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-4xl md:text-6xl lg:text-8xl font-black tracking-tight mb-6"
          >
            <span className="text-foreground">ARE YOU READY</span>
            <br />
            <span className="fire-text">FOR BATTLE?</span>
          </motion.h2>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-xl md:text-2xl text-muted-foreground mb-12 leading-relaxed"
          >
            The War Room awaits. 60 minutes that will transform how you think, 
            decide, and lead under pressure. Your battlefield is calling.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
          >
            <FireButton size="large" variant="primary">
              ENTER THE WAR ROOM
            </FireButton>
            <FireButton size="large" variant="secondary">
              START THE SIMULATION
            </FireButton>
          </motion.div>

          {/* Trust indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="flex flex-wrap items-center justify-center gap-8 text-sm text-muted-foreground"
          >
            <div className="flex items-center gap-2">
              <span className="text-gold">★★★★★</span>
              <span>5,000+ Warriors Trained</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-ember">●</span>
              <span>AI-Powered Analysis</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-gold">⚡</span>
              <span>60-Minute Intensity</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Decorative frame */}
        <div className="absolute inset-8 border border-ember/10 pointer-events-none">
          <div className="absolute top-0 left-0 w-16 h-16 border-l-2 border-t-2 border-ember" />
          <div className="absolute top-0 right-0 w-16 h-16 border-r-2 border-t-2 border-ember" />
          <div className="absolute bottom-0 left-0 w-16 h-16 border-l-2 border-b-2 border-ember" />
          <div className="absolute bottom-0 right-0 w-16 h-16 border-r-2 border-b-2 border-ember" />
        </div>
      </div>
    </section>
  )
}
