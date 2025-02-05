"use client"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"

const HomePage = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  }

  const projects = [
    {
      title: "TP Connect",
      description: "A platform connecting Temasek Polytechnic students for peer learning and resource sharing.",
      image: "/TPConnectImage1.png",
      link: "https://tpconnect.xyz",
    },
    {
      title: "SwiftViewer",
      description: "Professional financial analytics platform for tracking cryptocurrencies and stocks.",
      image: "/SwyftViewerImage1.png",
      link: "https://swyftview.vercel.app",
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/10 bg-grid-small" />
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

      {/* Projects Section */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <motion.h2 {...fadeIn} className="text-3xl md:text-4xl font-bold text-center mb-12 font-space">
            Our Projects
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <Card className="overflow-hidden group">
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                    <p className="text-muted-foreground mb-4">{project.description}</p>
                    <Button asChild>
                      <Link href={project.link}>View Project</Link>
                    </Button>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 font-space">Who We Are</h2>
            <p className="text-lg text-muted-foreground mb-8">
              We are three passionate students from Temasek Polytechnic on a mission to accelerate Singapore's digital
              transformation. Our focus is on helping small and emerging businesses establish their digital presence and
              thrive in the modern economy.
            </p>
            <Button asChild>
              <Link href="/about">Learn More About Us</Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 font-space">Ready to Go Digital?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Let's work together to bring your business into the digital age. Contact us today to start your journey.
            </p>
            <Button size="lg" asChild>
              <Link href="/contact">Get in Touch</Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default HomePage

