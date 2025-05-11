import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { BookOpen, Wifi, Home, Utensils, Dumbbell, Microscope, Laptop, Bus } from "lucide-react"

// Mock data - would be fetched from API in a real application
const facilitiesData = [
  {
    id: 1,
    name: "Library",
    description: "A well-stocked library with over 50,000 books, journals, and digital resources.",
    icon: <BookOpen className="h-8 w-8" />,
  },
  {
    id: 2,
    name: "Wi-Fi Campus",
    description: "High-speed internet connectivity throughout the campus for students and faculty.",
    icon: <Wifi className="h-8 w-8" />,
  },
  {
    id: 3,
    name: "Hostels",
    description: "Separate hostels for boys and girls with modern amenities and 24/7 security.",
    icon: <Home className="h-8 w-8" />,
  },
  {
    id: 4,
    name: "Cafeteria",
    description: "Multiple cafeterias serving a variety of cuisines at affordable prices.",
    icon: <Utensils className="h-8 w-8" />,
  },
  {
    id: 5,
    name: "Sports Complex",
    description: "State-of-the-art sports facilities including cricket, football, basketball, and indoor games.",
    icon: <Dumbbell className="h-8 w-8" />,
  },
  {
    id: 6,
    name: "Laboratories",
    description: "Well-equipped laboratories for practical learning and research.",
    icon: <Microscope className="h-8 w-8" />,
  },
  {
    id: 7,
    name: "Computer Labs",
    description: "Modern computer labs with the latest hardware and software for students.",
    icon: <Laptop className="h-8 w-8" />,
  },
  {
    id: 8,
    name: "Transportation",
    description: "College buses connecting major points in the city for easy commute.",
    icon: <Bus className="h-8 w-8" />,
  },
]

export function CollegeFacilities({ collegeId }: { collegeId: string }) {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Campus Facilities</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {facilitiesData.map((facility) => (
          <Card key={facility.id}>
            <CardHeader className="flex flex-row items-center gap-4">
              <div className="rounded-full p-2 bg-primary/10 text-primary">{facility.icon}</div>
              <div>
                <CardTitle>{facility.name}</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <CardDescription>{facility.description}</CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
