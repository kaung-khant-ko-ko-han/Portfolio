"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Experience } from "@/components/experience"
import { Projects } from "@/components/projects"
import { Education } from "@/components/education"
import { Publications } from "@/components/publications"
import { Skills } from "@/components/skills"
import { Contact } from "@/components/contact"

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("about")

  return (
    <div className="min-h-screen bg-background">
      <Header activeSection={activeSection} setActiveSection={setActiveSection} />
      <main className="mx-auto max-w-6xl px-6 lg:px-8">
        <Hero />
        <Experience />
        <Projects />
        <Education />
        <Publications />
        <Skills />
        <Contact />
      </main>
    </div>
  )
}
