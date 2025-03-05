"use client"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { BackgroundAnimation } from "@/components/background-animation"
import { useEffect, useState } from "react"

export function HeroSection() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const opacity = Math.max(0, 1 - scrollY / 500)

  return (
    <section className="h-screen flex items-center justify-center relative overflow-hidden">
      <div style={{ opacity }} className="absolute inset-0">
        <BackgroundAnimation />
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h1 className="text-4xl md:text-6xl font-bold font-space mb-6">Empowering Singapore's Digital Future</h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8">
            We help small businesses in Singapore embrace digitalization and establish their online presence.
          </p>
          <div className="flex justify-center gap-4">
            <Button size="lg" asChild>
              <Link href="/contact">Get Started</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/projects">View Projects</Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 