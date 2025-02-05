"use client"
import { motion } from "framer-motion"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Globe, ShoppingCart, LayoutDashboard } from "lucide-react"

const services = [
  {
    icon: Globe,
    title: "Static Websites",
    description:
      "Professional, responsive websites to showcase your business online. Perfect for small businesses looking to establish their digital presence.",
    features: ["Custom design and branding", "Mobile-responsive layouts", "SEO optimization", "Fast loading speeds"],
  },
  {
    icon: LayoutDashboard,
    title: "Interactive Websites",
    description:
      "Dynamic websites with real-time updates and interactive features. Ideal for businesses needing live product updates and user engagement.",
    features: ["Real-time data updates", "User authentication", "Interactive dashboards", "Content management system"],
  },
  {
    icon: ShoppingCart,
    title: "E-commerce Solutions",
    description: "Complete online business deployment with secure payment processing and inventory management.",
    features: ["Secure payment integration", "Inventory management", "Order tracking", "Customer accounts"],
  },
]

const ServicesPage = () => {
  return (
    <div className="min-h-screen pt-20">
      <div className="container mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <h1 className="text-4xl font-bold mb-4 font-space">Our Services</h1>
          <p className="text-lg text-muted-foreground">
            Comprehensive digital solutions tailored for Singapore's emerging businesses
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-full">
                <CardHeader>
                  <service.icon className="h-12 w-12 mb-4" />
                  <CardTitle>{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center text-sm">
                        <span className="mr-2">•</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ServicesPage

