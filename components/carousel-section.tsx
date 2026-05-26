"use client"

import { InteractiveCarousel } from "@/components/interactive-carousel"

const GAMING_FEATURES = [
  {
    id: "intensity",
    label: "Intensity",
    title: "60 Minutes of Intensity",
    description: "A compressed battlefield where every second counts. Make decisions under pressure that reveal your true leadership DNA.",
    icon: "⚔️",
    color: "#FF4500",
  },
  {
    id: "ai-analysis",
    label: "AI Analysis",
    title: "AI-Powered Analysis",
    description: "Our advanced AI observes, analyzes, and provides real-time feedback on your decision-making patterns and leadership style.",
    icon: "🤖",
    color: "#FF6347",
  },
  {
    id: "scenarios",
    label: "Scenarios",
    title: "Real Business Scenarios",
    description: "Navigate authentic business challenges that test your strategic thinking, resource allocation, and team management skills.",
    icon: "🎯",
    color: "#FF8C00",
  },
  {
    id: "competitive",
    label: "Competitive",
    title: "Competitive Environment",
    description: "Compete against other participants in a high-stakes simulation where only the strongest strategies survive.",
    icon: "🏆",
    color: "#FF7F50",
  },
]

export function CarouselSection() {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/30 to-background" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="inline-block text-xs font-mono tracking-[0.3em] text-ember mb-4">
            [ INTERACTIVE CAROUSEL ]
          </span>
          <h2 className="text-4xl md:text-6xl font-black tracking-tight mb-6">
            <span className="text-foreground">FEATURES</span>{" "}
            <span className="fire-text">EXPLORER</span>
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            Click each feature to explore what makes the War Room the ultimate leadership crucible.
          </p>
        </div>

        {/* Carousel */}
        <InteractiveCarousel items={GAMING_FEATURES} defaultSelected="intensity" />
      </div>
    </section>
  )
}
