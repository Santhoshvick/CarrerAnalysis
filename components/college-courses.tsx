import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Clock, BookOpen, Calendar, DollarSign } from "lucide-react"

// Mock data - would be fetched from API in a real application
const coursesData = [
  {
    id: 1,
    name: "Computer Science Engineering",
    description:
      "A four-year undergraduate program focusing on computer programming, software development, and computer systems.",
    duration: "4 years",
    totalSeats: 120,
    availableSeats: 35,
    fees: "₹1,50,000 per year",
    eligibility: "10+2 with PCM, minimum 60% aggregate",
    applicationDeadline: "June 30, 2025",
  },
  {
    id: 2,
    name: "Electrical Engineering",
    description: "A four-year undergraduate program covering electrical systems, power generation, and electronics.",
    duration: "4 years",
    totalSeats: 90,
    availableSeats: 20,
    fees: "₹1,40,000 per year",
    eligibility: "10+2 with PCM, minimum 60% aggregate",
    applicationDeadline: "June 30, 2025",
  },
  {
    id: 3,
    name: "Mechanical Engineering",
    description:
      "A four-year undergraduate program focusing on design, manufacturing, and maintenance of mechanical systems.",
    duration: "4 years",
    totalSeats: 90,
    availableSeats: 25,
    fees: "₹1,40,000 per year",
    eligibility: "10+2 with PCM, minimum 60% aggregate",
    applicationDeadline: "June 30, 2025",
  },
  {
    id: 4,
    name: "Information Technology",
    description:
      "A four-year undergraduate program covering software development, database management, and network systems.",
    duration: "4 years",
    totalSeats: 60,
    availableSeats: 15,
    fees: "₹1,60,000 per year",
    eligibility: "10+2 with PCM, minimum 60% aggregate",
    applicationDeadline: "June 30, 2025",
  },
]

export function CollegeCourses({ collegeId }: { collegeId: string }) {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Available Courses</h2>

      {coursesData.map((course) => (
        <Card key={course.id}>
          <CardHeader>
            <div className="flex justify-between items-start">
              <div>
                <CardTitle>{course.name}</CardTitle>
                <CardDescription>{course.description}</CardDescription>
              </div>
              <Badge variant={course.availableSeats > 20 ? "default" : "destructive"}>
                {course.availableSeats} seats left
              </Badge>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="flex items-center gap-2">
                <Clock className="h-5 w-5 text-muted-foreground" />
                <div>
                  <p className="text-sm text-muted-foreground">Duration</p>
                  <p className="font-medium">{course.duration}</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <BookOpen className="h-5 w-5 text-muted-foreground" />
                <div>
                  <p className="text-sm text-muted-foreground">Eligibility</p>
                  <p className="font-medium">{course.eligibility}</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <DollarSign className="h-5 w-5 text-muted-foreground" />
                <div>
                  <p className="text-sm text-muted-foreground">Fees</p>
                  <p className="font-medium">{course.fees}</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-5 w-5 text-muted-foreground" />
                <div>
                  <p className="text-sm text-muted-foreground">Application Deadline</p>
                  <p className="font-medium">{course.applicationDeadline}</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
