"use client"

import { RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, ResponsiveContainer } from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

// Mock data - would be generated based on assessment results
const careerAptitudeData = [
  { domain: "Technology", score: 85 },
  { domain: "Business", score: 65 },
  { domain: "Healthcare", score: 45 },
  { domain: "Arts & Design", score: 70 },
  { domain: "Science", score: 80 },
  { domain: "Education", score: 60 },
  { domain: "Engineering", score: 90 },
  { domain: "Social Sciences", score: 50 },
]

export function CareerResultsChart() {
  return (
    <ChartContainer
      config={{
        score: {
          label: "Aptitude Score",
          color: "hsl(var(--chart-1))",
        },
      }}
      className="h-full w-full"
    >
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart data={careerAptitudeData} margin={{ top: 20, right: 30, bottom: 20, left: 30 }}>
          <PolarGrid />
          <PolarAngleAxis dataKey="domain" />
          <PolarRadiusAxis angle={30} domain={[0, 100]} />
          <ChartTooltip content={<ChartTooltipContent />} />
          <Radar
            name="Aptitude Score"
            dataKey="score"
            stroke="var(--color-score)"
            fill="var(--color-score)"
            fillOpacity={0.6}
          />
        </RadarChart>
      </ResponsiveContainer>
    </ChartContainer>
  )
}
