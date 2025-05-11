import Link from "next/link"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/40">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                Your Path to the Perfect College
              </h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                Find your ideal college, check seat availability, and complete your admission process online - all in
                one place.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link href="/colleges">
                <Button size="lg">Explore Colleges</Button>
              </Link>
              <Link href="/career-assessment">
                <Button size="lg" variant="outline">
                  Take Career Assessment
                </Button>
              </Link>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <img
              alt="College students"
              className="aspect-video overflow-hidden rounded-xl object-cover object-center"
              height="310"
              src="/placeholder.svg?height=620&width=1100"
              width="550"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
