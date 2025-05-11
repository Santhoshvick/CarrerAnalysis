import { NextResponse } from "next/server"

// Mock database of colleges
const colleges = [
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

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)

  // Filter by location
  const location = searchParams.get("location")
  // Filter by course
  const course = searchParams.get("course")
  // Filter by available seats
  const availableSeats = searchParams.get("availableSeats")

  let filteredColleges = [...colleges]

  if (location) {
    filteredColleges = filteredColleges.filter((college) =>
      college.location.toLowerCase().includes(location.toLowerCase()),
    )
  }

  if (course) {
    filteredColleges = filteredColleges.filter((college) =>
      college.courses.some((c) => c.toLowerCase().includes(course.toLowerCase())),
    )
  }

  if (availableSeats === "true") {
    filteredColleges = filteredColleges.filter((college) => college.availableSeats > 0)
  }

  return NextResponse.json(filteredColleges)
}
