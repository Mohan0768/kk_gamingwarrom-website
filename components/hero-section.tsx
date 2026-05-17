"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef, useState, useEffect } from "react"
import { FireButton } from "./fire-button"

const narrationText = [
  "I have put all my years of experience as an award-winning Leadership Training Professional, an entrepreneur, a process excellence expert, and a sports player into WAR ROOM and trained an AI to act as me.",
  "KK's War Room is a 60-minute, high-intensity AI-Powered LIVE business simulation that reveals how participants think, decide, and take ownership under pressure.",
  "Participants build a business across 6 stages in real time and pitch to investors in a shark-tank inspired WAR ROOM LIVE AI simulation.",
]

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
        className="relative z-20 container mx-auto px-4 py-20 text-center flex flex-col h-full justify-between"
        style={{ opacity }}
      >
        {/* CTA Buttons - Moved to top */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-12"
        >
          <FireButton size="large" variant="primary">
            ENTER THE WAR ROOM
          </FireButton>
          <FireButton size="large" variant="secondary">
            WARROOM FREE TRIAL
          </FireButton>
        </motion.div>

        {/* Center content */}
        <div className="flex flex-col items-center justify-center flex-1">
          {/* War Room badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-ember/30 bg-ember/5 mb-8"
          >
            <motion.div
              className="w-2 h-2 rounded-full bg-ember"
              animate={{ scale: [1, 1.5, 1], opacity: [1, 0.5, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
            <span className="text-xs font-mono tracking-widest text-ember">LIVE AI SIMULATION</span>
          </motion.div>

          {/* Main title */}
          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-tighter mb-6"
          >
            <span className="fire-text">{"KK's"}</span>
            <br />
            <span className="text-foreground">WAR ROOM</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="text-xl md:text-2xl text-gold tracking-[0.2em] font-light"
          >
            THE ULTIMATE AI-POWERED LEADERSHIP BATTLEFIELD
          </motion.p>
        </div>

        {/* Scroll indicator - Moved to bottom */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="pb-12"
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
