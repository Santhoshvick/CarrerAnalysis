import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ApplicationForm } from "@/components/application-form"

export default function NewApplicationPage({
  searchParams,
}: {
  searchParams: { collegeId?: string }
}) {
  const collegeId = searchParams.collegeId

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <div className="container py-8">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-3xl font-bold mb-2">College Application</h1>
            <p className="text-muted-foreground mb-8">
              Complete the form below to apply for admission. Make sure to provide accurate information.
            </p>

            <ApplicationForm collegeId={collegeId} />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
