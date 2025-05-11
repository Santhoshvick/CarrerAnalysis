// This would typically come from a database
const getCollege = (id: string) => {
  // This is a mock function that would normally fetch from a database
  return {
    id: Number.parseInt(id),
    name: "Tech University",
    tagline: "Shaping Tomorrow's Technology Leaders",
    description: "Tech University is a leading institution for technology education, offering cutting-edge programs in computer science, data science, artificial intelligence, and more. Our state-of-the-art facilities and experienced faculty provide students with the knowledge and skills needed to succeed in the rapidly evolving tech industry.",
    location: "San Francisco, CA",
    founded: 1985,
    type: "Private",
    accreditation: "National Association of Technology Education",
    images: [
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600"
    ],
    rating: 4.8,
    reviews: 520,
    seats: {
      total: 500,
      available: 120
    },
    fees: {
      tuition: "$25,000/year",
      housing: "$12,000/year",
      books: "$2,000/year"
    },
    programs: [
      {
        name: "Computer Science",
        degree: "Bachelor of Science",
        duration: "4 years",
        seats: 50,
        description: "Our Computer Science program provides a comprehensive foundation in programming, algorithms, data structures, and software engineering."
      },
      {
        name: "Data Science",
        degree: "Bachelor of Science",
        duration: "4 years",
        seats: 40,
        description: "The Data Science program combines computer science, statistics, and domain expertise to extract knowledge and insights from data."
      },
      {
        name: "Artificial Intelligence",
        degree: "Bachelor of Science",
        duration: "4 years",
        seats: 30,
        description: "Our AI program focuses on machine learning, neural networks, natural language processing, and computer vision."
      }
    ],
    facilities: [
      "State-of-the-art computer labs",
      "AI research center",
      "Innovation hub",
      "Digital library",
      "Student housing",
      "Sports complex",
      "Cafeteria",
      "Health center"
    ],
    admissionProcess: [
      "Online application submission",
      "Academic records review",
      "Entrance examination",
      "Interview (for selected candidates)",
      "Admission offer",
      "Fee payment and enrollment"
    ],
    deadlines
