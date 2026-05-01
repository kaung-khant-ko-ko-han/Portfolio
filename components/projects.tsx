"use client"

import { useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Search, ExternalLink } from "lucide-react"

const projects = [
  {
    title: "Acid Gas Removal Unit (AGRU) - Shut-Down Period",
    period: "Dec 2020 — Jan 2021",
    organization: "PETRONAS and MOGE",
    description:
      "Served as MOGE Representative during shut-down period. Studied Permit to Work, Risk Assessment, MCC Panel Drawer Extension, IMCS modification, and upgrading DeltaV DCS and SIS systems.",
    tags: ["DeltaV DCS", "SIS", "IMCS", "Risk Assessment"],
  },
  {
    title: "Acid Gas Removal Unit (AGRU) - Initial Phase",
    period: "Feb 2020 — Mar 2020",
    organization: "PETRONAS and MOGE",
    description:
      "MOGE Representative responsible for daily and weekly reporting, studying Project Execution Plan, site visits with Project Manager, and final report submissions.",
    tags: ["Project Management", "Reporting", "Site Coordination"],
  },
  {
    title: "Tharkayta Offshore Supply Base Upgrading",
    period: "2020 — Present",
    organization: "MOGE",
    description:
      "Writing proposals and collecting data for sub-stations, generator rooms, transformers, high mast lights using GPS and QGIS software for infrastructure upgrading project.",
    tags: ["QGIS", "GPS Mapping", "Infrastructure", "Sub-Stations"],
  },
  {
    title: "Explosive Liquid Level Sensing",
    period: "Nov 2011",
    organization: "TTU - B.E. Project",
    description:
      "Final year project developing an ultrasonic sensor-based system for detecting liquid levels in explosive environments.",
    tags: ["Ultrasonic Sensor", "Embedded Systems", "Safety Systems"],
  },
  {
    title: "IMU-Based Hand Gesture Rehabilitation System",
    period: "2015 — 2018",
    organization: "YTU - Ph.D. Research",
    description:
      "Developed a rehabilitation system using IMU sensors for hand gesture recognition, published in academic journals and presented at conferences.",
    tags: ["IMU Sensors", "Rehabilitation", "Robotics", "Signal Processing"],
  },
  {
    title: "Two Link Robot Arm Control",
    period: "2017",
    organization: "YTU - Research",
    description:
      "Kinematic and Dynamic Analysis of Two Link Robot Arm using PID with Friction Compensator, published in IJSER journal.",
    tags: ["PID Control", "Kinematics", "Dynamics", "MATLAB/Simulink"],
  },
]

export function Projects() {
  const [searchTerm, setSearchTerm] = useState("")

  const filteredProjects = projects.filter(
    (project) =>
      project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.tags.some((tag) => tag.toLowerCase().includes(searchTerm.toLowerCase())) ||
      project.description.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <section id="projects" className="border-t border-border py-20">
      <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <h2 className="text-2xl font-bold text-foreground">Projects</h2>
        <div className="relative max-w-xs">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            type="text"
            placeholder="Filter projects..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-9"
          />
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filteredProjects.map((project, index) => (
          <div
            key={index}
            className="group rounded-lg border border-border bg-card p-6 transition-all hover:border-primary/50 hover:bg-card/80"
          >
            <div className="mb-2 text-xs text-muted-foreground">{project.period}</div>
            <h3 className="font-semibold text-foreground transition-colors group-hover:text-primary">
              {project.title}
            </h3>
            <p className="mt-1 text-sm text-primary">{project.organization}</p>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              {project.description}
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <Badge
                  key={tag}
                  variant="secondary"
                  className="bg-secondary text-secondary-foreground text-xs"
                >
                  {tag}
                </Badge>
              ))}
            </div>
          </div>
        ))}
      </div>

      {filteredProjects.length === 0 && (
        <div className="py-12 text-center text-muted-foreground">
          No projects found matching your search.
        </div>
      )}
    </section>
  )
}
