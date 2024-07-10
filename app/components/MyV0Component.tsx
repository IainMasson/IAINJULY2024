/**
 * v0 by Vercel.
 * @see https://v0.dev/t/bGPcA8ep48q
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
"use client"

import { useState } from "react"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Slider } from "@/components/ui/slider"

export default function Component() {
  const [temperature, setTemperature] = useState(70)
  return (
    <Card className="w-full max-w-md">
      <CardHeader className="flex items-center gap-4">
        <ThermometerIcon className="w-8 h-8" />
        <CardTitle>Temperature Control</CardTitle>
      </CardHeader>
      <CardContent className="grid gap-6">
        <div className="flex items-center justify-between">
          <span className="text-2xl font-semibold">{temperature}°F</span>
          <Slider
            value={[temperature]}
            onValueChange={setTemperature}
            min={50}
            max={90}
            step={1}
            className="w-[200px]"
          />
        </div>
        <p className="text-muted-foreground">Adjust the temperature to your desired setting.</p>
      </CardContent>
    </Card>
  )
}

function ThermometerIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M14 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z" />
    </svg>
  )
}
