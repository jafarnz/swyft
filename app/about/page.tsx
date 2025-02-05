"use client"
import { motion } from "framer-motion"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

const teamMembers = [
  {
    name: "Jafar Niaz",
    role: "Developer",
    image: "/Jafar.jpg",
    description:
      "Crafting digital experiences through web development, while exploring the intersections of technology, creative writing, game design, and music composition. Currently a Year 1 Information Technology student at Temasek Polytechnic.",
  },
  {
    name: "Koh Yun Xiang",
    role: "Marketing Strategist",
    image: "/yunxiang.jpg",
    description:
      "A passionate marketer with a keen eye for consumer behavior and digital trends. Dedicated to helping businesses connect with their target audience through innovative marketing strategies and compelling brand narratives.",
  },
  {
    name: "Poh Wee Ren",
    role: "Financial Strategist",
    image: "/weeren.jpg",
    description:
      "Driven by a passion for promoting small culinary businesses and developing the local ecosystem. Committed to helping businesses thrive without major financial burden through strategic planning and sustainable growth solutions.",
  },
]

const AboutPage = () => {
  return (
    <div className="min-h-screen pt-20">
      <div className="container mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 1, y: 0 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <motion.div className="flex justify-center mb-8" whileHover={{ rotate: 360 }} transition={{ duration: 0.6 }}>
            <Image
              src="/SwyftLogo.png"
              alt="Swyft Logo"
              width={100}
              height={100}
              className="dark:invert"
            />
          </motion.div>
          <h1 className="text-4xl font-bold mb-4 font-space">About Swyft</h1>
          <p className="text-lg text-muted-foreground mb-8">
            At Swyft, we're on a mission to accelerate Singapore's digital transformation by making web technology
            accessible to small and emerging businesses. Founded by three Temasek Polytechnic students, we combine
            technical expertise, marketing insight, and financial acumen to deliver comprehensive digital solutions.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h2 className="text-3xl font-bold text-center mb-8 font-space">Our Team</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: 0.5 + index * 0.2,
                }}
              >
                <Card className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
                  <CardContent className="p-6">
                    <motion.div
                      className="relative w-48 h-48 mx-auto mb-6"
                      whileHover={{ scale: 1.05 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <Image
                        src={member.image || "/placeholder.svg"}
                        alt={member.name}
                        fill
                        className="object-cover rounded-full"
                      />
                    </motion.div>
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}>
                      <h3 className="text-xl font-bold text-center mb-2">{member.name}</h3>
                      <p className="text-muted-foreground text-center mb-4">{member.role}</p>
                      <p className="text-sm text-center">{member.description}</p>
                    </motion.div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default AboutPage

