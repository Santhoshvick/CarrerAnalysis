import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { MapPin, GraduationCap } from "lucide-react"

// Mock data - would be generated based on assessment results
const recommendedCollegesData = [
  {
    id: 1,
    name: "National Institute of Technology",
    location: "Mumbai, Maharashtra",
    courses: ["Computer Science", "Data Science", "Information Technology"],
    matchPercentage: 95,
    image: "/placeholder.svg?height=100&width=150",
  },
  {
    id: 2,
    name: "Indian Institute of Technology",
    location: "Delhi",
    courses: ["Computer Science", "Artificial Intelligence", "Electronics"],
    matchPercentage: 90,
    image: "/placeholder.svg?height=100&width=150",
  },
  {
    id: 3,
    name: "Bangalore Institute of Technology",
    location: "Bangalore, Karnataka",
    courses: ["Information Technology", "UX Design", "Software Engineering"],
    matchPercentage: 85,
    image: "/placeholder.svg?height=100&width=150",
  },
]

export function RecommendedColleges() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Recommended Colleges</CardTitle>
        <CardDescription>These colleges offer programs that align with your career interests.</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {recommendedCollegesData.map((college) => (
            <div key={college.id} className="flex flex-col md:flex-row gap-4 border rounded-lg p-4">
              <div className="w-full md:w-[150px] h-[100px] overflow-hidden rounded-md">
                <img
                  src={college.image || "/placeholder.svg"}
                  alt={college.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1">
                <div className="flex justify-between items-start">
                  <h3 className="text-lg font-bold">{college.name}</h3>
                  <Badge>{college.matchPercentage}% Match</Badge>
                </div>
                <div className="flex items-center gap-1 text-sm text-muted-foreground mt-1">
                  <MapPin className="h-3.5 w-3.5" />
                  {college.location}
                </div>
                <div className="flex items-center gap-1 text-sm text-muted-foreground mt-1">
                  <GraduationCap className="h-3.5 w-3.5" />
                  Recommended Courses:
                </div>
                <div className="flex flex-wrap gap-1 mt-1">
                  {college.courses.map((course, index) => (
                    <Badge key={index} variant="outline">
                      {course}
                    </Badge>
                  ))}
                </div>
                <div className="mt-3">
                  <Link href={`/colleges/${college.id}`}>
                    <Button size="sm" variant="outline">
                      View College
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
