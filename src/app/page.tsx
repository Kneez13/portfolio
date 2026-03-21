"use client"

import { useEffect } from "react"
import Navigation from "@/components/Navigation"
import Hero from "@/components/Hero"
import Skills from "@/components/Skills"
import Experience from "@/components/Experience"
import Contact from "@/components/Contact"
import Footer from "@/components/Footer"
import { initAnimations } from "@/utils/animations"

export default function Home() {
  useEffect(() => {
    // Initialize animations
    initAnimations();
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <Skills />
      <Experience />
      <Contact />
      <Footer />
    </div>
  );
}
