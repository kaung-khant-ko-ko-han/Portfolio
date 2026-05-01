import { FileText, BookOpen } from "lucide-react"

const journals = [
  {
    authors: "Kaung Khant Ko Ko Han, Khin Thu Zar Win, Aung Kyaw Hein",
    title: "Development of IMU-Based Hand Gesture Rehabilitation System",
    publication: "YTU Technical Paper Series",
    volume: "Volume 1, Issue 1",
    date: "January 2015",
    page: "pp. 202",
  },
  {
    authors: "Kaung Khant Ko Ko Han, Aung Myo Thant Sin, Theingi",
    title: "Kinematic and Dynamic Analysis of Two Link Robot Arm using PID with Friction Compensator",
    publication: "International Journal of Scientific & Engineering Research (IJSER)",
    volume: "Volume 8, Issue 12",
    date: "December 2017",
    page: null,
  },
]

const conferences = [
  {
    authors: "Kaung Khant Ko Ko Han, Khin Thu Zar Win, Aung Kyaw Hein",
    title: "Development of IMU-Based Hand Gesture Rehabilitation System",
    publication: "YTU Technical Paper Series",
    volume: "Volume 1, Issue 1",
    date: "January 2015",
    page: "pp. 202",
  },
]

export function Publications() {
  return (
    <section id="publications" className="border-t border-border py-20">
      <h2 className="mb-12 text-2xl font-bold text-foreground">Publications</h2>

      <div className="space-y-12">
        <div>
          <div className="mb-6 flex items-center gap-2">
            <FileText className="h-5 w-5 text-primary" />
            <h3 className="text-lg font-semibold text-foreground">Journal Publications</h3>
          </div>
          <div className="space-y-6">
            {journals.map((pub, index) => (
              <div
                key={index}
                className="rounded-lg border border-border bg-card p-6 transition-colors hover:border-primary/50"
              >
                <h4 className="font-medium text-foreground">{pub.title}</h4>
                <p className="mt-2 text-sm text-muted-foreground">{pub.authors}</p>
                <div className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm">
                  <span className="text-primary">{pub.publication}</span>
                  <span className="text-muted-foreground">·</span>
                  <span className="text-muted-foreground">{pub.volume}</span>
                  <span className="text-muted-foreground">·</span>
                  <span className="text-muted-foreground">{pub.date}</span>
                  {pub.page && (
                    <>
                      <span className="text-muted-foreground">·</span>
                      <span className="text-muted-foreground">{pub.page}</span>
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <div className="mb-6 flex items-center gap-2">
            <BookOpen className="h-5 w-5 text-primary" />
            <h3 className="text-lg font-semibold text-foreground">Conference Papers</h3>
          </div>
          <div className="space-y-6">
            {conferences.map((pub, index) => (
              <div
                key={index}
                className="rounded-lg border border-border bg-card p-6 transition-colors hover:border-primary/50"
              >
                <h4 className="font-medium text-foreground">{pub.title}</h4>
                <p className="mt-2 text-sm text-muted-foreground">{pub.authors}</p>
                <div className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm">
                  <span className="text-primary">{pub.publication}</span>
                  <span className="text-muted-foreground">·</span>
                  <span className="text-muted-foreground">{pub.volume}</span>
                  <span className="text-muted-foreground">·</span>
                  <span className="text-muted-foreground">{pub.date}</span>
                  {pub.page && (
                    <>
                      <span className="text-muted-foreground">·</span>
                      <span className="text-muted-foreground">{pub.page}</span>
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
