import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle } from "lucide-react"

export default function ApplicationConfirmationPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <div className="container py-12">
          <div className="max-w-3xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <div className="rounded-full bg-primary/10 p-3">
                <CheckCircle className="h-12 w-12 text-primary" />
              </div>
            </div>

            <h1 className="text-3xl font-bold mb-2">Application Submitted Successfully!</h1>
            <p className="text-muted-foreground mb-8">Your application has been received and is being processed.</p>

            <Card>
              <CardHeader>
                <CardTitle>Application Details</CardTitle>
                <CardDescription>Please save your application ID for future reference.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between items-center p-3 bg-muted rounded-md">
                  <span className="font-medium">Application ID</span>
                  <span className="font-bold">APP-2025-12345</span>
                </div>

                <div className="text-left space-y-4">
                  <div>
                    <h3 className="font-medium mb-2">Next Steps</h3>
                    <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                      <li>You will receive a confirmation email with your application details.</li>
                      <li>The college will review your application and documents.</li>
                      <li>You may be contacted for an interview or additional information.</li>
                      <li>Check your application status regularly for updates.</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-medium mb-2">Important Dates</h3>
                    <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                      <li>Application Review: 7-10 working days</li>
                      <li>Interview Notification: By June 15, 2025</li>
                      <li>Final Decision: By June 30, 2025</li>
                      <li>Fee Payment Deadline: July 15, 2025</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/dashboard/applications">
                  <Button>Track Application</Button>
                </Link>
                <Link href="/">
                  <Button variant="outline">Back to Home</Button>
                </Link>
              </CardFooter>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
