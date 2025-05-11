import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

// Mock data - would be fetched from API in a real application
const faqData = [
  {
    id: "item-1",
    question: "What is the admission process for this college?",
    answer:
      "The admission process involves applying through our online portal, submitting required documents, and qualifying in the entrance examination. Shortlisted candidates will be called for counseling based on their rank.",
  },
  {
    id: "item-2",
    question: "What are the hostel facilities available?",
    answer:
      "We have separate hostels for boys and girls with modern amenities including Wi-Fi, 24/7 security, laundry services, gym, and recreation areas. Each room accommodates 2-3 students and has attached bathrooms.",
  },
  {
    id: "item-3",
    question: "What is the placement record of the college?",
    answer:
      "Our college has an excellent placement record with over 90% of eligible students getting placed. Top recruiters include Microsoft, Google, Amazon, Infosys, TCS, and many more. The average package ranges from 6-12 LPA.",
  },
  {
    id: "item-4",
    question: "Are there any scholarships available?",
    answer:
      "Yes, we offer various scholarships based on merit, sports achievements, and for economically disadvantaged students. Government scholarships are also applicable for eligible students.",
  },
  {
    id: "item-5",
    question: "What extracurricular activities are available?",
    answer:
      "We have numerous clubs and societies for cultural activities, sports, technical projects, and social service. Annual cultural and technical festivals are organized where students can showcase their talents.",
  },
  {
    id: "item-6",
    question: "Is there a dress code for students?",
    answer:
      "There is no strict dress code for regular classes, but students are expected to dress formally for presentations, seminars, and official events. For laboratory sessions, appropriate lab coats and safety gear are mandatory.",
  },
]

export function CollegeFAQ({ collegeId }: { collegeId: string }) {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Frequently Asked Questions</h2>

      <Accordion type="single" collapsible className="w-full">
        {faqData.map((faq) => (
          <AccordionItem key={faq.id} value={faq.id}>
            <AccordionTrigger>{faq.question}</AccordionTrigger>
            <AccordionContent>{faq.answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  )
}
