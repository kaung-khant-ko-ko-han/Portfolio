import { Badge } from "@/components/ui/badge"

const experiences = [
  {
    period: "Oct 2020 — Present",
    title: "Installation and Maintenance Engineer",
    company: "Tharkayta Offshore Supply Base, MOGE",
    description:
      "Supporting all oil and gas fields in Myanmar. Performing ECB and AC Voltage Transducer replacements, upgrading overhead lines, applying for sub-station installation permits, and managing infrastructure projects using QGIS.",
    skills: ["DCS Systems", "SCADA", "QGIS", "Project Management", "Electrical Design"],
  },
  {
    period: "May 2020 — Sep 2020",
    title: "Maintenance Engineer",
    company: "Appraisal Well Site (South - Maubin)",
    description:
      "Upgraded the Electrical Control Room of Drilling Rig by SWTS Company. Reviewed electrical drawings, inspected new equipment installation, performed testing and commissioning, and modified Star-Delta starter to Soft-Starter.",
    skills: ["Drilling Rigs", "Soft-Starters", "Electrical Drawings", "Commissioning"],
  },
  {
    period: "Oct 2019 — Apr 2020",
    title: "Installation and Maintenance Engineer",
    company: "CNG Department, MOGE",
    description:
      "Installed and commissioned SAFE-Compressor units. Managed Transformer installations, Gas Engine Generators (Caterpillar, Perkins, Doosan), and PLC systems (Siemens S7-300) including program upload/download and HMI configuration.",
    skills: ["Siemens S7-300", "HMI", "Gas Engines", "Transformers", "Preventive Maintenance"],
  },
  {
    period: "Apr 2019 — Sep 2019",
    title: "Maintenance Engineer",
    company: "Appraisal Well Site (South - Maubin)",
    description:
      "Maintained ZJ-50 SR-II and D3 T2 SR-II Electric Drilling Rigs. Performed Megger Testing, cable termination, PLC/I/O inspections, generator synchronization, and ESD testing. Ensured safety compliance and environmental protection.",
    skills: ["Megger Testing", "Generator Management", "AVR", "UPS", "SIMOREG DCM"],
  },
]

export function Experience() {
  return (
    <section id="experience" className="border-t border-border py-20">
      <h2 className="mb-12 text-2xl font-bold text-foreground">Professional Experience</h2>
      <div className="space-y-12">
        {experiences.map((exp, index) => (
          <div key={index} className="group grid gap-4 lg:grid-cols-[200px,1fr]">
            <div className="text-sm text-muted-foreground">{exp.period}</div>
            <div>
              <h3 className="font-semibold text-foreground transition-colors group-hover:text-primary">
                {exp.title} · <span className="text-primary">{exp.company}</span>
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {exp.description}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {exp.skills.map((skill) => (
                  <Badge
                    key={skill}
                    variant="secondary"
                    className="bg-secondary text-secondary-foreground hover:bg-primary hover:text-primary-foreground"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
