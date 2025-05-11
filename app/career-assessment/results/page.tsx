import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { CareerResultsChart } from "@/components/career-results-chart"
import { RecommendedCareers } from "@/components/recommended-careers"
import { RecommendedColleges } from "@/components/recommended-colleges"

export default function CareerAssessmentResultsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <div className="container py-8">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl font-bold mb-2">Your Career Assessment Results</h1>
            <p className="text-muted-foreground mb-8">
              Based on your responses, we've analyzed your interests, skills, and values to recommend suitable career
              paths.
            </p>

            <div className="space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle>Your Career Aptitude Profile</CardTitle>
                  <CardDescription>
                    This chart shows your aptitude across different career domains based on your assessment.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-[400px]">
                    <CareerResultsChart />
                  </div>
                </CardContent>
              </Card>

              <RecommendedCareers />

              <RecommendedColleges />

              <Card>
                <CardHeader>
                  <CardTitle>Next Steps</CardTitle>
                  <CardDescription>Here's what you can do to further explore your career options.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h3 className="font-medium mb-2">1. Explore Recommended Colleges</h3>
                    <p className="text-muted-foreground">
                      Browse through our college database to find institutions that offer programs aligned with your
                      career interests.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-medium mb-2">2. Schedule Career Counseling</h3>
                    <p className="text-muted-foreground">
                      Book a one-on-one session with our career counselors to discuss your results in detail and get
                      personalized guidance.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-medium mb-2">3. Save Your Results</h3>
                    <p className="text-muted-foreground">
                      Create an account to save your assessment results and get personalized college recommendations.
                    </p>
                  </div>
                </CardContent>
                <CardFooter className="flex flex-wrap gap-4">
                  <Link href="/colleges">
                    <Button>Explore Colleges</Button>
                  </Link>
                  <Link href="/counseling">
                    <Button variant="outline">Schedule Counseling</Button>
                  </Link>
                  <Link href="/register">
                    <Button variant="outline">Create Account</Button>
                  </Link>
                </CardFooter>
              </Card>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
