"use client"

import { motion } from "framer-motion"
import { useState, useEffect } from "react"

const warRoomContent = [
  "A 60-min AI-powered LIVE business simulation testing decision-making under pressure.",
  "Build a business in 6 real-time stages and pitch investors in a Shark Tank-style AI WAR ROOM.",
  "Experience a LIVE AI business challenge where teams build, decide, and pitch under pressure.",
  "Real-time business building meets investor pitching in an intense AI-powered WAR ROOM simulation.",
  "Built from years of leadership, entrepreneurship, process excellence, and sports experience — powered by AI.",
]

export function TypingText() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [displayedText, setDisplayedText] = useState("")
  const [isTyping, setIsTyping] = useState(true)

  useEffect(() => {
    if (currentIndex >= warRoomContent.length) {
      return
    }

    const text = warRoomContent[currentIndex]
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
          setCurrentIndex((prev) => (prev + 1) % warRoomContent.length)
          setDisplayedText("")
        }, 3000)
      }
    }, 40)

    return () => clearInterval(typeInterval)
  }, [currentIndex])

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8 }}
      className="max-w-4xl mx-auto mb-16 p-6 md:p-8 glass-metallic rounded-lg relative"
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
        <span className="text-xs font-mono text-ember tracking-widest">KK&apos;S WAR ROOM</span>
      </div>

      {/* Typing text */}
      <p className="text-lg md:text-xl text-foreground/90 leading-relaxed min-h-[80px]">
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
        {warRoomContent.map((_, i) => (
          <motion.div
            key={i}
            className={`h-1 rounded-full transition-all duration-300 ${
              i === currentIndex ? "w-8 bg-ember" : i < currentIndex ? "w-8 bg-ember/50" : "w-2 bg-muted"
            }`}
            animate={{
              width: i === currentIndex ? 32 : i < currentIndex ? 32 : 8,
            }}
          />
        ))}
      </div>
    </motion.div>
  )
}
