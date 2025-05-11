import Link from "next/link"
import { Button } from "@/components/ui/button"

export function CTASection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-primary text-primary-foreground">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Ready to Find Your Perfect College?</h2>
            <p className="max-w-[900px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Join thousands of students who have successfully found their ideal college and career path with Career
              Compass.
            </p>
          </div>
          <div className="flex flex-col gap-2 min-[400px]:flex-row">
            <Link href="/register">
              <Button size="lg" variant="secondary">
                Get Started
              </Button>
            </Link>
            <Link href="/colleges">
              <Button
                size="lg"
                variant="outline"
                className="bg-primary-foreground text-primary hover:bg-primary-foreground/90"
              >
                Explore Colleges
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
