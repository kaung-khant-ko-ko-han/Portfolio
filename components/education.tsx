import { GraduationCap } from "lucide-react"

const education = [
  {
    degree: "Ph.D. in Mechatronic Engineering",
    institution: "Yangon Technological University (YTU)",
    location: "Insein, Yangon",
    date: "February 2018",
    specialization: "Robotics (Dynamic and Control)",
    gpa: null,
  },
  {
    degree: "M.E. in Mechatronic Engineering",
    institution: "Yangon Technological University (YTU)",
    location: "Insein, Yangon",
    date: "September 2015",
    specialization: "Robotics (Dynamic and Control)",
    gpa: null,
  },
  {
    degree: "B.E. in Mechatronic Engineering",
    institution: "Technological University, Thanlyin (TTU)",
    location: "Thanlyin",
    date: "November 2011",
    specialization: "Project: Explosive Liquid Level Sensing with Ultra Sonic Sensor",
    gpa: "4.24/5",
  },
]

export function Education() {
  return (
    <section id="education" className="border-t border-border py-20">
      <h2 className="mb-12 text-2xl font-bold text-foreground">Education</h2>
      <div className="space-y-8">
        {education.map((edu, index) => (
          <div
            key={index}
            className="group relative border-l-2 border-border pl-8 transition-colors hover:border-primary"
          >
            <div className="absolute -left-3 top-0 flex h-6 w-6 items-center justify-center rounded-full bg-background ring-2 ring-border transition-all group-hover:ring-primary">
              <GraduationCap className="h-3 w-3 text-muted-foreground transition-colors group-hover:text-primary" />
            </div>
            <div className="text-sm text-muted-foreground">{edu.date}</div>
            <h3 className="mt-1 font-semibold text-foreground transition-colors group-hover:text-primary">
              {edu.degree}
            </h3>
            <p className="text-primary">{edu.institution}</p>
            <p className="mt-2 text-sm text-muted-foreground">{edu.specialization}</p>
            {edu.gpa && (
              <p className="mt-1 text-sm font-medium text-foreground">GPA: {edu.gpa}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}
