export function HowItWorksSection() {
  const steps = [
    {
      number: "01",
      title: "Create an Account",
      description: "Sign up and complete your profile with academic details and preferences.",
    },
    {
      number: "02",
      title: "Take Career Assessment",
      description: "Discover career paths that align with your skills, interests, and aptitude.",
    },
    {
      number: "03",
      title: "Explore Colleges",
      description: "Search and filter colleges based on your preferences and career goals.",
    },
    {
      number: "04",
      title: "Check Seat Availability",
      description: "View real-time seat availability in your preferred colleges and courses.",
    },
    {
      number: "05",
      title: "Apply Online",
      description: "Submit your applications online with required documents.",
    },
    {
      number: "06",
      title: "Track Application",
      description: "Monitor your application status and receive updates in real-time.",
    },
  ]

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/40">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">How It Works</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Your journey from career exploration to college admission in six simple steps
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 py-12 md:grid-cols-2 lg:grid-cols-3">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col space-y-3">
              <div className="flex items-center space-x-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  {step.number}
                </div>
                <h3 className="text-xl font-bold">{step.title}</h3>
              </div>
              <p className="text-muted-foreground">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
