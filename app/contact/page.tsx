"use client"
import { motion } from "framer-motion"
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

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-6"
          >
            <div className="bg-card rounded-lg p-8 border shadow-sm">
              <h2 className="text-2xl font-semibold mb-6">Send us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium mb-2 block text-foreground">Name</label>
                    <Input
                      placeholder="Your name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="bg-input border-input-border"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block text-foreground">Email</label>
                    <Input
                      type="email"
                      placeholder="Your email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="bg-input border-input-border"
                    />
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block text-foreground">Subject</label>
                  <Input
                    placeholder="Message subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="bg-input border-input-border"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block text-foreground">Message</label>
                  <Textarea
                    placeholder="Your message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="min-h-[150px] bg-input border-input-border"
                  />
                </div>
                <Button type="submit" className="w-full" disabled={isLoading}>
                  {isLoading ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-6"
          >
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="p-6 rounded-lg bg-card border shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-start space-x-4">
                  <div className="p-3 rounded-full bg-primary/10">
                    <info.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium text-lg text-foreground">{info.title}</h3>
                    {info.link ? (
                      <a href={info.link} className="text-muted-foreground hover:text-primary transition-colors">
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
        </div>
      </div>
    </div>
  )
}

export default ContactPage

