"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"

const capabilities = [
  {
    title: "Real-Time Decision Tracking",
    description: "Every choice you make is captured and analyzed by our AI system.",
  },
  {
    title: "Leadership Pattern Recognition",
    description: "Identify your dominant leadership style and blind spots.",
  },
  {
    title: "Pressure Response Analysis",
    description: "Measure how you perform when stakes are high.",
  },
  {
    title: "Strategic Thinking Assessment",
    description: "Evaluate your ability to think multiple moves ahead.",
  },
]

export function AISimulationSection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="relative py-32 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-background to-card/30" />
        {/* Grid pattern */}
        <div 
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,69,0,0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,69,0,0.3) 1px, transparent 1px)
            `,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block text-xs font-mono tracking-[0.3em] text-ember mb-4">
              [ AI COMBAT SYSTEM ]
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight mb-6">
              <span className="fire-text">AI LEADERSHIP</span>
              <br />
              <span className="text-foreground">COMBAT SIMULATION</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Our proprietary AI has been trained on thousands of leadership scenarios, 
              business decisions, and real-world outcomes. It observes your every move, 
              analyzes your patterns, and delivers insights that transform how you lead.
            </p>

            {/* Capability list */}
            <div className="space-y-4">
              {capabilities.map((cap, index) => (
                <motion.div
                  key={cap.title}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-ember/20 border border-ember/30 flex items-center justify-center">
                    <motion.div
                      className="w-2 h-2 rounded-full bg-ember"
                      animate={{ scale: [1, 1.3, 1] }}
                      transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
                    />
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground mb-1">{cap.title}</h4>
                    <p className="text-sm text-muted-foreground">{cap.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right visual - AI Terminal */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <div className="glass-metallic rounded-lg p-6 relative overflow-hidden">
              {/* Terminal header */}
              <div className="flex items-center gap-2 mb-4 pb-4 border-b border-ember/20">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
                <span className="ml-4 text-xs font-mono text-muted-foreground">WAR_ROOM_AI_v2.0</span>
              </div>

              {/* Terminal content */}
              <div className="font-mono text-sm space-y-3">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : {}}
                  transition={{ delay: 0.5 }}
                  className="text-ember"
                >
                  {">"} Initializing AI Combat Analysis...
                </motion.div>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : {}}
                  transition={{ delay: 0.8 }}
                  className="text-gold"
                >
                  {">"} Loading participant profile...
                </motion.div>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : {}}
                  transition={{ delay: 1.1 }}
                  className="text-muted-foreground"
                >
                  {">"} Decision patterns: ANALYZING
                </motion.div>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : {}}
                  transition={{ delay: 1.4 }}
                  className="text-muted-foreground"
                >
                  {">"} Leadership style: CALCULATING
                </motion.div>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : {}}
                  transition={{ delay: 1.7 }}
                  className="text-muted-foreground"
                >
                  {">"} Pressure response: MONITORING
                </motion.div>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : {}}
                  transition={{ delay: 2 }}
                  className="flex items-center gap-2"
                >
                  <span className="text-green-500">{">"} AI System: READY</span>
                  <motion.span
                    className="inline-block w-2 h-4 bg-ember"
                    animate={{ opacity: [1, 0, 1] }}
                    transition={{ duration: 1, repeat: Infinity }}
                  />
                </motion.div>
              </div>

              {/* Scan line effect */}
              <motion.div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background: "linear-gradient(transparent 50%, rgba(255,69,0,0.03) 50%)",
                  backgroundSize: "100% 4px",
                }}
              />

              {/* Corner decorations */}
              <div className="absolute top-0 left-0 w-4 h-4 border-l-2 border-t-2 border-ember" />
              <div className="absolute top-0 right-0 w-4 h-4 border-r-2 border-t-2 border-ember" />
              <div className="absolute bottom-0 left-0 w-4 h-4 border-l-2 border-b-2 border-ember" />
              <div className="absolute bottom-0 right-0 w-4 h-4 border-r-2 border-b-2 border-ember" />
            </div>

            {/* Floating elements */}
            <motion.div
              className="absolute -top-4 -right-4 w-24 h-24 rounded-full border border-ember/30"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
              <div className="absolute top-1/2 left-0 w-1/2 h-0.5 bg-ember/30" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
