"use client"

import { motion } from "framer-motion"

export function HUDOverlay() {
  return (
    <div className="fixed inset-0 pointer-events-none z-20">
      {/* Corner brackets */}
      <div className="absolute top-2 sm:top-4 left-2 sm:left-4 w-12 sm:w-20 h-12 sm:h-20">
        <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-ember to-transparent" />
        <div className="absolute top-0 left-0 w-[2px] h-full bg-gradient-to-b from-ember to-transparent" />
      </div>
      <div className="absolute top-2 sm:top-4 right-2 sm:right-4 w-12 sm:w-20 h-12 sm:h-20">
        <div className="absolute top-0 right-0 w-full h-[2px] bg-gradient-to-l from-ember to-transparent" />
        <div className="absolute top-0 right-0 w-[2px] h-full bg-gradient-to-b from-ember to-transparent" />
      </div>
      <div className="absolute bottom-2 sm:bottom-4 left-2 sm:left-4 w-12 sm:w-20 h-12 sm:h-20">
        <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-ember to-transparent" />
        <div className="absolute bottom-0 left-0 w-[2px] h-full bg-gradient-to-t from-ember to-transparent" />
      </div>
      <div className="absolute bottom-2 sm:bottom-4 right-2 sm:right-4 w-12 sm:w-20 h-12 sm:h-20">
        <div className="absolute bottom-0 right-0 w-full h-[2px] bg-gradient-to-l from-ember to-transparent" />
        <div className="absolute bottom-0 right-0 w-[2px] h-full bg-gradient-to-t from-ember to-transparent" />
      </div>

      {/* Top HUD */}
      <div className="absolute top-6 left-1/2 -translate-x-1/2 flex items-center gap-4">
        <motion.div
          className="h-[1px] w-32 bg-gradient-to-r from-transparent via-ember to-transparent"
          animate={{ opacity: [0.3, 1, 0.3] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
        <span className="text-xs font-mono text-ember tracking-[0.3em]"></span>
        <motion.div
          className="h-[1px] w-32 bg-gradient-to-r from-transparent via-ember to-transparent"
          animate={{ opacity: [0.3, 1, 0.3] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      </div>

      {/* Side radar */}
      <div className="absolute bottom-20 left-6 hidden lg:block">
        <motion.div
          className="w-24 h-24 rounded-full border border-ember/30 relative"
          animate={{ rotate: 360 }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        >
          <div className="absolute inset-0 rounded-full border border-ember/10" style={{ transform: "scale(0.7)" }} />
          <div className="absolute inset-0 rounded-full border border-ember/10" style={{ transform: "scale(0.4)" }} />
          <motion.div
            className="absolute top-1/2 left-1/2 w-1/2 h-[1px] origin-left"
            style={{ background: "linear-gradient(90deg, rgba(255,100,50,0.8), transparent)" }}
          />
          {/* Blips */}
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 rounded-full bg-ember"
              style={{
                top: `${30 + Math.random() * 40}%`,
                left: `${30 + Math.random() * 40}%`,
              }}
              animate={{ opacity: [0.3, 1, 0.3] }}
              transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.5 }}
            />
          ))}
        </motion.div>
        <p className="text-[10px] font-mono text-muted-foreground text-center mt-2">TACTICAL RADAR</p>
      </div>

      {/* Right side stats */}
      <div className="absolute bottom-20 right-6 hidden lg:flex flex-col gap-2 text-right">
        <div className="text-[10px] font-mono text-muted-foreground">
          <span className="text-ember">SYS</span> ONLINE
        </div>
        <div className="text-[10px] font-mono text-muted-foreground">
          <span className="text-gold">AI</span> READY
        </div>
        <div className="text-[10px] font-mono text-muted-foreground">
          <span className="text-primary">MODE</span> COMBAT
        </div>
        <motion.div
          className="h-1 w-20 bg-muted rounded-full overflow-hidden ml-auto mt-1"
        >
          <motion.div
            className="h-full bg-gradient-to-r from-primary to-ember"
            animate={{ width: ["60%", "100%", "60%"] }}
            transition={{ duration: 3, repeat: Infinity }}
          />
        </motion.div>
      </div>

      {/* Scanline effect */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "linear-gradient(transparent 50%, rgba(255,100,50,0.02) 50%)",
          backgroundSize: "100% 4px",
        }}
        animate={{ opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 4, repeat: Infinity }}
      />
    </div>
  )
}
