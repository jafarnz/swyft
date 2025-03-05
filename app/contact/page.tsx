"use client"
import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, Clock } from "lucide-react"
import { useState } from "react"
import emailjs from '@emailjs/browser'
import { useToast } from "@/components/ui/use-toast"

const contactInfo = [
  {
    icon: Mail,
    title: "Email",
    content: "jaf.nz@icloud.com",
    link: "mailto:jaf.nz@icloud.com",
  },
  {
    icon: Phone,
    title: "Phone",
    content: "+65 8757 9417",
    link: "tel:+6587579417",
  },
  {
    icon: MapPin,
    title: "Location",
    content: "Singapore",
  },
  {
    icon: Clock,
    title: "Business Hours",
    content: "Mon-Fri: 11:00 AM - 11:00 PM",
  },
]

const ContactPage = () => {
  const { toast } = useToast()
  const [isLoading, setIsLoading] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      const result = await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        {
          to_name: "Jafar",
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          subject: formData.subject
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      )

      if (result.status === 200) {
        toast({
          title: "Message sent!",
          description: "We'll get back to you as soon as possible.",
        })
        setFormData({ name: "", email: "", subject: "", message: "" })
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again. If issue persists contact via phone number or email on the right.",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  }

  return (
    <div className="min-h-screen pt-20">
      <div className="container mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold mb-4">Get in Touch</h1>
          <p className="text-muted-foreground">Ready to transform your business? We're here to help.</p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto"
        >
          <motion.div variants={itemVariants} className="space-y-6">
            <div className="bg-[#111111] rounded-lg p-8 border border-zinc-800">
              <h2 className="text-2xl font-semibold mb-6">Send us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium mb-2 block">Name</label>
                    <Input
                      placeholder="Your name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="bg-[#0A0A0A] border-zinc-800"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Email</label>
                    <Input
                      type="email"
                      placeholder="Your email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="bg-[#0A0A0A] border-zinc-800"
                    />
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Subject</label>
                  <Input
                    placeholder="Message subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="bg-[#0A0A0A] border-zinc-800"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Message</label>
                  <Textarea
                    placeholder="Your message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="min-h-[150px] bg-[#0A0A0A] border-zinc-800"
                  />
                </div>
                <Button type="submit" className="w-full" disabled={isLoading}>
                  {isLoading ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="space-y-6">
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.title}
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                className="p-6 rounded-lg bg-[#111111] border border-zinc-800"
              >
                <div className="flex items-start space-x-4">
                  <div className="p-3 rounded-full bg-primary/10">
                    <info.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium text-lg">{info.title}</h3>
                    {info.link ? (
                      <a href={info.link} className="text-muted-foreground hover:text-primary">
                        {info.content}
                      </a>
                    ) : (
                      <p className="text-muted-foreground">{info.content}</p>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}

export default ContactPage

