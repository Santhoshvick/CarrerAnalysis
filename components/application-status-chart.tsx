"use client"

import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

// Mock data - would be fetched from API in a real application
const applicationData = [
  { name: "Submitted", value: 1 },
  { name: "Under Review", value: 1 },
  { name: "Interview Scheduled", value: 1 },
  { name: "Accepted", value: 0 },
  { name: "Rejected", value: 0 },
]

export function ApplicationStatusChart() {
  return (
    <ChartContainer
      config={{
        Submitted: {
          label: "Submitted",
          color: "hsl(var(--chart-1))",
        },
        "Under Review": {
          label: "Under Review",
          color: "hsl(var(--chart-2))",
        },
        "Interview Scheduled": {
          label: "Interview Scheduled",
          color: "hsl(var(--chart-3))",
        },
        Accepted: {
          label: "Accepted",
          color: "hsl(var(--chart-4))",
        },
        Rejected: {
          label: "Rejected",
          color: "hsl(var(--chart-5))",
        },
      }}
      className="h-full w-full"
    >
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={applicationData}
            cx="50%"
            cy="50%"
            labelLine={false}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
            nameKey="name"
          >
            {applicationData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={`var(--color-${entry.name.replace(/\s+/g, "-").toLowerCase()})`} />
            ))}
          </Pie>
          <ChartTooltip content={<ChartTooltipContent />} />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </ChartContainer>
  )
}
