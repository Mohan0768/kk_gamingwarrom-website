"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"

const testimonials = [
  {
    quote: "The War Room completely changed how I approach high-pressure decisions. The AI feedback was eye-opening.",
    author: "Sarah Chen",
    role: "CEO, TechVentures",
    rating: 5,
  },
  {
    quote: "In 60 minutes, I learned more about my leadership blind spots than in years of traditional training.",
    author: "Marcus Johnson",
    role: "VP Operations, GlobalCorp",
    rating: 5,
  },
  {
    quote: "The intensity is real. By stage 4, I was sweating. But the insights were worth every moment.",
    author: "Elena Rodriguez",
    role: "Founder, StartupX",
    rating: 5,
  },
  {
    quote: "This isn't a simulation—it's a battlefield. And it prepared me for the real business world.",
    author: "David Kim",
    role: "Director, Innovation Labs",
    rating: 5,
  },
  {
    quote: "The Shark Tank finale was terrifying and exhilarating. Best professional development I've ever done.",
    author: "Amanda Foster",
    role: "Managing Partner, VentureHQ",
    rating: 5,
  },
  {
    quote: "KK's AI captured leadership nuances I didn't even know I had. Truly transformative experience.",
    author: "Robert Zhang",
    role: "COO, FutureTech",
    rating: 5,
  },
]

export function TestimonialsSection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section ref={ref} className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/20 to-background" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-ember/30 to-transparent" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-xs font-mono tracking-[0.3em] text-ember mb-4">
            [ BATTLE REPORTS ]
          </span>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tight mb-6">
            <span className="text-foreground">WARRIORS</span>{" "}
            <span className="fire-text">SPEAK</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Hear from those who survived the War Room and emerged as stronger leaders.
          </p>
        </motion.div>

        {/* Testimonials grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className={`
                relative p-6 rounded-lg glass-metallic
                border border-ember/10 hover:border-ember/40
                transition-all duration-500
                ${hoveredIndex === index ? "scale-105 shadow-xl shadow-ember/10" : ""}
              `}
            >
              {/* Quote mark */}
              <div className="absolute top-4 right-4 text-4xl text-ember/20 font-serif">
                &ldquo;
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <motion.span
                    key={i}
                    className="text-gold text-sm"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 0.5 + index * 0.1 + i * 0.05 }}
                  >
                    ★
                  </motion.span>
                ))}
              </div>

              {/* Quote */}
              <p className="text-foreground/90 mb-6 leading-relaxed relative z-10">
                &ldquo;{testimonial.quote}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-ember to-primary flex items-center justify-center">
                  <span className="text-sm font-bold text-white">
                    {testimonial.author.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="font-bold text-foreground text-sm">{testimonial.author}</p>
                  <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>

              {/* Bottom accent */}
              <motion.div
                className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-ember via-gold to-ember"
                initial={{ scaleX: 0 }}
                animate={hoveredIndex === index ? { scaleX: 1 } : { scaleX: 0 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
