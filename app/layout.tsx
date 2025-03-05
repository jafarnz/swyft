import { ThemeProvider } from "@/components/theme-provider"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { PageTransition } from "@/components/page-transition"
import { Toaster } from "@/components/ui/toaster"
import "./globals.css"

export const metadata = {
  title: 'Swyft - Digital Solutions',
  description: 'Empowering Singapore\'s Digital Future',
  icons: {
    icon: '/SwyftLogo.png',
    shortcut: '/SwyftLogo.png',
    apple: '/SwyftLogo.png',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <Navigation />
          <PageTransition>{children}</PageTransition>
          <Footer />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}

