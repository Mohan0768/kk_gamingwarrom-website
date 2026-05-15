"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { FireButton } from "./fire-button"

export function SharkTankSection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-card/30 via-primary/10 to-background" />
        {/* Dramatic radial gradient */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_rgba(255,69,0,0.2)_0%,_transparent_60%)]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-5xl mx-auto"
        >
          <span className="inline-block text-xs font-mono tracking-[0.3em] text-ember mb-4">
            [ FINAL SHOWDOWN ]
          </span>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tight mb-6">
            <span className="fire-text">SHARK TANK</span>
            <br />
            <span className="text-foreground">INVESTOR ARENA</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground mb-12 leading-relaxed max-w-3xl mx-auto">
            The ultimate test awaits. After surviving 5 grueling stages, you must present your 
            battle-hardened business to a panel of AI investors. Convince them, and emerge victorious. 
            Fail, and return to the trenches.
          </p>
        </motion.div>

        {/* Arena visualization */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 1, delay: 0.3 }}
          className="relative max-w-4xl mx-auto"
        >
          {/* Arena frame */}
          <div className="relative p-8 md:p-12 glass-metallic rounded-2xl">
            {/* Corner brackets */}
            <div className="absolute top-0 left-0 w-12 h-12 border-l-4 border-t-4 border-ember rounded-tl-lg" />
            <div className="absolute top-0 right-0 w-12 h-12 border-r-4 border-t-4 border-ember rounded-tr-lg" />
            <div className="absolute bottom-0 left-0 w-12 h-12 border-l-4 border-b-4 border-ember rounded-bl-lg" />
            <div className="absolute bottom-0 right-0 w-12 h-12 border-r-4 border-b-4 border-ember rounded-br-lg" />

            {/* Investors row */}
            <div className="flex justify-center gap-4 md:gap-8 mb-12">
              {[1, 2, 3, 4, 5].map((i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: -20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.5 + i * 0.1 }}
                  className="relative"
                >
                  <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-gradient-to-br from-muted to-card border-2 border-ember/30 flex items-center justify-center">
                    <span className="text-2xl md:text-3xl">🦈</span>
                  </div>
                  <motion.div
                    className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-ember"
                    animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 }}
                  />
                </motion.div>
              ))}
            </div>

            {/* VS Divider */}
            <div className="flex items-center justify-center gap-4 mb-12">
              <div className="flex-1 h-px bg-gradient-to-r from-transparent to-ember" />
              <motion.span
                className="text-4xl md:text-6xl font-black fire-text"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                VS
              </motion.span>
              <div className="flex-1 h-px bg-gradient-to-l from-transparent to-ember" />
            </div>

            {/* Participant */}
            <div className="flex flex-col items-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.8, delay: 1 }}
                className="relative"
              >
                <div className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-gradient-to-br from-ember to-primary border-4 border-gold flex items-center justify-center">
                  <span className="text-4xl md:text-5xl">⚔️</span>
                </div>
                {/* Pulsing ring */}
                <motion.div
                  className="absolute inset-0 rounded-full border-2 border-ember"
                  animate={{ scale: [1, 1.3, 1], opacity: [0.8, 0, 0.8] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </motion.div>
              <motion.p
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ delay: 1.2 }}
                className="mt-4 text-lg font-bold text-foreground"
              >
                YOU
              </motion.p>
              <motion.p
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ delay: 1.4 }}
                className="text-sm text-muted-foreground"
              >
                The Challenger
              </motion.p>
            </div>

            {/* Status indicators */}
            <div className="flex justify-center gap-8 mt-12 text-xs font-mono">
              <div className="flex items-center gap-2">
                <motion.div
                  className="w-2 h-2 rounded-full bg-green-500"
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                />
                <span className="text-muted-foreground">PITCH READY</span>
              </div>
              <div className="flex items-center gap-2">
                <motion.div
                  className="w-2 h-2 rounded-full bg-gold"
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 1.5, repeat: Infinity, delay: 0.5 }}
                />
                <span className="text-muted-foreground">AI JUDGING ACTIVE</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.5 }}
          className="text-center mt-12"
        >
          <FireButton size="large">
            FACE THE SHARKS
          </FireButton>
        </motion.div>
      </div>
    </section>
  )
}
