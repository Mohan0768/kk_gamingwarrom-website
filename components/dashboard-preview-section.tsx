"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"

export function DashboardPreviewSection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-xs font-mono tracking-[0.3em] text-ember mb-4">
            [ COMMAND CENTER ]
          </span>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tight mb-6">
            <span className="text-foreground">TACTICAL</span>{" "}
            <span className="fire-text">DASHBOARD</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Monitor your performance, track your progress, and analyze your decisions in real-time.
          </p>
        </motion.div>

        {/* Dashboard mockup */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.3 }}
          className="relative max-w-6xl mx-auto"
        >
          <div className="glass-metallic rounded-2xl p-2 sm:p-4 md:p-8 relative overflow-hidden">
            {/* Window header */}
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-ember/20">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
              </div>
              <span className="text-xs font-mono text-muted-foreground">WAR_ROOM_DASHBOARD_v3.0</span>
              <div className="flex items-center gap-2">
                <motion.div
                  className="w-2 h-2 rounded-full bg-green-500"
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                />
                <span className="text-xs font-mono text-green-500">LIVE</span>
              </div>
            </div>

            {/* Dashboard grid */}
            <div className="grid grid-cols-12 gap-2 sm:gap-4">
              {/* Main stats */}
              <div className="col-span-12 md:col-span-8 grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-4">
                {[
                  { label: "STAGE", value: "03", color: "ember" },
                  { label: "TIME", value: "12:45", color: "gold" },
                  { label: "SCORE", value: "847", color: "green-500" },
                  { label: "RANK", value: "#2", color: "ember" },
                ].map((stat, i) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.5, delay: 0.5 + i * 0.1 }}
                    className="bg-black/30 rounded-lg p-2 sm:p-4 text-center border border-ember/20"
                  >
                    <p className="text-[10px] sm:text-xs font-mono text-muted-foreground mb-0.5 sm:mb-1">{stat.label}</p>
                    <p className={`text-lg sm:text-2xl md:text-3xl font-black text-${stat.color}`}>{stat.value}</p>
                  </motion.div>
                ))}
              </div>

              {/* AI Status */}
              <div className="col-span-12 md:col-span-4 bg-black/30 rounded-lg p-4 border border-ember/20">
                <p className="text-xs font-mono text-ember mb-3">AI ANALYSIS</p>
                <div className="space-y-2">
                  {[
                    { label: "Decision Speed", value: 78 },
                    { label: "Strategic Thinking", value: 85 },
                    { label: "Risk Management", value: 62 },
                  ].map((metric, i) => (
                    <div key={metric.label}>
                      <div className="flex justify-between text-xs mb-1">
                        <span className="text-muted-foreground">{metric.label}</span>
                        <span className="text-foreground">{metric.value}%</span>
                      </div>
                      <div className="h-1.5 bg-muted rounded-full overflow-hidden">
                        <motion.div
                          className="h-full rounded-full"
                          style={{ background: `linear-gradient(90deg, #FF4500, #FFD700)` }}
                          initial={{ width: 0 }}
                          animate={isInView ? { width: `${metric.value}%` } : {}}
                          transition={{ duration: 1, delay: 0.8 + i * 0.2 }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Activity chart placeholder */}
              <div className="col-span-12 md:col-span-6 bg-black/30 rounded-lg p-4 border border-ember/20">
                <p className="text-xs font-mono text-ember mb-3">DECISION TIMELINE</p>
                <div className="flex items-end gap-2 h-32">
                  {[40, 65, 45, 80, 55, 90, 70, 85, 60, 95, 75, 88].map((height, i) => (
                    <motion.div
                      key={i}
                      className="flex-1 rounded-t"
                      style={{ background: `linear-gradient(180deg, #FFD700, #FF4500)` }}
                      initial={{ height: 0 }}
                      animate={isInView ? { height: `${height}%` } : {}}
                      transition={{ duration: 0.5, delay: 1 + i * 0.05 }}
                    />
                  ))}
                </div>
              </div>

              {/* Leaderboard */}
              <div className="col-span-12 md:col-span-6 bg-black/30 rounded-lg p-4 border border-ember/20">
                <p className="text-xs font-mono text-ember mb-3">LIVE LEADERBOARD</p>
                <div className="space-y-2">
                  {[
                    { rank: 1, name: "Commander Hawk", score: 892 },
                    { rank: 2, name: "You", score: 847, isYou: true },
                    { rank: 3, name: "Shadow Eagle", score: 801 },
                    { rank: 4, name: "Iron Phoenix", score: 756 },
                  ].map((player, i) => (
                    <motion.div
                      key={player.rank}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.5, delay: 1.2 + i * 0.1 }}
                      className={`flex items-center justify-between p-2 rounded ${
                        player.isYou ? "bg-ember/20 border border-ember/30" : ""
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <span className={`text-sm font-mono ${player.rank === 1 ? "text-gold" : "text-muted-foreground"}`}>
                          #{player.rank}
                        </span>
                        <span className={`text-sm ${player.isYou ? "text-ember font-bold" : "text-foreground"}`}>
                          {player.name}
                        </span>
                      </div>
                      <span className="text-sm font-mono text-gold">{player.score}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            {/* Scanline overlay */}
            <motion.div
              className="absolute inset-0 pointer-events-none opacity-20"
              style={{
                background: "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,69,0,0.03) 2px, rgba(255,69,0,0.03) 4px)",
              }}
            />
          </div>

          {/* Glow effect */}
          <div className="absolute -inset-4 bg-gradient-to-t from-ember/20 via-transparent to-transparent blur-3xl -z-10" />
        </motion.div>
      </div>
    </section>
  )
}
