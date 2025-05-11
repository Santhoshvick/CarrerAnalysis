import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function TestimonialsSection() {
  const testimonials = [
    {
      name: "Rahul Sharma",
      avatar: "RS",
      role: "Engineering Student",
      content:
        "Career Compass helped me find the perfect engineering college. The seat availability feature saved me a lot of time and stress during the admission process.",
    },
    {
      name: "Priya Patel",
      avatar: "PP",
      role: "Medical Student",
      content:
        "The career assessment tool gave me clarity about my strengths and helped me choose the right medical college. The online admission process was seamless!",
    },
    {
      name: "Amit Kumar",
      avatar: "AK",
      role: "Business Student",
      content:
        "I was confused about which business school to join. Career Compass provided detailed comparisons and helped me make an informed decision.",
    },
  ]

  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Student Success Stories</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Hear from students who found their perfect college through Career Compass
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border shadow-sm">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <Avatar>
                    <AvatarFallback>{testimonial.avatar}</AvatarFallback>
                  </Avatar>
                  <div>
                    <CardTitle className="text-lg">{testimonial.name}</CardTitle>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{testimonial.content}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
