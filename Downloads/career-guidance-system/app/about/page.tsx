import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Target, Heart, Lightbulb } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-primary text-primary-foreground py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
            <div className="space-y-4">
              <h1 className="text-3xl md:text-5xl font-bold tracking-tighter">About Career Compass</h1>
              <p className="text-lg md:text-xl text-primary-foreground/90 max-w-[600px]">
                We're on a mission to simplify the college admission process and help students find their perfect career
                path.
              </p>
            </div>
            <div className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Team meeting"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission Section */}
      <section className="py-16">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter">Our Mission</h2>
            <p className="text-xl text-muted-foreground">
              To empower students with the information and tools they need to make informed decisions about their
              education and career paths.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <Card className="text-center card-hover">
              <CardHeader>
                <div className="mx-auto rounded-full bg-primary/10 p-3 mb-4">
                  <Target className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Accessibility</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Making college information and career guidance accessible to all students, regardless of their
                  background or location.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center card-hover">
              <CardHeader>
                <div className="mx-auto rounded-full bg-secondary/10 p-3 mb-4">
                  <Heart className="h-6 w-6 text-secondary" />
                </div>
                <CardTitle>Personalization</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Providing personalized recommendations based on each student's unique interests, skills, and goals.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center card-hover">
              <CardHeader>
                <div className="mx-auto rounded-full bg-accent/10 p-3 mb-4">
                  <Lightbulb className="h-6 w-6 text-accent" />
                </div>
                <CardTitle>Innovation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Continuously improving our platform with innovative features to enhance the college search and
                  application experience.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image src="/placeholder.svg?height=400&width=600" alt="Our story" fill className="object-cover" />
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl font-bold tracking-tighter">Our Story</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Career Compass was founded in 2020 by a group of education professionals who recognized the challenges
                  students face when navigating the college admission process and choosing career paths.
                </p>
                <p>
                  Having worked in various educational institutions, our founders witnessed firsthand how students
                  struggled with limited information, complex application processes, and uncertainty about their future
                  careers.
                </p>
                <p>
                  They envisioned a platform that would bring transparency to college admissions, provide comprehensive
                  career guidance, and allow students to complete the entire process online without any physical
                  presence.
                </p>
                <p>
                  Today, Career Compass serves thousands of students across the country, helping them find their perfect
                  college match and career path.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team Section */}
      <section className="py-16">
        <div className="container px-4 md:px-6">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl font-bold tracking-tighter">Our Team</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Meet the dedicated professionals working to make your college and career journey smoother.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                name: "Dr. Sarah Johnson",
                role: "Founder & CEO",
                image: "/placeholder.svg?height=200&width=200",
                bio: "Former university admissions director with 15+ years of experience in higher education.",
              },
              {
                name: "Michael Chen",
                role: "Chief Technology Officer",
                image: "/placeholder.svg?height=200&width=200",
                bio: "Tech innovator with a passion for creating educational technology solutions.",
              },
              {
                name: "Dr. James Wilson",
                role: "Career Development Director",
                image: "/placeholder.svg?height=200&width=200",
                bio: "Career counselor and researcher specializing in emerging career trends and workforce development.",
              },
              {
                name: "Maria Rodriguez",
                role: "College Relations Manager",
                image: "/placeholder.svg?height=200&width=200",
                bio: "Former college admissions officer who builds partnerships with educational institutions.",
              },
            ].map((member, index) => (
              <Card key={index} className="text-center overflow-hidden card-hover">
                <div className="relative h-64 w-full">
                  <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
                </div>
                <CardHeader>
                  <CardTitle>{member.name}</CardTitle>
                  <CardDescription>{member.role}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center space-y-2">
              <div className="text-4xl font-bold">10,000+</div>
              <div className="text-primary-foreground/80">Students Helped</div>
            </div>
            <div className="text-center space-y-2">
              <div className="text-4xl font-bold">500+</div>
              <div className="text-primary-foreground/80">Partner Colleges</div>
            </div>
            <div className="text-center space-y-2">
              <div className="text-4xl font-bold">98%</div>
              <div className="text-primary-foreground/80">Satisfaction Rate</div>
            </div>
            <div className="text-center space-y-2">
              <div className="text-4xl font-bold">200+</div>
              <div className="text-primary-foreground/80">Career Paths</div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16">
        <div className="container px-4 md:px-6">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl font-bold tracking-tighter">What People Say</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Hear from students, parents, and educators who have used Career Compass.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                quote:
                  "Career Compass made my college application process so much easier. I found the perfect program and completed my application entirely online!",
                name: "Alex Thompson",
                role: "Student, Tech University",
                image: "/placeholder.svg?height=100&width=100",
              },
              {
                quote:
                  "As a parent, I appreciated the comprehensive information about colleges and career paths. It helped my daughter make an informed decision about her future.",
                name: "Jennifer Davis",
                role: "Parent",
                image: "/placeholder.svg?height=100&width=100",
              },
              {
                quote:
                  "Career Compass has been an invaluable resource for our school counseling department. It provides students with the guidance they need to explore various career options.",
                name: "Robert Martinez",
                role: "School Counselor",
                image: "/placeholder.svg?height=100&width=100",
              },
            ].map((testimonial, index) => (
              <Card key={index} className="bg-background">
                <CardContent className="pt-6">
                  <div className="flex flex-col items-center text-center">
                    <div className="relative h-20 w-20 rounded-full overflow-hidden mb-4">
                      <Image
                        src={testimonial.image || "/placeholder.svg"}
                        alt={testimonial.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <p className="text-muted-foreground italic mb-4">"{testimonial.quote}"</p>
                    <div>
                      <h4 className="font-semibold">{testimonial.name}</h4>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-16 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl font-bold tracking-tighter">Our Partners</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We collaborate with leading educational institutions and organizations.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8 items-center">
            {[...Array(6)].map((_, index) => (
              <div key={index} className="flex items-center justify-center">
                <div className="relative h-16 w-32">
                  <Image
                    src="/placeholder.svg?height=64&width=128"
                    alt={`Partner logo ${index + 1}`}
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-3xl font-bold tracking-tighter">Ready to Start Your Journey?</h2>
            <p className="text-xl text-muted-foreground">
              Join thousands of students who have found their perfect college and career path with Career Compass.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button size="lg" asChild>
                <Link href="/register">Create Account</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/colleges">Explore Colleges</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
