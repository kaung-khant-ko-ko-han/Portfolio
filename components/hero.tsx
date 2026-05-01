import { MapPin, Mail, Phone } from "lucide-react"

export function Hero() {
  return (
    <section id="about" className="py-20 lg:py-32">
      <div className="grid gap-12 lg:grid-cols-[1fr,1.5fr]">
        <div>
          <h1 className="text-4xl font-bold tracking-tight text-foreground lg:text-5xl">
            Kaung Khant Ko Ko Han
          </h1>
          <p className="mt-3 text-lg text-primary">Ph.D. Mechatronic Engineer</p>
          <p className="mt-2 text-muted-foreground">
            Control Systems & Robotics Specialist
          </p>

          <div className="mt-8 flex flex-col gap-3">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <MapPin className="h-4 w-4" />
              <span>Tharkayta, Yangon, Myanmar</span>
            </div>
            <a
              href="mailto:kaungkhant.mce@protonmail.com"
              className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
            >
              <Mail className="h-4 w-4" />
              <span>kaungkhant.mce@protonmail.com</span>
            </a>
            <a
              href="tel:+9595182787"
              className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
            >
              <Phone className="h-4 w-4" />
              <span>(+959) 51 82787</span>
            </a>
          </div>

          <div className="mt-8 flex flex-col gap-2">
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-primary" />
              <span className="text-xs font-medium uppercase tracking-wider text-primary">
                About
              </span>
            </div>
            <div className="flex items-center gap-3 opacity-50">
              <span className="h-px w-8 bg-muted-foreground" />
              <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                Experience
              </span>
            </div>
            <div className="flex items-center gap-3 opacity-50">
              <span className="h-px w-8 bg-muted-foreground" />
              <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                Projects
              </span>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <p className="text-base leading-relaxed text-muted-foreground">
            I am a passionate{" "}
            <span className="font-medium text-foreground">Mechatronic Engineer</span> with
            a Ph.D. specializing in{" "}
            <span className="font-medium text-foreground">Robotics, Dynamics, and Control</span>. 
            With almost 3 years of professional experience as an Assistant Engineer (Electrical) 
            at Myanma Oil and Gas Enterprise (MOGE), I have developed expertise in industrial 
            control systems and automation.
          </p>
          <p className="text-base leading-relaxed text-muted-foreground">
            My research interests focus on{" "}
            <span className="font-medium text-foreground">Control Engineering</span>, and I 
            am actively pursuing knowledge through the International Society of Automation (ISA) 
            to become a{" "}
            <span className="font-medium text-foreground">Professional Control System Engineer</span>.
          </p>
          <p className="text-base leading-relaxed text-muted-foreground">
            Throughout my career, I have worked on various projects involving DCS systems, 
            PLC programming, electrical maintenance of drilling rigs, and industrial automation. 
            I am dedicated to safety, environmental protection, and continuous improvement in 
            the oil and gas industry.
          </p>
        </div>
      </div>
    </section>
  )
}
