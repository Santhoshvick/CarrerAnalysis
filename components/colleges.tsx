"use client"

import { useState } from "react"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { MapPin, GraduationCap, Users } from "lucide-react"

// Mock data - would be fetched from API in a real application
const collegesData = [
  {
    id: 1,
    name: "National Institute of Technology",
    location: "Mumbai, Maharashtra",
    courses: ["Computer Science", "Electrical Engineering", "Mechanical Engineering"],
    availableSeats: 120,
    totalSeats: 500,
    rating: 4.5,
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 2,
    name: "Delhi University",
    location: "Delhi",
    courses: ["Business Administration", "Economics", "Psychology"],
    availableSeats: 85,
    totalSeats: 300,
    rating: 4.3,
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 3,
    name: "Bangalore Institute of Technology",
    location: "Bangalore, Karnataka",
    courses: ["Information Technology", "Data Science", "Artificial Intelligence"],
    availableSeats: 50,
    totalSeats: 250,
    rating: 4.7,
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 4,
    name: "Chennai Medical College",
    location: "Chennai, Tamil Nadu",
    courses: ["Medicine", "Dentistry", "Pharmacy"],
    availableSeats: 30,
    totalSeats: 150,
    rating: 4.6,
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 5,
    name: "Kolkata Engineering College",
    location: "Kolkata, West Bengal",
    courses: ["Civil Engineering", "Electronics", "Chemical Engineering"],
    availableSeats: 75,
    totalSeats: 200,
    rating: 4.2,
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 6,
    name: "Pune Business School",
    location: "Pune, Maharashtra",
    courses: ["MBA", "Finance", "Marketing"],
    availableSeats: 60,
    totalSeats: 180,
    rating: 4.4,
    image: "/placeholder.svg?height=200&width=300",
  },
]

export function Colleges() {
  const [colleges] = useState(collegesData)

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {colleges.map((college) => (
        <Card key={college.id} className="overflow-hidden">
          <div className="aspect-video w-full overflow-hidden">
            <img src={college.image || "/placeholder.svg"} alt={college.name} className="object-cover w-full h-full" />
          </div>
          <CardHeader>
            <div className="flex justify-between items-start">
              <CardTitle>{college.name}</CardTitle>
              <Badge variant={college.availableSeats > 50 ? "default" : "destructive"}>
                {college.availableSeats} seats left
              </Badge>
            </div>
            <CardDescription className="flex items-center gap-1">
              <MapPin className="h-3.5 w-3.5" />
              {college.location}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2 mb-4">
              {college.courses.slice(0, 3).map((course, index) => (
                <Badge key={index} variant="outline">
                  {course}
                </Badge>
              ))}
              {college.courses.length > 3 && <Badge variant="outline">+{college.courses.length - 3} more</Badge>}
            </div>
            <div className="flex items-center justify-between text-sm text-muted-foreground">
              <div className="flex items-center gap-1">
                <GraduationCap className="h-4 w-4" />
                <span>{college.courses.length} Courses</span>
              </div>
              <div className="flex items-center gap-1">
                <Users className="h-4 w-4" />
                <span>
                  {college.availableSeats}/{college.totalSeats} Seats
                </span>
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Link href={`/colleges/${college.id}`}>
              <Button variant="outline" size="sm">
                View Details
              </Button>
            </Link>
            <Link href={`/application/new?collegeId=${college.id}`}>
              <Button size="sm">Apply Now</Button>
            </Link>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}
