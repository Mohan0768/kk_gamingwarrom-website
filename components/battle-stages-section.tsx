"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"

const stages = [
  {
    number: "01",
    title: "IDEATION",
    subtitle: "Concept Development",
    description: "Transform your raw idea into a compelling vision. Define your unique value proposition and identify the problem you're solving.",
    color: "from-red-900 to-red-700",
  },
  {
    number: "02",
    title: "VISION",
    subtitle: "Strategic Planning",
    description: "Build your blueprint. Create a comprehensive strategy that outlines your market opportunity and path to success.",
    color: "from-orange-900 to-orange-700",
  },
  {
    number: "03",
    title: "VALIDATION",
    subtitle: "Market Testing",
    description: "Test your assumptions. Gather real-world feedback and validate that customers actually want your solution.",
    color: "from-amber-900 to-amber-700",
  },
  {
    number: "04",
    title: "GROWTH",
    subtitle: "Scaling Operations",
    description: "Accelerate expansion. Build sustainable systems and processes to scale your business efficiently.",
    color: "from-yellow-900 to-yellow-700",
  },
  {
    number: "05",
    title: "SCALE",
    subtitle: "Market Expansion",
    description: "Dominate new territories. Expand your reach into new markets and customer segments while maintaining quality.",
    color: "from-red-800 to-orange-800",
  },
  {
    number: "06",
    title: "INVESTOR PITCH",
    subtitle: "Capital Raising",
    description: "Secure the future. Present your proven business model to investors and secure the capital needed for exponential growth.",
    color: "from-amber-800 to-red-900",
  },
]

export function BattleStagesSection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [activeStage, setActiveStage] = useState<number | null>(null)

  return (
    <section ref={ref} className="relative py-12 sm:py-20 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
        <motion.div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 50% 50%, rgba(139,0,0,0.1) 0%, transparent 50%)`,
          }}
          animate={{
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 10, repeat: Infinity }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.span
            className="inline-block text-xs font-mono tracking-[0.3em] text-ember mb-4"
          >
            [ TACTICAL PHASES ]
          </motion.span>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tight mb-6">
            <span className="text-foreground">THE 6</span>{" "}
            <span className="fire-text">BATTLE STAGES</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Each stage is designed to test a specific aspect of your leadership capabilities. 
            Master all six to emerge victorious.
          </p>
        </motion.div>

        {/* Stages grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {stages.map((stage, index) => (
            <motion.div
              key={stage.number}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              onMouseEnter={() => setActiveStage(index)}
              onMouseLeave={() => setActiveStage(null)}
              className="group relative"
            >
              <div className={`
                relative h-full p-6 rounded-lg overflow-hidden
                bg-gradient-to-br ${stage.color} bg-opacity-20
                border border-ember/20 hover:border-ember/50
                transition-all duration-500
                ${activeStage === index ? "scale-105 shadow-2xl shadow-ember/20" : ""}
              `}>
                {/* Stage number */}
                <div className="absolute top-4 right-4 text-6xl font-black text-white/5 group-hover:text-white/10 transition-colors">
                  {stage.number}
                </div>

                {/* Content */}
                <div className="relative z-10">
                  {/* Number badge */}
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/30 border border-ember/30 mb-4">
                    <span className="text-xs font-mono text-ember">STAGE {stage.number}</span>
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl md:text-3xl font-black text-foreground mb-1">
                    {stage.title}
                  </h3>

                  {/* Subtitle */}
                  <p className="text-sm font-mono text-gold mb-4">{stage.subtitle}</p>

                  {/* Description */}
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {stage.description}
                  </p>

                  {/* Progress line */}
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 h-1"
                    initial={{ scaleX: 0 }}
                    animate={activeStage === index ? { scaleX: 1 } : { scaleX: 0 }}
                    transition={{ duration: 0.3 }}
                    style={{ 
                      background: "linear-gradient(90deg, #FF4500, #FFD700)",
                      transformOrigin: "left",
                    }}
                  />
                </div>

                {/* Hover overlay */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Timeline connector */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : {}}
          transition={{ duration: 1.5, delay: 0.8 }}
          className="hidden lg:block mt-12 h-0.5 bg-gradient-to-r from-transparent via-ember to-transparent mx-auto max-w-4xl"
        />
      </div>
    </section>
  )
}
