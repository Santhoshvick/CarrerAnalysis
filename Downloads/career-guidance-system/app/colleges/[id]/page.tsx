import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import {
  Building,
  MapPin,
  Users,
  Calendar,
  DollarSign,
  GraduationCap,
  BookOpen,
  Globe,
  Phone,
  Mail,
  Clock,
  CheckCircle,
  Star,
} from "lucide-react"

export default function CollegeDetailsPage({ params }: { params: { id: string } }) {
  // This would normally come from a database
  const college = {
    id: Number.parseInt(params.id),
    name: "Tech University",
    tagline: "Shaping Tomorrow's Technology Leaders",
    description:
      "Tech University is a leading institution for technology education, offering cutting-edge programs in computer science, data science, artificial intelligence, and more. Our state-of-the-art facilities and experienced faculty provide students with the knowledge and skills needed to succeed in the rapidly evolving tech industry.",
    location: "San Francisco, CA",
    founded: 1985,
    type: "Private",
    accreditation: "National Association of Technology Education",
    images: [
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
    ],
    rating: 4.8,
    reviews: 520,
    seats: {
      total: 500,
      available: 120,
    },
    fees: {
      tuition: "$25,000/year",
      housing: "$12,000/year",
      books: "$2,000/year",
    },
    programs: [
      {
        name: "Computer Science",
        degree: "Bachelor of Science",
        duration: "4 years",
        seats: 50,
        description:
          "Our Computer Science program provides a comprehensive foundation in programming, algorithms, data structures, and software engineering.",
      },
      {
        name: "Data Science",
        degree: "Bachelor of Science",
        duration: "4 years",
        seats: 40,
        description:
          "The Data Science program combines computer science, statistics, and domain expertise to extract knowledge and insights from data.",
      },
      {
        name: "Artificial Intelligence",
        degree: "Bachelor of Science",
        duration: "4 years",
        seats: 30,
        description:
          "Our AI program focuses on machine learning, neural networks, natural language processing, and computer vision.",
      },
    ],
    facilities: [
      "State-of-the-art computer labs",
      "AI research center",
      "Innovation hub",
      "Digital library",
      "Student housing",
      "Sports complex",
      "Cafeteria",
      "Health center",
    ],
    admissionProcess: [
      "Online application submission",
      "Academic records review",
      "Entrance examination",
      "Interview (for selected candidates)",
      "Admission offer",
      "Fee payment and enrollment",
    ],
    deadlines: {
      application: "March 15, 2025",
      examination: "April 10, 2025",
      interviews: "April 25-30, 2025",
      results: "May 15, 2025",
      enrollment: "June 1-15, 2025",
    },
    contact: {
      phone: "+1 (555) 123-4567",
      email: "admissions@techuniversity.edu",
      website: "www.techuniversity.edu",
      address: "123 Technology Avenue, San Francisco, CA 94105",
    },
  }

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[300px] md:h-[400px]">
        <Image
          src={college.images[0] || "/placeholder.svg"}
          alt={college.name}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50 flex items-end">
          <div className="container px-4 md:px-6 py-8">
            <div className="max-w-3xl">
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">{college.name}</h1>
              <p className="text-white/90 text-lg">{college.tagline}</p>
              <div className="flex items-center gap-4 mt-4">
                <Badge variant="secondary" className="flex items-center gap-1">
                  <MapPin className="h-3 w-3" />
                  {college.location}
                </Badge>
                <Badge variant="secondary" className="flex items-center gap-1">
                  <Building className="h-3 w-3" />
                  {college.type}
                </Badge>
                <Badge variant="secondary" className="flex items-center gap-1">
                  <Star className="h-3 w-3 text-yellow-400" />
                  {college.rating} ({college.reviews} reviews)
                </Badge>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-8">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <Tabs defaultValue="overview">
                <TabsList className="grid w-full grid-cols-4">
                  <TabsTrigger value="overview">Overview</TabsTrigger>
                  <TabsTrigger value="programs">Programs</TabsTrigger>
                  <TabsTrigger value="facilities">Facilities</TabsTrigger>
                  <TabsTrigger value="admission">Admission</TabsTrigger>
                </TabsList>

                {/* Overview Tab */}
                <TabsContent value="overview" className="mt-6">
                  <div className="space-y-6">
                    <div>
                      <h2 className="text-2xl font-bold mb-4">About {college.name}</h2>
                      <p className="text-muted-foreground">{college.description}</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <Card>
                        <CardHeader>
                          <CardTitle className="text-lg">College Information</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-3">
                          <div className="flex items-center gap-2">
                            <Calendar className="h-4 w-4 text-muted-foreground" />
                            <span className="text-sm">Founded: {college.founded}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Building className="h-4 w-4 text-muted-foreground" />
                            <span className="text-sm">Type: {college.type}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <GraduationCap className="h-4 w-4 text-muted-foreground" />
                            <span className="text-sm">Accreditation: {college.accreditation}</span>
                          </div>
                        </CardContent>
                      </Card>

                      <Card>
                        <CardHeader>
                          <CardTitle className="text-lg">Seat Availability</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-3">
                          <div className="flex items-center gap-2">
                            <Users className="h-4 w-4 text-muted-foreground" />
                            <span className="text-sm">Total Seats: {college.seats.total}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <CheckCircle className="h-4 w-4 text-green-500" />
                            <span className="text-sm">Available Seats: {college.seats.available}</span>
                          </div>
                          <div className="w-full bg-muted rounded-full h-2.5">
                            <div
                              className="bg-primary h-2.5 rounded-full"
                              style={{ width: `${(college.seats.available / college.seats.total) * 100}%` }}
                            ></div>
                          </div>
                        </CardContent>
                      </Card>
                    </div>

                    <div>
                      <h3 className="text-xl font-bold mb-4">Fee Structure</h3>
                      <Card>
                        <CardContent className="pt-6">
                          <div className="space-y-3">
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-2">
                                <DollarSign className="h-4 w-4 text-muted-foreground" />
                                <span>Tuition Fee</span>
                              </div>
                              <span className="font-medium">{college.fees.tuition}</span>
                            </div>
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-2">
                                <Building className="h-4 w-4 text-muted-foreground" />
                                <span>Housing Fee</span>
                              </div>
                              <span className="font-medium">{college.fees.housing}</span>
                            </div>
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-2">
                                <BookOpen className="h-4 w-4 text-muted-foreground" />
                                <span>Books & Supplies</span>
                              </div>
                              <span className="font-medium">{college.fees.books}</span>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </div>

                    <div>
                      <h3 className="text-xl font-bold mb-4">Campus Gallery</h3>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {college.images.map((image, index) => (
                          <div key={index} className="relative h-48 rounded-lg overflow-hidden">
                            <Image
                              src={image || "/placeholder.svg"}
                              alt={`${college.name} campus ${index + 1}`}
                              fill
                              className="object-cover"
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </TabsContent>

                {/* Programs Tab */}
                <TabsContent value="programs" className="mt-6">
                  <div className="space-y-6">
                    <h2 className="text-2xl font-bold mb-4">Programs Offered</h2>
                    <div className="space-y-4">
                      {college.programs.map((program, index) => (
                        <Card key={index}>
                          <CardHeader>
                            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                              <div>
                                <CardTitle>{program.name}</CardTitle>
                                <CardDescription>{program.degree}</CardDescription>
                              </div>
                              <Badge variant="outline" className="flex items-center gap-1 md:self-start">
                                <Users className="h-3 w-3" />
                                {program.seats} seats available
                              </Badge>
                            </div>
                          </CardHeader>
                          <CardContent>
                            <div className="space-y-3">
                              <p className="text-muted-foreground">{program.description}</p>
                              <div className="flex items-center gap-2">
                                <Clock className="h-4 w-4 text-muted-foreground" />
                                <span className="text-sm">Duration: {program.duration}</span>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </div>
                </TabsContent>

                {/* Facilities Tab */}
                <TabsContent value="facilities" className="mt-6">
                  <div className="space-y-6">
                    <h2 className="text-2xl font-bold mb-4">Campus Facilities</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {college.facilities.map((facility, index) => (
                        <div key={index} className="flex items-center gap-2 p-3 border rounded-md">
                          <CheckCircle className="h-5 w-5 text-primary" />
                          <span>{facility}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </TabsContent>

                {/* Admission Tab */}
                <TabsContent value="admission" className="mt-6">
                  <div className="space-y-6">
                    <h2 className="text-2xl font-bold mb-4">Admission Process</h2>
                    <div className="space-y-4">
                      <div className="grid grid-cols-1 gap-2">
                        {college.admissionProcess.map((step, index) => (
                          <div key={index} className="flex items-start gap-2">
                            <div className="flex items-center justify-center w-6 h-6 rounded-full bg-primary text-primary-foreground text-sm font-medium shrink-0">
                              {index + 1}
                            </div>
                            <span>{step}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h3 className="text-xl font-bold mb-4">Important Dates</h3>
                      <Card>
                        <CardContent className="pt-6">
                          <div className="space-y-3">
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-2">
                                <Calendar className="h-4 w-4 text-muted-foreground" />
                                <span>Application Deadline</span>
                              </div>
                              <span className="font-medium">{college.deadlines.application}</span>
                            </div>
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-2">
                                <Calendar className="h-4 w-4 text-muted-foreground" />
                                <span>Entrance Examination</span>
                              </div>
                              <span className="font-medium">{college.deadlines.examination}</span>
                            </div>
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-2">
                                <Calendar className="h-4 w-4 text-muted-foreground" />
                                <span>Interviews</span>
                              </div>
                              <span className="font-medium">{college.deadlines.interviews}</span>
                            </div>
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-2">
                                <Calendar className="h-4 w-4 text-muted-foreground" />
                                <span>Results Announcement</span>
                              </div>
                              <span className="font-medium">{college.deadlines.results}</span>
                            </div>
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-2">
                                <Calendar className="h-4 w-4 text-muted-foreground" />
                                <span>Enrollment Period</span>
                              </div>
                              <span className="font-medium">{college.deadlines.enrollment}</span>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Apply Now</CardTitle>
                  <CardDescription>Start your application process</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>Applications open for 2025-26</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Calendar className="h-4 w-4 text-muted-foreground" />
                    <span>Deadline: {college.deadlines.application}</span>
                  </div>
                  <Button className="w-full" asChild>
                    <Link href="/admissions/apply">Start Application</Link>
                  </Button>
                  <Button variant="outline" className="w-full">
                    Request Information
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Contact Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Phone className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm">{college.contact.phone}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm">{college.contact.email}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Globe className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm">{college.contact.website}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm">{college.contact.address}</span>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Need Help?</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground">
                    Our admission counselors are available to guide you through the application process.
                  </p>
                  <Button variant="outline" className="w-full">
                    Schedule Consultation
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
