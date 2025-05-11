import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Building, MapPin, Users, BookOpen, ArrowRight, Filter } from "lucide-react"

export default function CollegesPage() {
  // Sample college data
  const colleges = [
    {
      id: 1,
      name: "Tech University",
      location: "San Francisco, CA",
      image: "/placeholder.svg?height=200&width=300",
      seats: 120,
      programs: ["Computer Science", "Data Science", "AI & ML"],
      rating: 4.8,
      fees: "$25,000/year",
      type: "Engineering",
    },
    {
      id: 2,
      name: "Business Academy",
      location: "New York, NY",
      image: "/placeholder.svg?height=200&width=300",
      seats: 85,
      programs: ["Business Administration", "Finance", "Marketing"],
      rating: 4.6,
      fees: "$30,000/year",
      type: "Business",
    },
    {
      id: 3,
      name: "Medical Institute",
      location: "Boston, MA",
      image: "/placeholder.svg?height=200&width=300",
      seats: 50,
      programs: ["Medicine", "Nursing", "Pharmacy"],
      rating: 4.9,
      fees: "$35,000/year",
      type: "Medical",
    },
    {
      id: 4,
      name: "Arts & Design College",
      location: "Los Angeles, CA",
      image: "/placeholder.svg?height=200&width=300",
      seats: 100,
      programs: ["Fine Arts", "Graphic Design", "Animation"],
      rating: 4.5,
      fees: "$22,000/year",
      type: "Arts",
    },
    {
      id: 5,
      name: "Science University",
      location: "Chicago, IL",
      image: "/placeholder.svg?height=200&width=300",
      seats: 90,
      programs: ["Physics", "Chemistry", "Biology"],
      rating: 4.7,
      fees: "$28,000/year",
      type: "Science",
    },
    {
      id: 6,
      name: "Law School",
      location: "Washington, DC",
      image: "/placeholder.svg?height=200&width=300",
      seats: 60,
      programs: ["Criminal Law", "Corporate Law", "International Law"],
      rating: 4.8,
      fees: "$32,000/year",
      type: "Law",
    },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <section className="bg-primary text-primary-foreground py-12">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center space-y-4">
            <h1 className="text-3xl font-bold tracking-tighter">Explore Colleges</h1>
            <p className="text-primary-foreground/90 max-w-[600px]">
              Find and compare colleges based on programs, location, fees, and available seats.
            </p>
          </div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-8 border-b">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-[300px_1fr] gap-6">
            {/* Filters - Desktop */}
            <div className="hidden md:block space-y-6">
              <div className="bg-card rounded-lg border p-4">
                <h3 className="font-semibold mb-4">Filters</h3>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="college-type">College Type</Label>
                    <Select defaultValue="all">
                      <SelectTrigger id="college-type">
                        <SelectValue placeholder="All Types" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Types</SelectItem>
                        <SelectItem value="engineering">Engineering</SelectItem>
                        <SelectItem value="medical">Medical</SelectItem>
                        <SelectItem value="business">Business</SelectItem>
                        <SelectItem value="arts">Arts</SelectItem>
                        <SelectItem value="science">Science</SelectItem>
                        <SelectItem value="law">Law</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="location">Location</Label>
                    <Select defaultValue="all">
                      <SelectTrigger id="location">
                        <SelectValue placeholder="All Locations" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Locations</SelectItem>
                        <SelectItem value="ca">California</SelectItem>
                        <SelectItem value="ny">New York</SelectItem>
                        <SelectItem value="ma">Massachusetts</SelectItem>
                        <SelectItem value="il">Illinois</SelectItem>
                        <SelectItem value="dc">Washington DC</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="program">Program</Label>
                    <Select defaultValue="all">
                      <SelectTrigger id="program">
                        <SelectValue placeholder="All Programs" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Programs</SelectItem>
                        <SelectItem value="cs">Computer Science</SelectItem>
                        <SelectItem value="business">Business</SelectItem>
                        <SelectItem value="medicine">Medicine</SelectItem>
                        <SelectItem value="arts">Arts</SelectItem>
                        <SelectItem value="law">Law</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label>Fees Range</Label>
                    <div className="grid grid-cols-2 gap-2">
                      <div>
                        <Input type="number" placeholder="Min" />
                      </div>
                      <div>
                        <Input type="number" placeholder="Max" />
                      </div>
                    </div>
                  </div>

                  <div className="pt-2">
                    <Button className="w-full">Apply Filters</Button>
                  </div>
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div className="space-y-6">
              {/* Search Bar */}
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="relative flex-1">
                  <Input
                    type="text"
                    placeholder="Search colleges by name, location, or program..."
                    className="w-full pl-10"
                  />
                  <BookOpen className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                </div>
                <Button>Search</Button>

                {/* Mobile Filter Button */}
                <Button variant="outline" className="md:hidden">
                  <Filter className="mr-2 h-4 w-4" />
                  Filters
                </Button>
              </div>

              {/* View Options */}
              <Tabs defaultValue="grid">
                <div className="flex items-center justify-between">
                  <div className="text-sm text-muted-foreground">
                    Showing <span className="font-medium text-foreground">{colleges.length}</span> colleges
                  </div>
                  <TabsList>
                    <TabsTrigger value="grid">Grid</TabsTrigger>
                    <TabsTrigger value="list">List</TabsTrigger>
                  </TabsList>
                </div>

                {/* Grid View */}
                <TabsContent value="grid" className="mt-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {colleges.map((college) => (
                      <Card key={college.id} className="card-hover overflow-hidden">
                        <div className="relative h-48 w-full">
                          <Image
                            src={college.image || "/placeholder.svg"}
                            alt={college.name}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <CardHeader>
                          <CardTitle>{college.name}</CardTitle>
                          <CardDescription className="flex items-center gap-1">
                            <MapPin className="h-4 w-4" />
                            {college.location}
                          </CardDescription>
                        </CardHeader>
                        <CardContent>
                          <div className="flex items-center gap-2 text-sm text-secondary font-medium mb-2">
                            <Users className="h-4 w-4" />
                            <span>{college.seats} seats available</span>
                          </div>
                          <div className="flex items-center gap-2 text-sm mb-2">
                            <Building className="h-4 w-4 text-muted-foreground" />
                            <span>{college.type}</span>
                          </div>
                          <div className="text-sm text-muted-foreground mb-2">Fees: {college.fees}</div>
                          <div className="space-y-1 mt-3">
                            <div className="text-sm font-medium">Top Programs:</div>
                            {college.programs.slice(0, 2).map((program, idx) => (
                              <div key={idx} className="text-sm text-muted-foreground">
                                • {program}
                              </div>
                            ))}
                            {college.programs.length > 2 && (
                              <div className="text-sm text-muted-foreground">
                                • And {college.programs.length - 2} more...
                              </div>
                            )}
                          </div>
                        </CardContent>
                        <CardFooter>
                          <Button variant="outline" className="w-full" asChild>
                            <Link href={`/colleges/${college.id}`}>
                              View Details
                              <ArrowRight className="ml-2 h-4 w-4" />
                            </Link>
                          </Button>
                        </CardFooter>
                      </Card>
                    ))}
                  </div>
                </TabsContent>

                {/* List View */}
                <TabsContent value="list" className="mt-6">
                  <div className="space-y-4">
                    {colleges.map((college) => (
                      <Card key={college.id} className="overflow-hidden">
                        <div className="flex flex-col md:flex-row">
                          <div className="relative h-48 md:h-auto md:w-48 shrink-0">
                            <Image
                              src={college.image || "/placeholder.svg"}
                              alt={college.name}
                              fill
                              className="object-cover"
                            />
                          </div>
                          <div className="flex flex-col flex-1">
                            <CardHeader>
                              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                                <div>
                                  <CardTitle>{college.name}</CardTitle>
                                  <CardDescription className="flex items-center gap-1">
                                    <MapPin className="h-4 w-4" />
                                    {college.location}
                                  </CardDescription>
                                </div>
                                <div className="flex items-center gap-2 text-sm text-secondary font-medium">
                                  <Users className="h-4 w-4" />
                                  <span>{college.seats} seats available</span>
                                </div>
                              </div>
                            </CardHeader>
                            <CardContent>
                              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                  <div className="flex items-center gap-2 text-sm mb-2">
                                    <Building className="h-4 w-4 text-muted-foreground" />
                                    <span>{college.type}</span>
                                  </div>
                                  <div className="text-sm text-muted-foreground">Fees: {college.fees}</div>
                                </div>
                                <div>
                                  <div className="text-sm font-medium mb-1">Top Programs:</div>
                                  <div className="text-sm text-muted-foreground">{college.programs.join(", ")}</div>
                                </div>
                              </div>
                            </CardContent>
                            <CardFooter className="flex justify-end">
                              <Button variant="outline" asChild>
                                <Link href={`/colleges/${college.id}`}>
                                  View Details
                                  <ArrowRight className="ml-2 h-4 w-4" />
                                </Link>
                              </Button>
                            </CardFooter>
                          </div>
                        </div>
                      </Card>
                    ))}
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
