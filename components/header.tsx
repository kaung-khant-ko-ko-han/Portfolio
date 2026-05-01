"use client"

import Link from "next/link"
import { Mail, Phone, MapPin } from "lucide-react"

interface HeaderProps {
  activeSection: string
  setActiveSection: (section: string) => void
}

const navItems = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "education", label: "Education" },
  { id: "publications", label: "Publications" },
  { id: "skills", label: "Skills" },
]

export function Header({ activeSection, setActiveSection }: HeaderProps) {
  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId)
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 lg:px-8">
        <div className="flex items-center gap-2">
          <span className="font-mono text-sm text-primary">KKKKH</span>
        </div>
        <nav className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`text-sm transition-colors hover:text-primary ${
                activeSection === item.id ? "text-primary" : "text-muted-foreground"
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>
        <div className="flex items-center gap-4">
          <Link
            href="mailto:kaungkhant.mce@protonmail.com"
            className="text-muted-foreground transition-colors hover:text-primary"
          >
            <Mail className="h-5 w-5" />
          </Link>
          <Link
            href="tel:+959518287"
            className="text-muted-foreground transition-colors hover:text-primary"
          >
            <Phone className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </header>
  )
}
