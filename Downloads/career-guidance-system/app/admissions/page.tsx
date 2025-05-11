import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Calendar,
  FileText,
  GraduationCap,
  CheckCircle,
  ClipboardList,
  CreditCard,
  Upload,
  Users,
  BookOpen,
  ArrowRight,
} from "lucide-react"

export default function AdmissionsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <section className="bg-primary text-primary-foreground py-12">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center space-y-4">
            <h1 className="text-3xl font-bold tracking-tighter">Admissions</h1>
            <p className="text-primary-foreground/90 max-w-[600px]">
              Complete your entire admission process online without any physical presence.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12">
        <div className="container px-4 md:px-6">
          <Tabs defaultValue="process" className="space-y-8">
            <TabsList className="grid w-full grid-cols-1 md:grid-cols-3">
              <TabsTrigger value="process">Admission Process</TabsTrigger>
              <TabsTrigger value="requirements">Requirements</TabsTrigger>
              <TabsTrigger value="apply">Apply Now</TabsTrigger>
            </TabsList>

            {/* Admission Process Tab */}
            <TabsContent value="process" className="space-y-8">
              <div className="max-w-3xl mx-auto">
                <h2 className="text-2xl font-bold mb-6">How Our Online Admission Process Works</h2>

                <div className="relative">
                  <div className="absolute left-4 top-0 h-full w-0.5 bg-border"></div>

                  <div className="space-y-8">
                    {[
                      {
                        title: "Create an Account",
                        description: "Register on our platform to start your application process.",
                        icon: <Users className="h-6 w-6 text-primary" />,
                      },
                      {
                        title: "Fill Application Form",
                        description: "Complete the online application form with your personal and academic details.",
                        icon: <FileText className="h-6 w-6 text-primary" />,
                      },
                      {
                        title: "Upload Documents",
                        description:
                          "Upload required documents such as academic transcripts, ID proof, and photographs.",
                        icon: <Upload className="h-6 w-6 text-primary" />,
                      },
                      {
                        title: "Pay Application Fee",
                        description: "Pay the application processing fee online through secure payment methods.",
                        icon: <CreditCard className="h-6 w-6 text-primary" />,
                      },
                      {
                        title: "Take Online Entrance Test",
                        description: "Complete the online entrance examination (if required for your program).",
                        icon: <ClipboardList className="h-6 w-6 text-primary" />,
                      },
                      {
                        title: "Virtual Interview",
                        description: "Attend a virtual interview with faculty members (for selected programs).",
                        icon: <Users className="h-6 w-6 text-primary" />,
                      },
                      {
                        title: "Admission Decision",
                        description: "Receive your admission decision through email and on your dashboard.",
                        icon: <CheckCircle className="h-6 w-6 text-primary" />,
                      },
                      {
                        title: "Accept Offer & Pay Fees",
                        description: "Accept your admission offer and pay the tuition fees to secure your seat.",
                        icon: <GraduationCap className="h-6 w-6 text-primary" />,
                      },
                    ].map((step, index) => (
                      <div key={index} className="relative pl-10">
                        <div className="absolute left-0 top-0 flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground">
                          {index + 1}
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold flex items-center gap-2">
                            {step.title}
                            {step.icon}
                          </h3>
                          <p className="text-muted-foreground mt-1">{step.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </TabsContent>

            {/* Requirements Tab */}
            <TabsContent value="requirements" className="space-y-8">
              <div className="max-w-3xl mx-auto">
                <h2 className="text-2xl font-bold mb-6">Admission Requirements</h2>

                <div className="space-y-8">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <BookOpen className="h-5 w-5 text-primary" />
                        Academic Requirements
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="space-y-2">
                        <h4 className="font-medium">Undergraduate Programs</h4>
                        <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                          <li>High school diploma or equivalent</li>
                          <li>Minimum GPA of 3.0 on a 4.0 scale</li>
                          <li>Completion of required prerequisite courses</li>
                          <li>Standardized test scores (SAT/ACT) for some programs</li>
                        </ul>
                      </div>

                      <div className="space-y-2">
                        <h4 className="font-medium">Graduate Programs</h4>
                        <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                          <li>Bachelor's degree from an accredited institution</li>
                          <li>Minimum GPA of 3.2 on a 4.0 scale</li>
                          <li>GRE/GMAT scores (program-specific)</li>
                          <li>Letters of recommendation</li>
                          <li>Statement of purpose</li>
                        </ul>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <FileText className="h-5 w-5 text-primary" />
                        Required Documents
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                        <li>Completed online application form</li>
                        <li>Official academic transcripts</li>
                        <li>Standardized test scores (if applicable)</li>
                        <li>Letters of recommendation</li>
                        <li>Personal statement or essay</li>
                        <li>Resume or curriculum vitae (for graduate programs)</li>
                        <li>Valid ID proof (passport/driver's license)</li>
                        <li>Recent passport-sized photographs</li>
                        <li>Proof of English proficiency (for international students)</li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Calendar className="h-5 w-5 text-primary" />
                        Important Dates
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <h4 className="font-medium">Fall 2025 Admission</h4>
                            <ul className="space-y-2 text-muted-foreground">
                              <li className="flex justify-between">
                                <span>Early Decision Deadline:</span>
                                <span className="font-medium">November 1, 2024</span>
                              </li>
                              <li className="flex justify-between">
                                <span>Regular Decision Deadline:</span>
                                <span className="font-medium">January 15, 2025</span>
                              </li>
                              <li className="flex justify-between">
                                <span>Decision Notification:</span>
                                <span className="font-medium">March 31, 2025</span>
                              </li>
                              <li className="flex justify-between">
                                <span>Enrollment Deadline:</span>
                                <span className="font-medium">May 1, 2025</span>
                              </li>
                            </ul>
                          </div>

                          <div className="space-y-2">
                            <h4 className="font-medium">Spring 2026 Admission</h4>
                            <ul className="space-y-2 text-muted-foreground">
                              <li className="flex justify-between">
                                <span>Application Deadline:</span>
                                <span className="font-medium">October 1, 2025</span>
                              </li>
                              <li className="flex justify-between">
                                <span>Decision Notification:</span>
                                <span className="font-medium">November 15, 2025</span>
                              </li>
                              <li className="flex justify-between">
                                <span>Enrollment Deadline:</span>
                                <span className="font-medium">December 1, 2025</span>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>

            {/* Apply Now Tab */}
            <TabsContent value="apply" className="space-y-8">
              <div className="max-w-3xl mx-auto">
                <h2 className="text-2xl font-bold mb-6">Start Your Application</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card className="card-hover">
                    <CardHeader>
                      <CardTitle>Undergraduate Application</CardTitle>
                      <CardDescription>For first-time college students and transfers</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 text-muted-foreground">
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-primary" />
                          Application Fee: $50
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-primary" />
                          Processing Time: 2-3 weeks
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-primary" />
                          Fall 2025 Applications Open
                        </li>
                      </ul>
                    </CardContent>
                    <CardFooter>
                      <Button className="w-full" asChild>
                        <Link href="/admissions/apply/undergraduate">
                          Apply Now
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </CardFooter>
                  </Card>

                  <Card className="card-hover">
                    <CardHeader>
                      <CardTitle>Graduate Application</CardTitle>
                      <CardDescription>For master's and doctoral programs</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 text-muted-foreground">
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-primary" />
                          Application Fee: $75
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-primary" />
                          Processing Time: 4-6 weeks
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-primary" />
                          Fall 2025 Applications Open
                        </li>
                      </ul>
                    </CardContent>
                    <CardFooter>
                      <Button className="w-full" asChild>
                        <Link href="/admissions/apply/graduate">
                          Apply Now
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </CardFooter>
                  </Card>
                </div>

                <div className="mt-8 p-6 bg-muted rounded-lg">
                  <h3 className="text-lg font-semibold mb-4">Need Assistance?</h3>
                  <p className="text-muted-foreground mb-4">
                    Our admission counselors are available to help you with your application process. Schedule a virtual
                    consultation or contact us directly.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button variant="outline">Schedule Consultation</Button>
                    <Button variant="outline">Contact Admissions Office</Button>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center space-y-4 mb-8">
            <h2 className="text-2xl font-bold">Frequently Asked Questions</h2>
            <p className="text-muted-foreground max-w-[600px]">
              Find answers to common questions about our admission process.
            </p>
          </div>

          <div className="max-w-3xl mx-auto grid gap-4">
            {[
              {
                question: "Can I apply to multiple programs simultaneously?",
                answer:
                  "Yes, you can apply to up to three programs in a single application cycle. However, you will need to pay a separate application fee for each program.",
              },
              {
                question: "How can I check my application status?",
                answer:
                  "You can check your application status by logging into your applicant portal. All updates regarding your application will be available there.",
              },
              {
                question: "Are there any application fee waivers available?",
                answer:
                  "Yes, application fee waivers are available for eligible students based on financial need. You can request a fee waiver during the application process.",
              },
              {
                question: "What if I can't take the online entrance test due to technical issues?",
                answer:
                  "If you experience technical issues during the online entrance test, please contact our technical support immediately. We can reschedule your test if necessary.",
              },
              {
                question: "How long does it take to receive an admission decision?",
                answer:
                  "For undergraduate programs, decisions are typically made within 2-3 weeks after all required documents are received. For graduate programs, it may take 4-6 weeks.",
              },
            ].map((faq, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-lg">{faq.question}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
