"use client"
import { useEffect, useRef, useState } from "react"
import { useTheme } from "next-themes"

interface Particle {
  x: number
  y: number
  vx: number
  vy: number
  size: number
}

export function BackgroundAnimation() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [particles, setParticles] = useState<Particle[]>([])
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 })
  const [scrollY, setScrollY] = useState(0)
  const { theme } = useTheme()

  // Initialize particles
  useEffect(() => {
    const initParticles = () => {
      const newParticles: Particle[] = []
      for (let i = 0; i < 50; i++) {
        newParticles.push({
          x: Math.random() * dimensions.width,
          y: Math.random() * dimensions.height,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
          size: Math.random() * 2 + 1,
        })
      }
      setParticles(newParticles)
    }

    if (dimensions.width && dimensions.height) {
      initParticles()
    }
  }, [dimensions])

  // Handle resize and scroll
  useEffect(() => {
    const handleResize = () => {
      if (canvasRef.current) {
        const canvas = canvasRef.current
        canvas.width = window.innerWidth
        canvas.height = window.innerHeight
        setDimensions({ width: window.innerWidth, height: window.innerHeight })
      }
    }

    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("resize", handleResize)
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  // Handle mouse movement
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({
        x: e.clientX,
        y: e.clientY + window.scrollY,
      })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  // Animation loop
  useEffect(() => {
    if (!canvasRef.current || !particles.length) return

    const canvas = canvasRef.current
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let animationFrameId: number
    let lastTime = 0
    const fps = 30

    const render = (currentTime: number) => {
      const deltaTime = currentTime - lastTime
      
      if (deltaTime > (1000 / fps)) {
        lastTime = currentTime
        
        ctx.clearRect(0, 0, dimensions.width, dimensions.height)
        
        // Set color based on theme
        const color = theme === 'dark' ? "255, 255, 255" : "0, 0, 0"
        const baseOpacity = 0.2 // Keep constant opacity
        
        ctx.fillStyle = `rgba(${color}, ${baseOpacity})`
        ctx.strokeStyle = `rgba(${color}, ${baseOpacity})`

        const updatedParticles = particles.map((p) => {
          // Update position
          let x = p.x + p.vx
          let y = p.y + p.vy

          // Bounce off walls
          if (x < 0 || x > dimensions.width) p.vx *= -1
          if (y < 0 || y > dimensions.height) p.vy *= -1

          // Draw particle
          ctx.beginPath()
          ctx.arc(x, y, p.size, 0, Math.PI * 2)
          ctx.fill()

          // Draw connections
          particles.forEach((p2) => {
            const dx = x - p2.x
            const dy = y - p2.y
            const distance = Math.sqrt(dx * dx + dy * dy)

            if (distance < 150) {
              ctx.beginPath()
              ctx.moveTo(x, y)
              ctx.lineTo(p2.x, p2.y)
              ctx.stroke()
            }
          })

          // Mouse interaction
          const dx = mousePos.x - x
          const dy = (mousePos.y - window.scrollY) - y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < 100) {
            const angle = Math.atan2(dy, dx)
            x -= Math.cos(angle) * 0.5
            y -= Math.sin(angle) * 0.5
          }

          return { ...p, x, y }
        })

        setParticles(updatedParticles)
      }
      
      animationFrameId = requestAnimationFrame(render)
    }

    render(0)
    return () => cancelAnimationFrame(animationFrameId)
  }, [particles, dimensions, mousePos, theme, scrollY])

  // Calculate blur based on scroll position, but only after the hero section
  const startBlurPosition = window.innerHeight // Start blur after first viewport height
  const scrollPastHero = Math.max(0, scrollY - startBlurPosition)
  const blurAmount = Math.min(8, scrollPastHero * 0.01) // Max blur of 8px
  const backgroundOpacity = Math.min(0.8, scrollPastHero * 0.001)

  return (
    <div className="fixed inset-0 w-full h-full pointer-events-none" style={{ zIndex: -1 }}>
      <div 
        className="absolute inset-0 bg-background/80"
        style={{
          backdropFilter: scrollPastHero > 0 ? `blur(${blurAmount}px)` : 'none',
          WebkitBackdropFilter: scrollPastHero > 0 ? `blur(${blurAmount}px)` : 'none',
          opacity: backgroundOpacity,
        }}
      />
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
      />
    </div>
  )
} 