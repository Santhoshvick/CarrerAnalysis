import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Briefcase, TrendingUp, GraduationCap, DollarSign } from "lucide-react"

// Mock data - would be generated based on assessment results
const recommendedCareersData = [
  {
    id: 1,
    title: "Software Engineer",
    description: "Design, develop, and maintain software systems and applications.",
    matchPercentage: 95,
    growthOutlook: "High",
    educationRequired: "Bachelor's in Computer Science or related field",
    averageSalary: "₹8,00,000 - ₹20,00,000 per year",
    skills: ["Programming", "Problem Solving", "Algorithms", "Data Structures"],
  },
  {
    id: 2,
    title: "Data Scientist",
    description: "Analyze and interpret complex data to help organizations make better decisions.",
    matchPercentage: 90,
    growthOutlook: "Very High",
    educationRequired: "Master's in Data Science, Statistics, or related field",
    averageSalary: "₹10,00,000 - ₹25,00,000 per year",
    skills: ["Statistics", "Machine Learning", "Programming", "Data Visualization"],
  },
  {
    id: 3,
    title: "UX/UI Designer",
    description: "Create user-friendly interfaces and enhance user experience for digital products.",
    matchPercentage: 85,
    growthOutlook: "High",
    educationRequired: "Bachelor's in Design, HCI, or related field",
    averageSalary: "₹6,00,000 - ₹18,00,000 per year",
    skills: ["Design Thinking", "Wireframing", "Prototyping", "User Research"],
  },
]

export function RecommendedCareers() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Recommended Career Paths</CardTitle>
        <CardDescription>These career paths align well with your interests, skills, and values.</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {recommendedCareersData.map((career) => (
            <div key={career.id} className="border rounded-lg p-4">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-bold">{career.title}</h3>
                <Badge>{career.matchPercentage}% Match</Badge>
              </div>
              <p className="text-muted-foreground mb-4">{career.description}</p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                <div className="flex items-center gap-2">
                  <TrendingUp className="h-5 w-5 text-muted-foreground" />
                  <div>
                    <p className="text-sm text-muted-foreground">Growth Outlook</p>
                    <p className="font-medium">{career.growthOutlook}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <GraduationCap className="h-5 w-5 text-muted-foreground" />
                  <div>
                    <p className="text-sm text-muted-foreground">Education Required</p>
                    <p className="font-medium">{career.educationRequired}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <DollarSign className="h-5 w-5 text-muted-foreground" />
                  <div>
                    <p className="text-sm text-muted-foreground">Average Salary</p>
                    <p className="font-medium">{career.averageSalary}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Briefcase className="h-5 w-5 text-muted-foreground" />
                  <div>
                    <p className="text-sm text-muted-foreground">Key Skills</p>
                    <div className="flex flex-wrap gap-1 mt-1">
                      {career.skills.map((skill, index) => (
                        <Badge key={index} variant="outline">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
