import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"
import { HeroSection } from "@/components/hero-section"

const projects = [
  {
    title: "TP Connect",
    description: "A platform connecting Temasek Polytechnic students for peer learning and resource sharing.",
    image: "/TPConnectImage1.png",
    link: "https://tpconnect.xyz",
  },
  {
    title: "SwiftViewer",
    description: "Professional financial analytics platform for tracking cryptocurrencies and stocks. (Currently down due to lack of demand and unecessary resource consumption, feel free to look at UI.)",
    image: "/SwyftViewerImage1.png",
    link: "https://swyftviewer.vercel.app/",
  },
]

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <HeroSection />

      {/* Projects Section */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 font-space">
            Our Projects
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <div key={project.title}>
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
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 font-space">Who We Are</h2>
            <p className="text-lg text-muted-foreground mb-8">
              We are three passionate students from Temasek Polytechnic on a mission to accelerate Singapore's digital
              transformation. Our focus is on helping small and emerging businesses establish their digital presence and
              thrive in the modern economy.
            </p>
            <Button asChild>
              <Link href="/about">Learn More About Us</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 font-space">Ready to Go Digital?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Let's work together to bring your business into the digital age. Contact us today to start your journey.
            </p>
            <Button size="lg" asChild>
              <Link href="/contact">Get in Touch</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

