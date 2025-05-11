import { Colleges } from "@/components/colleges"
import { CollegeFilters } from "@/components/college-filters"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export default function CollegesPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <div className="container py-8">
          <h1 className="text-3xl font-bold mb-6">Find Colleges</h1>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="md:col-span-1">
              <CollegeFilters />
            </div>
            <div className="md:col-span-3">
              <Colleges />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
