import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const data = await request.json()

    // In a real application, this would validate the data and save it to a database

    // Generate a unique application ID
    const applicationId = `APP-2025-${Math.floor(10000 + Math.random() * 90000)}`

    // Mock response
    return NextResponse.json({
      success: true,
      applicationId,
      message: "Application submitted successfully",
    })
  } catch (error) {
    return NextResponse.json({ error: "Failed to submit application" }, { status: 500 })
  }
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const userId = searchParams.get("userId")

  if (!userId) {
    return NextResponse.json({ error: "User ID is required" }, { status: 400 })
  }

  // Mock applications data
  const applications = [
    {
      id: "APP-2025-12345",
      collegeId: 1,
      collegeName: "National Institute of Technology",
      course: "Computer Science Engineering",
      status: "Under Review",
      appliedDate: "2025-05-10T10:30:00Z",
      lastUpdated: "2025-05-12T14:45:00Z",
    },
    {
      id: "APP-2025-67890",
      collegeId: 2,
      collegeName: "Delhi University",
      course: "Business Administration",
      status: "Submitted",
      appliedDate: "2025-05-08T09:15:00Z",
      lastUpdated: "2025-05-08T09:15:00Z",
    },
    {
      id: "APP-2025-24680",
      collegeId: 3,
      collegeName: "Bangalore Institute of Technology",
      course: "Information Technology",
      status: "Interview Scheduled",
      appliedDate: "2025-05-05T11:20:00Z",
      lastUpdated: "2025-05-11T16:30:00Z",
    },
  ]

  return NextResponse.json(applications)
}
