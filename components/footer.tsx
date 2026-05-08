"use client"

import { motion } from "framer-motion"

export function Footer() {
  return (
    <footer className="relative py-16 border-t border-ember/20">
      <div className="absolute inset-0 bg-gradient-to-t from-black to-background" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-black fire-text mb-4">{"KK's WAR ROOM"}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-md mb-6">
              The ultimate AI-powered business battlefield simulation. 
              60 minutes that will transform how you think, decide, and lead under pressure.
            </p>
            <div className="flex gap-4">
              {["Twitter", "LinkedIn", "Instagram"].map((social) => (
                <motion.a
                  key={social}
                  href="#"
                  className="w-10 h-10 rounded-full border border-ember/30 flex items-center justify-center text-muted-foreground hover:text-ember hover:border-ember transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="text-xs">{social.charAt(0)}</span>
                </motion.a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-bold text-foreground mb-4 text-sm tracking-wider">QUICK LINKS</h4>
            <ul className="space-y-3">
              {["About", "How It Works", "Testimonials", "FAQ"].map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-sm text-muted-foreground hover:text-ember transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-foreground mb-4 text-sm tracking-wider">CONTACT HQ</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>contact@kkwarroom.com</li>
              <li>+1 (555) WAR-ROOM</li>
              <li>Global Command Center</li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-ember/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            © 2026 {"KK's War Room"}. All rights reserved. Enter at your own risk.
          </p>
          <div className="flex items-center gap-6 text-xs text-muted-foreground">
            <a href="#" className="hover:text-ember transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-ember transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-ember transition-colors">Cookie Policy</a>
          </div>
        </div>

        {/* HUD decoration */}
        <div className="absolute bottom-4 left-4 text-[10px] font-mono text-muted-foreground/30">
          WAR_ROOM::FOOTER_v1.0
        </div>
      </div>
    </footer>
  )
}
