"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Progress } from "@/components/ui/progress"

// Mock assessment questions
const assessmentQuestions = [
  {
    section: "Interests",
    questions: [
      {
        id: "q1",
        question: "I enjoy solving complex problems and puzzles.",
        options: [
          { value: "1", label: "Strongly Disagree" },
          { value: "2", label: "Disagree" },
          { value: "3", label: "Neutral" },
          { value: "4", label: "Agree" },
          { value: "5", label: "Strongly Agree" },
        ],
      },
      {
        id: "q2",
        question: "I like working with numbers and data.",
        options: [
          { value: "1", label: "Strongly Disagree" },
          { value: "2", label: "Disagree" },
          { value: "3", label: "Neutral" },
          { value: "4", label: "Agree" },
          { value: "5", label: "Strongly Agree" },
        ],
      },
      {
        id: "q3",
        question: "I enjoy creative activities like writing, art, or design.",
        options: [
          { value: "1", label: "Strongly Disagree" },
          { value: "2", label: "Disagree" },
          { value: "3", label: "Neutral" },
          { value: "4", label: "Agree" },
          { value: "5", label: "Strongly Agree" },
        ],
      },
    ],
  },
  {
    section: "Skills",
    questions: [
      {
        id: "q4",
        question: "I am good at analyzing information and making decisions.",
        options: [
          { value: "1", label: "Strongly Disagree" },
          { value: "2", label: "Disagree" },
          { value: "3", label: "Neutral" },
          { value: "4", label: "Agree" },
          { value: "5", label: "Strongly Agree" },
        ],
      },
      {
        id: "q5",
        question: "I communicate effectively with others.",
        options: [
          { value: "1", label: "Strongly Disagree" },
          { value: "2", label: "Disagree" },
          { value: "3", label: "Neutral" },
          { value: "4", label: "Agree" },
          { value: "5", label: "Strongly Agree" },
        ],
      },
      {
        id: "q6",
        question: "I am good at organizing and planning.",
        options: [
          { value: "1", label: "Strongly Disagree" },
          { value: "2", label: "Disagree" },
          { value: "3", label: "Neutral" },
          { value: "4", label: "Agree" },
          { value: "5", label: "Strongly Agree" },
        ],
      },
    ],
  },
  {
    section: "Values",
    questions: [
      {
        id: "q7",
        question: "Work-life balance is important to me.",
        options: [
          { value: "1", label: "Strongly Disagree" },
          { value: "2", label: "Disagree" },
          { value: "3", label: "Neutral" },
          { value: "4", label: "Agree" },
          { value: "5", label: "Strongly Agree" },
        ],
      },
      {
        id: "q8",
        question: "I value job security and stability.",
        options: [
          { value: "1", label: "Strongly Disagree" },
          { value: "2", label: "Disagree" },
          { value: "3", label: "Neutral" },
          { value: "4", label: "Agree" },
          { value: "5", label: "Strongly Agree" },
        ],
      },
      {
        id: "q9",
        question: "I prefer working in a team rather than independently.",
        options: [
          { value: "1", label: "Strongly Disagree" },
          { value: "2", label: "Disagree" },
          { value: "3", label: "Neutral" },
          { value: "4", label: "Agree" },
          { value: "5", label: "Strongly Agree" },
        ],
      },
    ],
  },
  {
    section: "Additional Information",
    questions: [
      {
        id: "q10",
        question: "What are your favorite subjects in school?",
        type: "text",
      },
      {
        id: "q11",
        question: "What are your hobbies and extracurricular activities?",
        type: "text",
      },
      {
        id: "q12",
        question: "What careers are you currently interested in?",
        type: "text",
      },
    ],
  },
]

export function CareerAssessmentForm() {
  const router = useRouter()
  const [currentSection, setCurrentSection] = useState(0)
  const [answers, setAnswers] = useState<Record<string, string>>({})
  const [progress, setProgress] = useState(0)

  const totalSections = assessmentQuestions.length

  const handleNext = () => {
    if (currentSection < totalSections - 1) {
      setCurrentSection(currentSection + 1)
      setProgress(((currentSection + 1) / totalSections) * 100)
    } else {
      // Submit the assessment
      handleSubmit()
    }
  }

  const handlePrevious = () => {
    if (currentSection > 0) {
      setCurrentSection(currentSection - 1)
      setProgress(((currentSection - 1) / totalSections) * 100)
    }
  }

  const handleAnswerChange = (questionId: string, value: string) => {
    setAnswers({
      ...answers,
      [questionId]: value,
    })
  }

  const handleSubmit = () => {
    // In a real application, this would send the data to the server
    console.log("Assessment answers:", answers)

    // Navigate to results page
    router.push("/career-assessment/results")
  }

  const currentQuestions = assessmentQuestions[currentSection].questions
  const sectionTitle = assessmentQuestions[currentSection].section

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <div className="flex justify-between items-center">
          <p className="text-sm text-muted-foreground">
            Section {currentSection + 1} of {totalSections}: {sectionTitle}
          </p>
          <p className="text-sm text-muted-foreground">{Math.round(progress)}% Complete</p>
        </div>
        <Progress value={progress} className="h-2" />
      </div>

      <Card>
        <CardHeader>
          <CardTitle>{sectionTitle}</CardTitle>
          <CardDescription>
            Please answer the following questions honestly to get accurate career recommendations.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {currentQuestions.map((q) => (
            <div key={q.id} className="space-y-3">
              <h3 className="font-medium">{q.question}</h3>

              {q.type === "text" ? (
                <Textarea
                  id={q.id}
                  value={answers[q.id] || ""}
                  onChange={(e) => handleAnswerChange(q.id, e.target.value)}
                  placeholder="Type your answer here..."
                  className="min-h-[100px]"
                />
              ) : (
                <RadioGroup value={answers[q.id] || ""} onValueChange={(value) => handleAnswerChange(q.id, value)}>
                  {q.options?.map((option) => (
                    <div key={option.value} className="flex items-center space-x-2">
                      <RadioGroupItem value={option.value} id={`${q.id}-${option.value}`} />
                      <Label htmlFor={`${q.id}-${option.value}`}>{option.label}</Label>
                    </div>
                  ))}
                </RadioGroup>
              )}
            </div>
          ))}
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button variant="outline" onClick={handlePrevious} disabled={currentSection === 0}>
            Previous
          </Button>
          <Button onClick={handleNext}>{currentSection === totalSections - 1 ? "Submit" : "Next"}</Button>
        </CardFooter>
      </Card>
    </div>
  )
}
