"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { TypingText } from "./typing-text"

const features = [
  {
   
    title: "60 Minutes of Intensity",
    description: "A compressed battlefield where every second counts. Make decisions under pressure that reveal your true leadership DNA.",
  },
  {
    icon: null,
    hasImage: true,
    title: "AI-Powered Analysis",
    description: "Our advanced AI observes, analyzes, and provides real-time feedback on your decision-making patterns and leadership style.",
  },
  {
    icon: "🎯",
    title: "Real Business Scenarios",
    description: "Navigate authentic business challenges that test your strategic thinking, resource allocation, and team management skills.",
  },
  {
    icon: "🏆",
    title: "Competitive Environment",
    description: "Compete against other participants in a high-stakes simulation where only the strongest strategies survive.",
  },
]

export function AboutSection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="relative py-16 sm:py-24 md:py-32 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/50 to-background" />

      {/* Decorative lines */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-ember/30 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-ember/30 to-transparent" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.span
            className="inline-block text-xs font-mono tracking-[0.2em] sm:tracking-[0.3em] text-ember mb-3 sm:mb-4"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            [ MISSION BRIEFING ]
          </motion.span>
          <h2 className="text-2xl sm:text-4xl md:text-6xl lg:text-7xl font-black tracking-tight mb-4 sm:mb-6">
            <span className="text-foreground">ABOUT</span>{" "}
            <span className="fire-text">THE WAR ROOM</span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            The War Room is not just a simulation—{"it's"} a crucible that forges leaders through the fire of real-world business challenges.
          </p>
        </motion.div>

        {/* Feature cards carousel */}
        <TypingText />
        <div className="my-12 sm:my-16 md:my-20 overflow-x-auto scrollbar-hide">
          <div className="flex gap-4 sm:gap-6 lg:gap-8 min-w-max pb-4">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.8, delay: 0.2 + index * 0.12 }}
                className="group relative flex-shrink-0 w-full sm:w-96 md:w-96 snap-center"
              >
                {/* Flame glow background - outer */}
                <motion.div
                  className="absolute -inset-1 rounded-lg bg-gradient-to-br from-ember via-gold to-ember opacity-0 group-hover:opacity-40 blur-lg transition-opacity duration-500 z-0"
                  animate={{
                    opacity: [0.15, 0.3, 0.15],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: index * 0.3,
                  }}
                />

                {/* Inner flame glow with multiple layers */}
                <motion.div
                  className="absolute -inset-0.5 rounded-lg bg-gradient-to-r from-amber-600/0 via-orange-500/20 to-red-600/0 opacity-0 group-hover:opacity-60 blur-md transition-opacity duration-500 z-0"
                  animate={{
                    boxShadow: [
                      "0 0 20px 5px rgba(255, 102, 0, 0.3)",
                      "0 0 40px 15px rgba(255, 69, 0, 0.4)",
                      "0 0 20px 5px rgba(255, 102, 0, 0.3)",
                    ],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: index * 0.3,
                  }}
                />

                <div className="glass-metallic p-4 sm:p-6 md:p-8 rounded-lg h-full relative overflow-hidden transition-all duration-500 hover:border-ember/80 border border-ember/20 z-10 shadow-lg"
                  style={{
                    boxShadow: "inset 0 1px 0 0 rgba(255, 69, 0, 0.1), 0 0 0 1px rgba(255, 69, 0, 0.1)"
                  }}
                >
                  {/* Animated gradient background on hover */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-ember/15 via-transparent to-ember/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                  />

                  {/* Animated corner accents */}
                  <motion.div className="absolute top-0 left-0 w-6 h-6 border-l-2 border-t-2 border-ember/30 group-hover:border-ember transition-colors duration-300" />
                  <motion.div className="absolute bottom-0 right-0 w-6 h-6 border-r-2 border-b-2 border-ember/30 group-hover:border-ember transition-colors duration-300" />

                  {/* Animated light streak effect */}
                  <motion.div
                    className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-ember/50 to-transparent"
                    initial={{ opacity: 0, x: "-100%" }}
                    whileHover={{ opacity: 1, x: "100%" }}
                    transition={{ duration: 0.8 }}
                  />

                  <div className="relative z-10">
                    {/* Icon or Image with scale animation */}
                    {feature.hasImage ? (
                      <div className="relative mb-2 sm:mb-4 inline-block">
                        {/* Glow effect background */}
                        <motion.div
                          className="absolute -inset-3 sm:-inset-4 rounded-full"
                          animate={{
                            boxShadow: [
                              "0 0 15px 2px rgba(255, 102, 0, 0.5)",
                              "0 0 30px 6px rgba(255, 69, 0, 0.6)",
                              "0 0 15px 2px rgba(255, 102, 0, 0.5)",
                            ],
                          }}
                          transition={{
                            duration: 2.5,
                            repeat: Infinity,
                            ease: "easeInOut",
                          }}
                        />
                        {/* Image */}
                        <motion.img
                          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/AdobeExpressPhotos_0ddd2ce1ef1d4c70be03b6f3db057d09_CopyEdited-ZKxz0SEITYTerCUFDo8Y1TOmsSA8z3.png"
                          alt="AI-Powered Analysis"
                          className="relative z-10 w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 object-contain"
                          whileHover={{ scale: 1.1 }}
                          transition={{ type: "spring", stiffness: 400, damping: 10 }}
                        />
                      </div>
                    ) : (
                      <motion.div
                        className="text-2xl sm:text-3xl md:text-4xl mb-2 sm:mb-4 inline-block"
                        whileHover={{ scale: 1.2, rotate: 5 }}
                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                      >
                        {feature.icon}
                      </motion.div>
                    )}

                    {/* Title with color transition */}
                    <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-foreground mb-2 sm:mb-3 group-hover:text-ember transition-colors duration-300">
                      {feature.title}
                    </h3>

                    {/* Description */}
                    <p className="text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </div>

                  {/* Animated bottom accent line */}
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-ember to-transparent"
                    initial={{ scaleX: 0, opacity: 0 }}
                    whileHover={{ scaleX: 1, opacity: 1 }}
                    transition={{ duration: 0.4 }}
                  />

                  {/* Flame glow pulse effect */}
                  <motion.div
                    className="absolute inset-0 rounded-lg pointer-events-none"
                    animate={{
                      boxShadow: [
                        "inset 0 0 0 1px rgba(255, 69, 0, 0.1), 0 0 20px 0px rgba(255, 102, 0, 0.2)",
                        "inset 0 0 10px 2px rgba(255, 69, 0, 0.15), 0 0 40px 10px rgba(255, 69, 0, 0.35)",
                        "inset 0 0 5px 1px rgba(255, 69, 0, 0.1), 0 0 25px 5px rgba(255, 102, 0, 0.2)",
                      ],
                    }}
                    transition={{
                      duration: 2.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: index * 0.35,
                    }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-12 sm:mt-16 md:mt-20 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8"
        >
          {[
            { value: "60", label: "MINUTES" },
            { value: "6", label: "BATTLE STAGES" },
            { value: "100+", label: "DECISIONS" },
            { value: "1", label: "WINNER" },
          ].map((stat, index) => (
            <div key={stat.label} className="text-center">
              <motion.div
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black fire-text mb-1 sm:mb-2"
                initial={{ scale: 0.5 }}
                animate={isInView ? { scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
              >
                {stat.value}
              </motion.div>
              <div className="text-[10px] sm:text-xs font-mono tracking-widest text-muted-foreground">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
