"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { toast } from "@/components/ui/use-toast"

export function ApplicationForm({ collegeId }: { collegeId?: string }) {
  const router = useRouter()
  const [activeTab, setActiveTab] = useState("personal")
  const [progress, setProgress] = useState(25)

  const handleTabChange = (value: string) => {
    setActiveTab(value)

    // Update progress based on tab
    switch (value) {
      case "personal":
        setProgress(25)
        break
      case "academic":
        setProgress(50)
        break
      case "course":
        setProgress(75)
        break
      case "documents":
        setProgress(100)
        break
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // In a real application, this would submit the form data to the server
    toast({
      title: "Application Submitted",
      description: "Your application has been submitted successfully. You will receive a confirmation email shortly.",
    })

    // Redirect to application confirmation page
    router.push("/application/confirmation")
  }

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <div className="flex justify-between items-center">
          <p className="text-sm text-muted-foreground">Application Progress</p>
          <p className="text-sm text-muted-foreground">{progress}% Complete</p>
        </div>
        <Progress value={progress} className="h-2" />
      </div>

      <form onSubmit={handleSubmit}>
        <Tabs value={activeTab} onValueChange={handleTabChange}>
          <TabsList className="grid grid-cols-4 mb-6">
            <TabsTrigger value="personal">Personal</TabsTrigger>
            <TabsTrigger value="academic">Academic</TabsTrigger>
            <TabsTrigger value="course">Course</TabsTrigger>
            <TabsTrigger value="documents">Documents</TabsTrigger>
          </TabsList>

          <TabsContent value="personal">
            <Card>
              <CardHeader>
                <CardTitle>Personal Information</CardTitle>
                <CardDescription>Provide your personal details for the application.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name</Label>
                    <Input id="firstName" placeholder="Enter your first name" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input id="lastName" placeholder="Enter your last name" required />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="Enter your email" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" placeholder="Enter your phone number" required />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="dob">Date of Birth</Label>
                    <Input id="dob" type="date" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="gender">Gender</Label>
                    <Select>
                      <SelectTrigger id="gender">
                        <SelectValue placeholder="Select gender" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="male">Male</SelectItem>
                        <SelectItem value="female">Female</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                        <SelectItem value="prefer-not-to-say">Prefer not to say</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="address">Address</Label>
                  <Textarea id="address" placeholder="Enter your full address" required />
                </div>
              </CardContent>
              <CardFooter className="flex justify-end">
                <Button type="button" onClick={() => handleTabChange("academic")}>
                  Next: Academic Information
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>

          <TabsContent value="academic">
            <Card>
              <CardHeader>
                <CardTitle>Academic Information</CardTitle>
                <CardDescription>Provide details about your educational background.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="highSchool">High School / 10th</Label>
                  <Input id="highSchool" placeholder="Name of school" required />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="highSchoolBoard">Board</Label>
                    <Select>
                      <SelectTrigger id="highSchoolBoard">
                        <SelectValue placeholder="Select board" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="cbse">CBSE</SelectItem>
                        <SelectItem value="icse">ICSE</SelectItem>
                        <SelectItem value="state">State Board</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="highSchoolPercentage">Percentage / CGPA</Label>
                    <Input id="highSchoolPercentage" placeholder="Enter percentage or CGPA" required />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="higherSecondary">Higher Secondary / 12th</Label>
                  <Input id="higherSecondary" placeholder="Name of school/college" required />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="higherSecondaryBoard">Board</Label>
                    <Select>
                      <SelectTrigger id="higherSecondaryBoard">
                        <SelectValue placeholder="Select board" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="cbse">CBSE</SelectItem>
                        <SelectItem value="icse">ISC</SelectItem>
                        <SelectItem value="state">State Board</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="higherSecondaryPercentage">Percentage / CGPA</Label>
                    <Input id="higherSecondaryPercentage" placeholder="Enter percentage or CGPA" required />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="stream">Stream</Label>
                    <Select>
                      <SelectTrigger id="stream">
                        <SelectValue placeholder="Select stream" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="science">Science (PCM)</SelectItem>
                        <SelectItem value="commerce">Commerce</SelectItem>
                        <SelectItem value="arts">Arts</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="yearOfPassing">Year of Passing</Label>
                    <Input id="yearOfPassing" placeholder="Enter year" required />
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button type="button" variant="outline" onClick={() => handleTabChange("personal")}>
                  Previous: Personal Information
                </Button>
                <Button type="button" onClick={() => handleTabChange("course")}>
                  Next: Course Selection
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>

          <TabsContent value="course">
            <Card>
              <CardHeader>
                <CardTitle>Course Selection</CardTitle>
                <CardDescription>Select the course you want to apply for.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="course">Course</Label>
                  <Select>
                    <SelectTrigger id="course">
                      <SelectValue placeholder="Select course" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="cse">Computer Science Engineering</SelectItem>
                      <SelectItem value="it">Information Technology</SelectItem>
                      <SelectItem value="ece">Electronics & Communication</SelectItem>
                      <SelectItem value="me">Mechanical Engineering</SelectItem>
                      <SelectItem value="ce">Civil Engineering</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="specialization">Specialization (Optional)</Label>
                  <Select>
                    <SelectTrigger id="specialization">
                      <SelectValue placeholder="Select specialization" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="ai">Artificial Intelligence</SelectItem>
                      <SelectItem value="ds">Data Science</SelectItem>
                      <SelectItem value="cs">Cyber Security</SelectItem>
                      <SelectItem value="iot">Internet of Things</SelectItem>
                      <SelectItem value="none">None</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="entranceExam">Entrance Exam</Label>
                  <Select>
                    <SelectTrigger id="entranceExam">
                      <SelectValue placeholder="Select entrance exam" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="jee">JEE Main</SelectItem>
                      <SelectItem value="jee-adv">JEE Advanced</SelectItem>
                      <SelectItem value="state-cet">State CET</SelectItem>
                      <SelectItem value="none">None</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="examRoll">Exam Roll Number</Label>
                  <Input id="examRoll" placeholder="Enter exam roll number" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="examScore">Exam Score / Rank</Label>
                  <Input id="examScore" placeholder="Enter score or rank" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="statement">Statement of Purpose</Label>
                  <Textarea
                    id="statement"
                    placeholder="Why do you want to join this course? (Max 500 words)"
                    className="min-h-[150px]"
                  />
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button type="button" variant="outline" onClick={() => handleTabChange("academic")}>
                  Previous: Academic Information
                </Button>
                <Button type="button" onClick={() => handleTabChange("documents")}>
                  Next: Documents
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>

          <TabsContent value="documents">
            <Card>
              <CardHeader>
                <CardTitle>Documents Upload</CardTitle>
                <CardDescription>Upload the required documents for your application.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="photo">Passport Size Photo</Label>
                  <Input id="photo" type="file" accept="image/*" required />
                  <p className="text-xs text-muted-foreground">
                    Upload a recent passport size photo (JPEG/PNG, max 1MB)
                  </p>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="idProof">ID Proof</Label>
                  <Input id="idProof" type="file" accept="image/*, application/pdf" required />
                  <p className="text-xs text-muted-foreground">
                    Upload Aadhar Card, PAN Card, or Passport (JPEG/PNG/PDF, max 2MB)
                  </p>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="marksheet10">10th Marksheet</Label>
                  <Input id="marksheet10" type="file" accept="image/*, application/pdf" required />
                  <p className="text-xs text-muted-foreground">Upload 10th class marksheet (JPEG/PNG/PDF, max 2MB)</p>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="marksheet12">12th Marksheet</Label>
                  <Input id="marksheet12" type="file" accept="image/*, application/pdf" required />
                  <p className="text-xs text-muted-foreground">Upload 12th class marksheet (JPEG/PNG/PDF, max 2MB)</p>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="entranceResult">Entrance Exam Result</Label>
                  <Input id="entranceResult" type="file" accept="image/*, application/pdf" />
                  <p className="text-xs text-muted-foreground">
                    Upload entrance exam result/scorecard (JPEG/PNG/PDF, max 2MB)
                  </p>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="otherDocs">Other Documents (Optional)</Label>
                  <Input id="otherDocs" type="file" accept="image/*, application/pdf" multiple />
                  <p className="text-xs text-muted-foreground">
                    Upload any additional documents (JPEG/PNG/PDF, max 5MB total)
                  </p>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button type="button" variant="outline" onClick={() => handleTabChange("course")}>
                  Previous: Course Selection
                </Button>
                <Button type="submit">Submit Application</Button>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
      </form>
    </div>
  )
}
