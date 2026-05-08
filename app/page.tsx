"use client"

import { useState } from "react"
import { AnimatePresence } from "framer-motion"
import { LoadingScreen } from "@/components/loading-screen"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { BattleStagesSection } from "@/components/battle-stages-section"
import { AISimulationSection } from "@/components/ai-simulation-section"
import { SharkTankSection } from "@/components/shark-tank-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { DashboardPreviewSection } from "@/components/dashboard-preview-section"
import { CTASection } from "@/components/cta-section"
import { Footer } from "@/components/footer"
import { EmberParticles } from "@/components/ember-particles"
import { HUDOverlay } from "@/components/hud-overlay"

export default function WarRoomPage() {
  const [isLoading, setIsLoading] = useState(true)

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}
      </AnimatePresence>

      {!isLoading && (
        <main className="relative min-h-screen overflow-hidden">
          {/* Global effects */}
          <EmberParticles count={40} />
          <HUDOverlay />

          {/* Page sections */}
          <HeroSection />
          <AboutSection />
          <BattleStagesSection />
          <AISimulationSection />
          <SharkTankSection />
          <TestimonialsSection />
          <DashboardPreviewSection />
          <CTASection />
          <Footer />
        </main>
      )}
    </>
  )
}
