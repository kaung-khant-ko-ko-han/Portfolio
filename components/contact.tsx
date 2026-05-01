import { Mail, Phone, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Contact() {
  return (
    <section id="contact" className="border-t border-border py-20">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-2xl font-bold text-foreground">Get in Touch</h2>
        <p className="mt-4 text-muted-foreground">
          If you would like to discuss a project or professional opportunity, feel free to
          reach out. I am always open to new challenges in control systems and industrial
          automation.
        </p>

        <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <Button asChild className="gap-2">
            <a href="mailto:kaungkhant.mce@gmail.com">
              <Mail className="h-4 w-4" />
              Contact Me
            </a>
          </Button>
        </div>

        <div className="mt-12 flex flex-col items-center gap-6 sm:flex-row sm:justify-center">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Mail className="h-4 w-4" />
            <a
              href="mailto:kaungkhant.mce@protonmail.com"
              className="transition-colors hover:text-primary"
            >
              kaungkhant.mce@protonmail.com
            </a>
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Phone className="h-4 w-4" />
            <a href="tel:+9595182787" className="transition-colors hover:text-primary">
              (+959) 51 82787
            </a>
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <MapPin className="h-4 w-4" />
            <span>Tharkayta, Yangon</span>
          </div>
        </div>
      </div>

      <footer className="mt-20 border-t border-border pt-8 text-center">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Kaung Khant Ko Ko Han. All rights reserved.
        </p>
      </footer>
    </section>
  )
}
