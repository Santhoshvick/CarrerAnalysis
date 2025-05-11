import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { CareerAssessmentForm } from "@/components/career-assessment-form"

export default function CareerAssessmentPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <div className="container py-8">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-3xl font-bold mb-2">Career Assessment</h1>
            <p className="text-muted-foreground mb-8">
              Discover career paths that match your skills, interests, and aptitude by completing this assessment.
            </p>

            <CareerAssessmentForm />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
