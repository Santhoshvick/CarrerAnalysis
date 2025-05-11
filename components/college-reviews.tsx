import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { StarIcon } from "lucide-react"

// Mock data - would be fetched from API in a real application
const reviewsData = [
  {
    id: 1,
    name: "Rahul Sharma",
    avatar: "RS",
    course: "Computer Science Engineering",
    year: "2023",
    rating: 5,
    review:
      "One of the best engineering colleges in India. Great faculty, excellent infrastructure, and good placement opportunities. I had a wonderful learning experience here.",
  },
  {
    id: 2,
    name: "Priya Patel",
    avatar: "PP",
    course: "Electrical Engineering",
    year: "2022",
    rating: 4,
    review:
      "The college has excellent labs and research facilities. The faculty is knowledgeable and supportive. The placement cell is active and brings good companies to the campus.",
  },
  {
    id: 3,
    name: "Amit Kumar",
    avatar: "AK",
    course: "Mechanical Engineering",
    year: "2023",
    rating: 5,
    review:
      "I had a great experience at this college. The curriculum is well-designed and up-to-date with industry requirements. The campus life is vibrant with many extracurricular activities.",
  },
  {
    id: 4,
    name: "Sneha Gupta",
    avatar: "SG",
    course: "Information Technology",
    year: "2021",
    rating: 4,
    review:
      "The college provides a good balance of academics and extracurricular activities. The faculty is experienced and helpful. The placement record is impressive.",
  },
]

export function CollegeReviews({ collegeId }: { collegeId: string }) {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Student Reviews</h2>

      <div className="space-y-4">
        {reviewsData.map((review) => (
          <Card key={review.id}>
            <CardHeader>
              <div className="flex items-center gap-4">
                <Avatar>
                  <AvatarFallback>{review.avatar}</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-medium">{review.name}</p>
                  <p className="text-sm text-muted-foreground">
                    {review.course}, {review.year}
                  </p>
                </div>
                <div className="ml-auto flex items-center">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <StarIcon
                      key={i}
                      className={`h-4 w-4 ${i < review.rating ? "text-yellow-500 fill-yellow-500" : "text-gray-300"}`}
                    />
                  ))}
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">{review.review}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
