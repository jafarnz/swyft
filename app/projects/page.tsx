"use client"
import { motion } from "framer-motion"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const projects = [
  {
    title: "TP Connect",
    description: `A revolutionary platform designed to enhance the academic experience at Temasek Polytechnic. TP Connect facilitates peer-to-peer learning by connecting students who excel in specific modules with those seeking academic support. The platform features flexible scheduling for study sessions and a centralized hub for sharing study materials.`,
    image: "/TPConnectImage1.png",
    features: ["Peer matching system", "Study session scheduling", "Resource sharing", "Module-specific communities"],
    link: "https://tpconnect.xyz",
    screenshots: [
      "/TPConnectImage1.png",
      "/TPConnectImage2.png",
    ],
  },
  {
    title: "SwiftViewer",
    description: `A professional-grade financial analytics platform that provides real-time tracking of cryptocurrencies and stocks. Built with modern technology to deliver accurate, up-to-the-minute market data and interactive charts for informed decision-making.`,
    image: "/SwyftViewerImage1.png",
    features: ["Real-time market data", "Interactive charts", "Portfolio tracking", "Market analysis tools"],
    link: "https://swyftview.vercel.app",
    screenshots: [
      "/SwyftViewerImage1.png",
      "/SwyftViewerImage2.png",
    ],
  },
]

const ProjectsPage = () => {
  return (
    <div className="min-h-screen pt-20">
      <div className="container mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <h1 className="text-4xl font-bold mb-4 font-space">Our Projects</h1>
          <p className="text-lg text-muted-foreground">
            Showcasing our commitment to digital excellence through innovative solutions
          </p>
        </motion.div>

        <div className="space-y-20">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
            >
              <Card>
                <CardContent className="p-6">
                  <div className="grid lg:grid-cols-2 gap-8">
                    <div className="space-y-4">
                      <h2 className="text-3xl font-bold">{project.title}</h2>
                      <p className="text-muted-foreground">{project.description}</p>
                      <div className="space-y-2">
                        <h3 className="font-semibold">Key Features:</h3>
                        <ul className="list-disc list-inside space-y-1">
                          {project.features.map((feature) => (
                            <li key={feature} className="text-muted-foreground">
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <Button asChild>
                        <Link href={project.link}>Visit Project</Link>
                      </Button>
                    </div>
                    <div className="space-y-4">
                      {project.screenshots.map((screenshot, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.2 + i * 0.1 }}
                        >
                          <Image
                            src={screenshot || "/placeholder.svg"}
                            alt={`${project.title} Screenshot ${i + 1}`}
                            width={800}
                            height={400}
                            className="rounded-lg shadow-lg"
                          />
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ProjectsPage

