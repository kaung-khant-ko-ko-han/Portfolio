import { Code, Wrench, Globe } from "lucide-react"

const skillCategories = [
  {
    icon: Code,
    title: "Embedded Programming",
    skills: [
      "LabView (Graphical Programming - National Instruments)",
      "Embedded C/C++ (mbed, ARM, GCC ARM, Keil μVision IDE)",
      "Programmable Logic Controller (Siemens, Mitsubishi)",
    ],
  },
  {
    icon: Wrench,
    title: "Application Software",
    skills: [
      "AutoCAD",
      "SolidWorks",
      "Autodesk Inventor",
      "Fusion 360",
      "MATLAB/Simulink",
      "Microsoft Office",
      "Adobe Illustrator",
      "QGIS",
      "LaTeX",
    ],
  },
  {
    icon: Globe,
    title: "Communication Languages",
    skills: ["English (Intermediate)", "Myanmar (Native)"],
  },
]

export function Skills() {
  return (
    <section id="skills" className="border-t border-border py-20">
      <h2 className="mb-12 text-2xl font-bold text-foreground">Technical Skills</h2>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {skillCategories.map((category, index) => (
          <div
            key={index}
            className="rounded-lg border border-border bg-card p-6 transition-colors hover:border-primary/50"
          >
            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                <category.icon className="h-5 w-5 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground">{category.title}</h3>
            </div>
            <ul className="space-y-2">
              {category.skills.map((skill, skillIndex) => (
                <li
                  key={skillIndex}
                  className="flex items-start gap-2 text-sm text-muted-foreground"
                >
                  <span className="mt-2 h-1 w-1 flex-shrink-0 rounded-full bg-primary" />
                  <span>{skill}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
