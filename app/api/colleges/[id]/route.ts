import { NextResponse } from "next/server"

// Mock database of colleges
const colleges = [
  {
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
    courses: [
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
        description:
          "A four-year undergraduate program covering electrical systems, power generation, and electronics.",
        duration: "4 years",
        totalSeats: 90,
        availableSeats: 20,
        fees: "₹1,40,000 per year",
        eligibility: "10+2 with PCM, minimum 60% aggregate",
        applicationDeadline: "June 30, 2025",
      },
    ],
    facilities: [
      {
        id: 1,
        name: "Library",
        description: "A well-stocked library with over 50,000 books, journals, and digital resources.",
      },
      {
        id: 2,
        name: "Wi-Fi Campus",
        description: "High-speed internet connectivity throughout the campus for students and faculty.",
      },
    ],
    images: [
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
    ],
  },
]

export async function GET(request: Request, { params }: { params: { id: string } }) {
  const id = Number.parseInt(params.id)
  const college = colleges.find((c) => c.id === id)

  if (!college) {
    return NextResponse.json({ error: "College not found" }, { status: 404 })
  }

  return NextResponse.json(college)
}
