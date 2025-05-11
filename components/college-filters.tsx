"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"

export function CollegeFilters() {
  const [priceRange, setPriceRange] = useState([0, 1000000])

  return (
    <div className="space-y-6 p-4 border rounded-lg">
      <div>
        <h3 className="text-lg font-medium mb-4">Filters</h3>
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="search">Search</Label>
            <Input id="search" placeholder="Search colleges..." />
          </div>

          <div className="space-y-2">
            <Label>Location</Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select location" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Locations</SelectItem>
                <SelectItem value="mumbai">Mumbai</SelectItem>
                <SelectItem value="delhi">Delhi</SelectItem>
                <SelectItem value="bangalore">Bangalore</SelectItem>
                <SelectItem value="chennai">Chennai</SelectItem>
                <SelectItem value="kolkata">Kolkata</SelectItem>
                <SelectItem value="pune">Pune</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label>Course</Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select course" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Courses</SelectItem>
                <SelectItem value="cs">Computer Science</SelectItem>
                <SelectItem value="ee">Electrical Engineering</SelectItem>
                <SelectItem value="me">Mechanical Engineering</SelectItem>
                <SelectItem value="it">Information Technology</SelectItem>
                <SelectItem value="business">Business Administration</SelectItem>
                <SelectItem value="medicine">Medicine</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label>Fee Range</Label>
            <div className="pt-2">
              <Slider defaultValue={[0, 1000000]} max={1000000} step={10000} onValueChange={setPriceRange} />
              <div className="flex justify-between mt-2 text-sm text-muted-foreground">
                <span>₹{priceRange[0].toLocaleString()}</span>
                <span>₹{priceRange[1].toLocaleString()}</span>
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <Label>Availability</Label>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Checkbox id="seats-available" />
                <label
                  htmlFor="seats-available"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Seats Available
                </label>
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <Label>College Type</Label>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Checkbox id="government" />
                <label
                  htmlFor="government"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Government
                </label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="private" />
                <label
                  htmlFor="private"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Private
                </label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="deemed" />
                <label
                  htmlFor="deemed"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Deemed
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Button className="w-full">Apply Filters</Button>
    </div>
  )
}
