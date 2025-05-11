import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Briefcase, TrendingUp, GraduationCap, BookOpen, Users, DollarSign, ArrowRight, Search } from "lucide-react"

export default function CareerPathsPage() {
  // Sample career paths data
  const careerPaths = [
    {
      id: 1,
      title: "Software Development",
      description: "Design, develop, and maintain software applications and systems.",
      image: "/placeholder.svg?height=200&width=300",
      growth: "22% (Much faster than average)",
      salary: "$110,140 per year",
      education: "Bachelor's degree in Computer Science or related field",
      skills: ["Programming", "Problem-solving", "Software design", "Testing"],
      colleges: ["Tech University", "Computer Science Institute", "Engineering Academy"],
    },
    {
      id: 2,
      title: "Data Science",
      description: "Analyze and interpret complex data to help organizations make better decisions.",
      image: "/placeholder.svg?height=200&width=300",
      growth: "36% (Much faster than average)",
      salary: "$100,910 per year",
      education: "Master's degree in Data Science, Statistics, or related field",
      skills: ["Statistical analysis", "Machine learning", "Programming", "Data visualization"],
      colleges: ["Tech University", "Analytics Institute", "Science University"],
    },
    {
      id: 3,
      title: "Healthcare Administration",
      description: "Plan, direct, and coordinate medical and health services.",
      image: "/placeholder.svg?height=200&width=300",
      growth: "28% (Much faster than average)",
      salary: "$104,280 per year",
      education: "Bachelor's degree in Healthcare Administration or related field",
      skills: ["Leadership", "Communication", "Problem-solving", "Healthcare knowledge"],
      colleges: ["Medical Institute", "Health Sciences University", "Business Academy"],
    },
    {
      id: 4,
      title: "Financial Analysis",
      description: "Evaluate investment opportunities and provide financial guidance.",
      image: "/placeholder.svg?height=200&width=300",
      growth: "9% (Faster than average)",
      salary: "$83,660 per year",
      education: "Bachelor's degree in Finance, Accounting, or related field",
      skills: ["Financial modeling", "Data analysis", "Communication", "Decision-making"],
      colleges: ["Business Academy", "Finance Institute", "Economics University"],
    },
    {
      id: 5,
      title: "Digital Marketing",
      description: "Develop and implement marketing strategies across digital platforms.",
      image: "/placeholder.svg?height=200&width=300",
      growth: "10% (Faster than average)",
      salary: "$73,970 per year",
      education: "Bachelor's degree in Marketing, Communications, or related field",
      skills: ["SEO/SEM", "Social media", "Content creation", "Analytics"],
      colleges: ["Marketing School", "Business Academy", "Communications Institute"],
    },
    {
      id: 6,
      title: "Biomedical Engineering",
      description: "Design and develop medical systems and products.",
      image: "/placeholder.svg?height=200&width=300",
      growth: "6% (As fast as average)",
      salary: "$92,620 per year",
      education: "Bachelor's degree in Biomedical Engineering or related field",
      skills: ["Technical design", "Problem-solving", "Medical knowledge", "Mathematics"],
      colleges: ["Medical Institute", "Engineering Academy", "Science University"],
    },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <section className="bg-primary text-primary-foreground py-12">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center space-y-4">
            <h1 className="text-3xl font-bold tracking-tighter">Career Paths</h1>
            <p className="text-primary-foreground/90 max-w-[600px]">
              Explore different career paths and find the right college programs to achieve your goals.
            </p>
          </div>
        </div>
      </section>

      {/* Search Section */}
      <section className="py-8 border-b">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Search career paths..."
                  className="w-full pl-10 py-2 rounded-md border border-input bg-background"
                />
              </div>
              <Button>Search</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12">
        <div className="container px-4 md:px-6">
          <Tabs defaultValue="all" className="space-y-8">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-6">
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="technology">Technology</TabsTrigger>
              <TabsTrigger value="healthcare">Healthcare</TabsTrigger>
              <TabsTrigger value="business">Business</TabsTrigger>
              <TabsTrigger value="engineering">Engineering</TabsTrigger>
              <TabsTrigger value="arts">Arts & Design</TabsTrigger>
            </TabsList>

            {/* All Careers Tab */}
            <TabsContent value="all" className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {careerPaths.map((career) => (
                  <Card key={career.id} className="card-hover overflow-hidden">
                    <div className="relative h-48 w-full">
                      <Image
                        src={career.image || "/placeholder.svg"}
                        alt={career.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <CardHeader>
                      <CardTitle>{career.title}</CardTitle>
                      <CardDescription>{career.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2">
                        <div className="flex items-center gap-2 text-sm">
                          <TrendingUp className="h-4 w-4 text-green-500" />
                          <span>Growth: {career.growth}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                          <DollarSign className="h-4 w-4 text-muted-foreground" />
                          <span>Median Salary: {career.salary}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                          <GraduationCap className="h-4 w-4 text-muted-foreground" />
                          <span>Education: {career.education}</span>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button variant="outline" className="w-full" asChild>
                        <Link href={`/career-paths/${career.id}`}>
                          Explore Career
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* Other tabs would have filtered content */}
            <TabsContent value="technology" className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {careerPaths
                  .filter((career) => ["Software Development", "Data Science"].includes(career.title))
                  .map((career) => (
                    <Card key={career.id} className="card-hover overflow-hidden">
                      <div className="relative h-48 w-full">
                        <Image
                          src={career.image || "/placeholder.svg"}
                          alt={career.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <CardHeader>
                        <CardTitle>{career.title}</CardTitle>
                        <CardDescription>{career.description}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-2">
                          <div className="flex items-center gap-2 text-sm">
                            <TrendingUp className="h-4 w-4 text-green-500" />
                            <span>Growth: {career.growth}</span>
                          </div>
                          <div className="flex items-center gap-2 text-sm">
                            <DollarSign className="h-4 w-4 text-muted-foreground" />
                            <span>Median Salary: {career.salary}</span>
                          </div>
                          <div className="flex items-center gap-2 text-sm">
                            <GraduationCap className="h-4 w-4 text-muted-foreground" />
                            <span>Education: {career.education}</span>
                          </div>
                        </div>
                      </CardContent>
                      <CardFooter>
                        <Button variant="outline" className="w-full" asChild>
                          <Link href={`/career-paths/${career.id}`}>
                            Explore Career
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </Link>
                        </Button>
                      </CardFooter>
                    </Card>
                  ))}
              </div>
            </TabsContent>

            {/* Similar structure for other tabs */}
            <TabsContent value="healthcare" className="space-y-8">
              {/* Healthcare careers */}
            </TabsContent>
            <TabsContent value="business" className="space-y-8">
              {/* Business careers */}
            </TabsContent>
            <TabsContent value="engineering" className="space-y-8">
              {/* Engineering careers */}
            </TabsContent>
            <TabsContent value="arts" className="space-y-8">
              {/* Arts careers */}
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Career Assessment Section */}
      <section className="py-12 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="flex-1 space-y-4">
                <h2 className="text-2xl font-bold">Not Sure Which Career Path to Choose?</h2>
                <p className="text-muted-foreground">
                  Take our comprehensive career assessment to discover career paths that match your interests, skills,
                  and values.
                </p>
                <Button asChild>
                  <Link href="/career-paths/assessment">
                    Take Career Assessment
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
              <div className="flex-1">
                <div className="relative h-64 w-full rounded-lg overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=300&width=400"
                    alt="Career Assessment"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Career Resources Section */}
      <section className="py-12">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center space-y-4 mb-8">
            <h2 className="text-2xl font-bold">Career Resources</h2>
            <p className="text-muted-foreground max-w-[600px]">
              Explore our resources to help you make informed career decisions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="card-hover">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BookOpen className="h-5 w-5 text-primary" />
                  Career Guides
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  In-depth guides on various career paths, including job responsibilities, required skills, and growth
                  opportunities.
                </p>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full" asChild>
                  <Link href="/resources/guides">View Guides</Link>
                </Button>
              </CardFooter>
            </Card>

            <Card className="card-hover">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="h-5 w-5 text-primary" />
                  Industry Insights
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Latest trends, challenges, and opportunities in different industries to help you stay informed.
                </p>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full" asChild>
                  <Link href="/resources/insights">Read Insights</Link>
                </Button>
              </CardFooter>
            </Card>

            <Card className="card-hover">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Briefcase className="h-5 w-5 text-primary" />
                  Job Market Analysis
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Comprehensive analysis of job markets, demand for different roles, and salary expectations.
                </p>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full" asChild>
                  <Link href="/resources/job-market">View Analysis</Link>
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* Career Counseling Section */}
      <section className="py-12 bg-primary text-primary-foreground">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="flex-1 space-y-4">
                <h2 className="text-2xl font-bold">Need Personalized Career Guidance?</h2>
                <p className="text-primary-foreground/90">
                  Schedule a one-on-one session with our career counselors to get personalized advice on career paths,
                  college selection, and more.
                </p>
                <Button variant="secondary" asChild>
                  <Link href="/career-paths/counseling">Schedule Counseling Session</Link>
                </Button>
              </div>
              <div className="flex-1">
                <div className="relative h-64 w-full rounded-lg overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=300&width=400"
                    alt="Career Counseling"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
