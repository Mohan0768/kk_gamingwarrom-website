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

  const [currentLine, setCurrentLine] = useState(0)
  const [displayedText, setDisplayedText] = useState("")
  const [isTyping, setIsTyping] = useState(true)

  useEffect(() => {
    if (currentLine >= narrationText.length) {
      setCurrentLine(0)
      setDisplayedText("")
      return
    }

    const text = narrationText[currentLine]
    let charIndex = 0
    setIsTyping(true)

    const typeInterval = setInterval(() => {
      if (charIndex <= text.length) {
        setDisplayedText(text.slice(0, charIndex))
        charIndex++
      } else {
        clearInterval(typeInterval)
        setIsTyping(false)
        setTimeout(() => {
          setCurrentLine((prev) => prev + 1)
          setDisplayedText("")
        }, 3000)
      }
    }, 30)

    return () => clearInterval(typeInterval)
  }, [currentLine])

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
        {/* Dark gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background z-10" />
        
        {/* Animated fire/smoke background */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(139,0,0,0.3)_0%,_transparent_70%)]" />
        
        {/* Animated gradient orbs */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl opacity-30"
          style={{ background: "radial-gradient(circle, rgba(255,69,0,0.5) 0%, transparent 70%)" }}
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
            y: [0, -30, 0],
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full blur-3xl opacity-20"
          style={{ background: "radial-gradient(circle, rgba(255,140,0,0.5) 0%, transparent 70%)" }}
          animate={{
            scale: [1.2, 1, 1.2],
            x: [0, -40, 0],
            y: [0, 40, 0],
          }}
          transition={{ duration: 10, repeat: Infinity }}
        />
      </motion.div>

      {/* Content */}
      <motion.div
        className="relative z-20 container mx-auto px-4 py-20 text-center"
        style={{ opacity }}
      >
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
          className="text-xl md:text-2xl text-gold tracking-[0.2em] font-light mb-12"
        >
          THE ULTIMATE AI-POWERED LEADERSHIP BATTLEFIELD
        </motion.p>

        {/* Narration box */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.9 }}
          className="max-w-4xl mx-auto mb-12 p-6 md:p-8 glass-metallic rounded-lg relative"
        >
          {/* Corner decorations */}
          <div className="absolute top-0 left-0 w-4 h-4 border-l-2 border-t-2 border-ember" />
          <div className="absolute top-0 right-0 w-4 h-4 border-r-2 border-t-2 border-ember" />
          <div className="absolute bottom-0 left-0 w-4 h-4 border-l-2 border-b-2 border-ember" />
          <div className="absolute bottom-0 right-0 w-4 h-4 border-r-2 border-b-2 border-ember" />

          {/* Speaker indicator */}
          <div className="flex items-center gap-3 mb-4">
            <motion.div
              className="w-3 h-3 rounded-full bg-ember"
              animate={{ scale: isTyping ? [1, 1.3, 1] : 1 }}
              transition={{ duration: 0.5, repeat: isTyping ? Infinity : 0 }}
            />
            <span className="text-xs font-mono text-ember tracking-widest">COMMANDER KK</span>
          </div>

          {/* Narration text */}
          <p className="text-lg md:text-xl text-foreground/90 leading-relaxed min-h-[100px]">
            {displayedText}
            {isTyping && (
              <motion.span
                className="inline-block w-0.5 h-5 bg-ember ml-1"
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 0.8, repeat: Infinity }}
              />
            )}
          </p>

          {/* Progress indicators */}
          <div className="flex justify-center gap-2 mt-6">
            {narrationText.map((_, i) => (
              <div
                key={i}
                className={`w-8 h-1 rounded-full transition-all duration-300 ${
                  i === currentLine ? "bg-ember" : i < currentLine ? "bg-ember/50" : "bg-muted"
                }`}
              />
            ))}
          </div>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <FireButton size="large" variant="primary">
            ENTER THE WAR ROOM
          </FireButton>
          <FireButton size="large" variant="secondary">
            WATCH THE BATTLE
          </FireButton>
        </motion.div>

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
