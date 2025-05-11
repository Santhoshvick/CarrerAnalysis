export async function POST(request: Request) {
  try {
    const data = await request.json();
    
    // In a real application, this would process the assessment data
    // and generate personalized career recommendations
    
    // Mock response with career aptitude data
    const careerAptitude = [
      { domain: "Technology", score: 85 },
      { domain: "Business", score: 65 },
      { domain: "Healthcare", score: 45 },
      { domain: "Arts & Design", score: 70 },
      { domain: "Science", score: 80 },
      { domain: "Education", score: 60 },
      { domain: "Engineering", score: 90 },
      { domain: "Social Sciences", score: 50 }
    ];
    
    // Mock recommended careers
    const recommendedCareers = [
      {
        id: 1,
        title: "Software Engineer",
        description: "Design, develop, and maintain software systems and applications.",
        matchPercentage: 95,
        growthOutlook: "High",
        educationRequired: "Bachelor's in Computer Science or related field",
        averageSalary: "₹8,00,000 - ₹20,00,000 per year",
        skills: ["Programming", "Problem Solving", "Algorithms", "Data Structures"]
      },
      {
        id: 2,
        title
