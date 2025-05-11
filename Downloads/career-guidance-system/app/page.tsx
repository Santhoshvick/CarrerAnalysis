import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Search, BookOpen, GraduationCap, Building, Users, ArrowRight, CheckCircle } from "lucide-react"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="hero-gradient text-white py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
            <div className="space-y-4">
              <h1 className="text-3xl md:text-5xl font-bold tracking-tighter">
                Find Your Perfect College & Career Path
              </h1>
              <p className="text-lg md:text-xl text-white/90 max-w-[600px]">
                Explore colleges, check seat availability, and complete your admission process online without any
                physical presence.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 pt-4">
                <Button size="lg" asChild>
                  <Link href="/colleges">Explore Colleges</Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-white/10 text-white border-white/20 hover:bg-white/20"
                  asChild
                >
                  <Link href="/career-paths">Discover Career Paths</Link>
                </Button>
              </div>
            </div>
            <div className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Students on campus"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Search Section */}
      <section className="py-12 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center space-y-4 mb-8">
            <h2 className="text-3xl font-bold tracking-tighter">Find Your College</h2>
            <p className="text-muted-foreground max-w-[600px]">
              Search from thousands of colleges and universities to find the perfect match for your career goals.
            </p>
          </div>
          <div className="max-w-3xl mx-auto">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Search colleges by name, location, or program..."
                  className="w-full pl-10 py-2 rounded-md border border-input bg-background"
                />
              </div>
              <Button>Search</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Colleges */}
      <section className="py-16">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center space-y-4 mb-12">
            <h2 className="text-3xl font-bold tracking-tighter">Featured Colleges</h2>
            <p className="text-muted-foreground max-w-[600px]">
              Explore top colleges with available seats for the upcoming academic year.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                name: "Tech University",
                location: "San Francisco, CA",
                image: "/placeholder.svg?height=200&width=300",
                seats: 120,
                programs: ["Computer Science", "Data Science", "AI & ML"],
              },
              {
                name: "Business Academy",
                location: "New York, NY",
                image: "/placeholder.svg?height=200&width=300",
                seats: 85,
                programs: ["Business Administration", "Finance", "Marketing"],
              },
              {
                name: "Medical Institute",
                location: "Boston, MA",
                image: "/placeholder.svg?height=200&width=300",
                seats: 50,
                programs: ["Medicine", "Nursing", "Pharmacy"],
              },
            ].map((college, index) => (
              <Card key={index} className="card-hover overflow-hidden">
                <div className="relative h-48 w-full">
                  <Image src={college.image || "/placeholder.svg"} alt={college.name} fill className="object-cover" />
                </div>
                <CardHeader>
                  <CardTitle>{college.name}</CardTitle>
                  <CardDescription className="flex items-center gap-1">
                    <Building className="h-4 w-4" />
                    {college.location}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-2 text-sm text-secondary font-medium mb-2">
                    <Users className="h-4 w-4" />
                    <span>{college.seats} seats available</span>
                  </div>
                  <div className="space-y-1">
                    {college.programs.map((program, idx) => (
                      <div key={idx} className="text-sm flex items-center gap-1">
                        <CheckCircle className="h-3 w-3 text-primary" />
                        {program}
                      </div>
                    ))}
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full" asChild>
                    <Link href={`/colleges/${index + 1}`}>
                      View Details
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
          <div className="flex justify-center mt-10">
            <Button variant="outline" asChild>
              <Link href="/colleges">
                View All Colleges
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center space-y-4 mb-12">
            <h2 className="text-3xl font-bold tracking-tighter">How Career Compass Helps You</h2>
            <p className="text-muted-foreground max-w-[600px]">
              Our platform provides everything you need to make informed decisions about your education and career.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-background">
              <CardHeader className="text-center">
                <div className="mx-auto rounded-full bg-primary/10 p-3 mb-4">
                  <Search className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Find Colleges</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground">
                  Search and filter colleges based on location, programs, fees, and available seats.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-background">
              <CardHeader className="text-center">
                <div className="mx-auto rounded-full bg-secondary/10 p-3 mb-4">
                  <BookOpen className="h-6 w-6 text-secondary" />
                </div>
                <CardTitle>Career Guidance</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground">
                  Get personalized career recommendations based on your interests, skills, and academic performance.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-background">
              <CardHeader className="text-center">
                <div className="mx-auto rounded-full bg-accent/10 p-3 mb-4">
                  <GraduationCap className="h-6 w-6 text-accent" />
                </div>
                <CardTitle>Online Admissions</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground">
                  Complete the entire admission process online, from application to document submission and fee payment.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center space-y-4 mb-12">
            <h2 className="text-3xl font-bold tracking-tighter">Student Success Stories</h2>
            <p className="text-muted-foreground max-w-[600px]">
              Hear from students who found their perfect college and career path with Career Compass.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                name: "Sarah Johnson",
                college: "Tech University",
                image: "/placeholder.svg?height=100&width=100",
                quote:
                  "Career Compass helped me find the perfect Computer Science program. The detailed college information and seat availability feature saved me so much time!",
              },
              {
                name: "Michael Chen",
                college: "Business Academy",
                image: "/placeholder.svg?height=100&width=100",
                quote:
                  "I was confused about which career path to choose. The career assessment tool gave me clarity, and I'm now pursuing my MBA with confidence.",
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
                      <p className="text-sm text-muted-foreground">Student at {testimonial.college}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center space-y-4 mb-8">
            <h2 className="text-3xl font-bold tracking-tighter">Ready to Start Your Journey?</h2>
            <p className="text-primary-foreground/90 max-w-[600px]">
              Create an account today to explore colleges, get personalized recommendations, and apply for admissions.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link href="/register">Create Account</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-primary-foreground/10 text-primary-foreground border-primary-foreground/20 hover:bg-primary-foreground/20"
              asChild
            >
              <Link href="/colleges">Explore Colleges</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
