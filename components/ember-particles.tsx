"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

interface Particle {
  id: number
  x: number
  size: number
  duration: number
  delay: number
  xOffset: number
}

export function EmberParticles({ count = 50 }: { count?: number }) {
  const [particles, setParticles] = useState<Particle[]>([])
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const newParticles: Particle[] = []
    for (let i = 0; i < count; i++) {
      newParticles.push({
        id: i,
        x: Math.random() * 100,
        size: Math.random() * 4 + 1,
        duration: Math.random() * 8 + 6,
        delay: Math.random() * 5,
        xOffset: Math.sin(i) * 100,
      })
    }
    setParticles(newParticles)
  }, [count])

  if (!mounted) return null

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-10">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full"
          style={{
            left: `${particle.x}%`,
            bottom: "-5%",
            width: particle.size,
            height: particle.size,
            background: `radial-gradient(circle, rgba(255,140,0,1) 0%, rgba(255,69,0,0.8) 50%, rgba(139,0,0,0) 100%)`,
            boxShadow: `0 0 ${particle.size * 2}px rgba(255,100,0,0.6)`,
          }}
          animate={{
            y: ["0vh", "-120vh"],
            x: [0, particle.xOffset],
            opacity: [0, 1, 1, 0],
            scale: [1, 0.3],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            delay: particle.delay,
            ease: "linear",
          }}
        />
      ))}
    </div>
  )
}
