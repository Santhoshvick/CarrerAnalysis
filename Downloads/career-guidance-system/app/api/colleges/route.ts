import { NextResponse } from "next/server"

// This would typically come from a database
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

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)

  // Filter by type if provided
  const type = searchParams.get("type")
  let filteredColleges = colleges

  if (type && type !== "all") {
    filteredColleges = colleges.filter((college) => college.type.toLowerCase() === type.toLowerCase())
  }

  // Search by name, location, or program
  const search = searchParams.get("search")
  if (search) {
    const searchLower = search.toLowerCase()
    filteredColleges = filteredColleges.filter(
      (college) =>
        college.name.toLowerCase().includes(searchLower) ||
        college.location.toLowerCase().includes(searchLower) ||
        college.programs.some((program) => program.toLowerCase().includes(searchLower)),
    )
  }

  return NextResponse.json(filteredColleges)
}
