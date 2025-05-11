import { BookOpen, GraduationCap, Search, FileCheck, BarChart4, Calendar } from "lucide-react"

export function FeaturesSection() {
  const features = [
    {
      icon: <Search className="h-10 w-10 text-primary" />,
      title: "College Search",
      description: "Find colleges based on location, courses, fees, and more.",
    },
    {
      icon: <GraduationCap className="h-10 w-10 text-primary" />,
      title: "Seat Availability",
      description: "Real-time updates on available seats across different colleges.",
    },
    {
      icon: <FileCheck className="h-10 w-10 text-primary" />,
      title: "Online Admissions",
      description: "Complete the entire admission process online without physical presence.",
    },
    {
      icon: <BarChart4 className="h-10 w-10 text-primary" />,
      title: "Career Assessment",
      description: "Discover career paths that match your skills and interests.",
    },
    {
      icon: <BookOpen className="h-10 w-10 text-primary" />,
      title: "Course Comparison",
      description: "Compare courses across different colleges to make informed decisions.",
    },
    {
      icon: <Calendar className="h-10 w-10 text-primary" />,
      title: "Application Tracking",
      description: "Track your application status in real-time.",
    },
  ]

  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Key Features</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Everything you need to make informed decisions about your education and career
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
              {feature.icon}
              <h3 className="text-xl font-bold">{feature.title}</h3>
              <p className="text-center text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
