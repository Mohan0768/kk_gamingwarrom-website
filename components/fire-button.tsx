"use client"

import { motion } from "framer-motion"
import { ReactNode } from "react"

interface FireButtonProps {
  children: ReactNode
  onClick?: () => void
  variant?: "primary" | "secondary"
  size?: "default" | "large"
  className?: string
}

export function FireButton({
  children,
  onClick,
  variant = "primary",
  size = "default",
  className = "",
}: FireButtonProps) {
  const isPrimary = variant === "primary"
  const isLarge = size === "large"

  return (
    <motion.button
      onClick={onClick}
      className={`
        relative overflow-hidden font-black tracking-wider uppercase transition-all min-h-[44px] sm:min-h-[48px]
        ${isLarge ? "px-4 py-3 sm:px-8 sm:py-4 md:px-12 md:py-5 text-xs sm:text-base md:text-lg lg:text-xl" : "px-6 py-2 sm:px-8 sm:py-3 text-xs sm:text-sm md:text-base"}
        ${isPrimary 
          ? "bg-gradient-to-r from-primary via-ember to-primary text-primary-foreground" 
          : "bg-transparent border-2 border-ember text-ember hover:bg-ember/10"
        }
        ${className}
      `}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      style={{
        clipPath: "polygon(10px 0, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%, 0 10px)",
      }}
    >
      {/* Animated border glow */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        animate={{
          boxShadow: [
            "0 0 20px rgba(255,100,50,0.4), inset 0 0 20px rgba(255,100,50,0.1)",
            "0 0 40px rgba(255,100,50,0.6), inset 0 0 30px rgba(255,100,50,0.2)",
            "0 0 20px rgba(255,100,50,0.4), inset 0 0 20px rgba(255,100,50,0.1)",
          ],
        }}
        transition={{ duration: 2, repeat: Infinity }}
      />

      {/* Ember particles on hover */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
      >
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-gold"
            style={{
              left: `${10 + i * 12}%`,
              bottom: "0%",
            }}
            animate={{
              y: [0, -30, -60],
              opacity: [0, 1, 0],
              scale: [1, 0.5, 0],
            }}
            transition={{
              duration: 1,
              repeat: Infinity,
              delay: i * 0.1,
            }}
          />
        ))}
      </motion.div>

      {/* Button text */}
      <span className="relative z-10">{children}</span>

      {/* Corner accents */}
      <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-gold/50" />
      <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-gold/50" />
    </motion.button>
  )
}
