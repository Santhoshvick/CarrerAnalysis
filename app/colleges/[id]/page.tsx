import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin, Phone, Mail, Globe, Clock, Users, GraduationCap, Building, Calendar } from "lucide-react"
import { CollegeCourses } from "@/components/college-courses"
import { CollegeFacilities } from "@/components/college-facilities"
import { CollegeReviews } from "@/components/college-reviews"
import { CollegeFAQ } from "@/components/college-faq"

// This would normally be fetched from an API based on the ID
const collegeData = {
  id: 1,
  name: "National Institute of Technology",
  description:
    "National Institute of Technology is one of the premier engineering institutions in India, known for its excellent academic programs and research facilities.",
  location: "Mumbai, Maharashtra",
  address: "123 College Road, Powai, Mumbai, Maharashtra 400076",
  phone: "+91 22 1234 5678",
  email: "admissions@nit.edu",
  website: "www.nit.edu",
  establishedYear: 1961,
  type: "Government",
  accreditation: "NAAC A++",
  ranking: "#5 in Engineering Colleges",
  availableSeats: 120,
  totalSeats: 500,
  applicationDeadline: "June 30, 2025",
  academicYear: "2025-2026",
  images: [
    "/placeholder.svg?height=400&width=600",
    "/placeholder.svg?height=400&width=600",
    "/placeholder.svg?height=400&width=600",
  ],
}

export default function CollegeDetailsPage({ params }: { params: { id: string } }) {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <div className="relative h-[300px] w-full overflow-hidden">
          <img
            src={collegeData.images[0] || "/placeholder.svg"}
            alt={collegeData.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50 flex items-end">
            <div className="container p-6 text-white">
              <h1 className="text-3xl font-bold mb-2">{collegeData.name}</h1>
              <div className="flex items-center gap-2 mb-4">
                <MapPin className="h-4 w-4" />
                <span>{collegeData.location}</span>
                <Badge>{collegeData.type}</Badge>
                <Badge variant="outline" className="bg-white/10">
                  {collegeData.ranking}
                </Badge>
              </div>
            </div>
          </div>
        </div>

        <div className="container py-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <Tabs defaultValue="overview">
                <TabsList className="mb-6">
                  <TabsTrigger value="overview">Overview</TabsTrigger>
                  <TabsTrigger value="courses">Courses</TabsTrigger>
                  <TabsTrigger value="facilities">Facilities</TabsTrigger>
                  <TabsTrigger value="reviews">Reviews</TabsTrigger>
                  <TabsTrigger value="faq">FAQ</TabsTrigger>
                </TabsList>

                <TabsContent value="overview">
                  <div className="space-y-6">
                    <Card>
                      <CardHeader>
                        <CardTitle>About {collegeData.name}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p>{collegeData.description}</p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                          <div className="flex items-center gap-2">
                            <Building className="h-5 w-5 text-muted-foreground" />
                            <div>
                              <p className="text-sm text-muted-foreground">Established</p>
                              <p className="font-medium">{collegeData.establishedYear}</p>
                            </div>
                          </div>
                          <div className="flex items-center gap-2">
                            <GraduationCap className="h-5 w-5 text-muted-foreground" />
                            <div>
                              <p className="text-sm text-muted-foreground">Accreditation</p>
                              <p className="font-medium">{collegeData.accreditation}</p>
                            </div>
                          </div>
                          <div className="flex items-center gap-2">
                            <Users className="h-5 w-5 text-muted-foreground" />
                            <div>
                              <p className="text-sm text-muted-foreground">Available Seats</p>
                              <p className="font-medium">
                                {collegeData.availableSeats} / {collegeData.totalSeats}
                              </p>
                            </div>
                          </div>
                          <div className="flex items-center gap-2">
                            <Calendar className="h-5 w-5 text-muted-foreground" />
                            <div>
                              <p className="text-sm text-muted-foreground">Application Deadline</p>
                              <p className="font-medium">{collegeData.applicationDeadline}</p>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader>
                        <CardTitle>Gallery</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                          {collegeData.images.map((image, index) => (
                            <img
                              key={index}
                              src={image || "/placeholder.svg"}
                              alt={`${collegeData.name} - Image ${index + 1}`}
                              className="rounded-lg object-cover aspect-video w-full"
                            />
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </TabsContent>

                <TabsContent value="courses">
                  <CollegeCourses collegeId={params.id} />
                </TabsContent>

                <TabsContent value="facilities">
                  <CollegeFacilities collegeId={params.id} />
                </TabsContent>

                <TabsContent value="reviews">
                  <CollegeReviews collegeId={params.id} />
                </TabsContent>

                <TabsContent value="faq">
                  <CollegeFAQ collegeId={params.id} />
                </TabsContent>
              </Tabs>
            </div>

            <div>
              <Card className="sticky top-20">
                <CardHeader>
                  <CardTitle>Contact Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-muted-foreground mt-0.5" />
                    <div>
                      <p className="font-medium">Address</p>
                      <p className="text-sm text-muted-foreground">{collegeData.address}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="h-5 w-5 text-muted-foreground" />
                    <div>
                      <p className="font-medium">Phone</p>
                      <p className="text-sm text-muted-foreground">{collegeData.phone}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5 text-muted-foreground" />
                    <div>
                      <p className="font-medium">Email</p>
                      <p className="text-sm text-muted-foreground">{collegeData.email}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Globe className="h-5 w-5 text-muted-foreground" />
                    <div>
                      <p className="font-medium">Website</p>
                      <p className="text-sm text-muted-foreground">{collegeData.website}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className="h-5 w-5 text-muted-foreground" />
                    <div>
                      <p className="font-medium">Academic Year</p>
                      <p className="text-sm text-muted-foreground">{collegeData.academicYear}</p>
                    </div>
                  </div>

                  <div className="pt-4">
                    <Link href={`/application/new?collegeId=${params.id}`}>
                      <Button className="w-full">Apply Now</Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
