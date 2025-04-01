"use client"

import { useEffect, useRef } from "react"
import ScrollAnimation from "./scroll-animation"
import { Card } from "@/components/ui/card"
import {
  Chart,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartLegend,
  ChartLegendItem,
} from "@/components/ui/chart"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Area, AreaChart } from "recharts"

// Data for the charts
const demandData = [
  { year: 2020, xr: 20, metaverse: 10, ai: 30 },
  { year: 2021, xr: 35, metaverse: 25, ai: 45 },
  { year: 2022, xr: 55, metaverse: 45, ai: 65 },
  { year: 2023, xr: 70, metaverse: 65, ai: 80 },
  { year: 2024, xr: 85, metaverse: 80, ai: 90 },
  { year: 2025, xr: 95, metaverse: 90, ai: 98 },
]

const marketShareData = [
  { name: "XR Education", value: 35 },
  { name: "XR Healthcare", value: 25 },
  { name: "XR Entertainment", value: 20 },
  { name: "XR Business", value: 15 },
  { name: "Other", value: 5 },
]

const growthData = [
  { year: 2020, growth: 10 },
  { year: 2021, growth: 25 },
  { year: 2022, growth: 45 },
  { year: 2023, growth: 70 },
  { year: 2024, growth: 100 },
]

export default function DemandChartSection() {
  const chartRef = useRef(null)

  useEffect(() => {
    const handleScroll = () => {
      if (!chartRef.current) return

      const rect = chartRef.current.getBoundingClientRect()
      const isVisible = rect.top < window.innerHeight && rect.bottom > 0

      if (isVisible) {
        chartRef.current.classList.add("animate-in")
      }
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll() // Check on initial load

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <section className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollAnimation>
          <h2 className="text-3xl font-bold mb-6 text-center">Rising Demand for Immersive Technologies</h2>
          <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
            The MENA region is experiencing unprecedented growth in demand for XR, Metaverse, and AI technologies in
            education and business.
          </p>
        </ScrollAnimation>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <ScrollAnimation>
            <Card className="p-6">
              <h3 className="text-xl font-bold mb-4">Technology Adoption Growth</h3>
              <p className="text-muted-foreground mb-6">
                Year-over-year growth in adoption of immersive technologies across the MENA region.
              </p>
              <div className="h-80" ref={chartRef}>
                <ChartContainer>
                  <Chart>
                    <ResponsiveContainer width="100%" height="100%">
                      <LineChart data={demandData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                        <CartesianGrid strokeDasharray="3 3" stroke="rgba(100, 116, 139, 0.2)" />
                        <XAxis dataKey="year" stroke="currentColor" fontSize={12} tickLine={false} axisLine={false} />
                        <YAxis
                          stroke="currentColor"
                          fontSize={12}
                          tickLine={false}
                          axisLine={false}
                          tickFormatter={(value) => `${value}%`}
                        />
                        <ChartTooltip
                          content={({ active, payload, label }) => {
                            if (active && payload && payload.length) {
                              return (
                                <ChartTooltipContent>
                                  <div className="font-medium">{label}</div>
                                  {payload.map((p) => (
                                    <div key={p.dataKey} className="flex items-center justify-between gap-2">
                                      <div className="flex items-center gap-1">
                                        <div className="rounded-full w-2 h-2" style={{ backgroundColor: p.color }} />
                                        <span className="capitalize">{p.dataKey}</span>
                                      </div>
                                      <div className="font-medium">{p.value}%</div>
                                    </div>
                                  ))}
                                </ChartTooltipContent>
                              )
                            }
                            return null
                          }}
                        />
                        <Line
                          type="monotone"
                          dataKey="xr"
                          stroke="#3b82f6"
                          strokeWidth={2}
                          dot={{ r: 4 }}
                          activeDot={{ r: 6 }}
                        />
                        <Line
                          type="monotone"
                          dataKey="metaverse"
                          stroke="#8b5cf6"
                          strokeWidth={2}
                          dot={{ r: 4 }}
                          activeDot={{ r: 6 }}
                        />
                        <Line
                          type="monotone"
                          dataKey="ai"
                          stroke="#10b981"
                          strokeWidth={2}
                          dot={{ r: 4 }}
                          activeDot={{ r: 6 }}
                        />
                      </LineChart>
                    </ResponsiveContainer>
                  </Chart>
                  <ChartLegend>
                    <ChartLegendItem color="#3b82f6" label="XR Technology" />
                    <ChartLegendItem color="#8b5cf6" label="Metaverse" />
                    <ChartLegendItem color="#10b981" label="AI Solutions" />
                  </ChartLegend>
                </ChartContainer>
              </div>
            </Card>
          </ScrollAnimation>

          <ScrollAnimation delay={200}>
            <Card className="p-6">
              <h3 className="text-xl font-bold mb-4">Market Growth Projection</h3>
              <p className="text-muted-foreground mb-6">
                Projected growth of the immersive technology market in the MENA region (indexed to 2024 = 100).
              </p>
              <div className="h-80">
                <ChartContainer>
                  <Chart>
                    <ResponsiveContainer width="100%" height="100%">
                      <AreaChart data={growthData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                        <CartesianGrid strokeDasharray="3 3" stroke="rgba(100, 116, 139, 0.2)" />
                        <XAxis dataKey="year" stroke="currentColor" fontSize={12} tickLine={false} axisLine={false} />
                        <YAxis
                          stroke="currentColor"
                          fontSize={12}
                          tickLine={false}
                          axisLine={false}
                          tickFormatter={(value) => `${value}`}
                        />
                        <ChartTooltip
                          content={({ active, payload, label }) => {
                            if (active && payload && payload.length) {
                              return (
                                <ChartTooltipContent>
                                  <div className="font-medium">{label}</div>
                                  <div className="flex items-center justify-between gap-2">
                                    <div className="flex items-center gap-1">
                                      <div className="rounded-full w-2 h-2" style={{ backgroundColor: "#3b82f6" }} />
                                      <span>Growth Index</span>
                                    </div>
                                    <div className="font-medium">{payload[0].value}</div>
                                  </div>
                                </ChartTooltipContent>
                              )
                            }
                            return null
                          }}
                        />
                        <defs>
                          <linearGradient id="growthGradient" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.8} />
                            <stop offset="95%" stopColor="#3b82f6" stopOpacity={0.1} />
                          </linearGradient>
                        </defs>
                        <Area
                          type="monotone"
                          dataKey="growth"
                          stroke="#3b82f6"
                          fill="url(#growthGradient)"
                          strokeWidth={2}
                          dot={{ r: 4 }}
                          activeDot={{ r: 6 }}
                        />
                      </AreaChart>
                    </ResponsiveContainer>
                  </Chart>
                </ChartContainer>
              </div>
            </Card>
          </ScrollAnimation>
        </div>

        <ScrollAnimation>
          <Card className="p-6">
            <h3 className="text-xl font-bold mb-4">XR Technology Applications in MENA</h3>
            <p className="text-muted-foreground mb-6">
              Distribution of XR technology applications across different sectors in the MENA region.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="h-64">
                <ChartContainer>
                  <Chart>
                    <ResponsiveContainer width="100%" height="100%">
                      <LineChart data={marketShareData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                        <CartesianGrid strokeDasharray="3 3" stroke="rgba(100, 116, 139, 0.2)" />
                        <XAxis dataKey="name" stroke="currentColor" fontSize={12} tickLine={false} axisLine={false} />
                        <YAxis
                          stroke="currentColor"
                          fontSize={12}
                          tickLine={false}
                          axisLine={false}
                          tickFormatter={(value) => `${value}%`}
                        />
                        <ChartTooltip
                          content={({ active, payload, label }) => {
                            if (active && payload && payload.length) {
                              return (
                                <ChartTooltipContent>
                                  <div className="font-medium">{label}</div>
                                  <div className="flex items-center justify-between gap-2">
                                    <div className="flex items-center gap-1">
                                      <div className="rounded-full w-2 h-2" style={{ backgroundColor: "#3b82f6" }} />
                                      <span>Market Share</span>
                                    </div>
                                    <div className="font-medium">{payload[0].value}%</div>
                                  </div>
                                </ChartTooltipContent>
                              )
                            }
                            return null
                          }}
                        />
                        <Line
                          type="monotone"
                          dataKey="value"
                          stroke="#3b82f6"
                          strokeWidth={2}
                          dot={{ r: 4 }}
                          activeDot={{ r: 6 }}
                        />
                      </LineChart>
                    </ResponsiveContainer>
                  </Chart>
                </ChartContainer>
              </div>

              <div className="space-y-4">
                {marketShareData.map((item) => (
                  <div key={item.name} className="flex items-center">
                    <div
                      className="w-4 h-4 rounded-full mr-3 flex-shrink-0"
                      style={{
                        backgroundColor: "#3b82f6",
                        opacity: item.value / 100 + 0.3,
                      }}
                    ></div>
                    <div className="flex-grow">
                      <div className="flex justify-between items-center mb-1">
                        <span className="font-medium">{item.name}</span>
                        <span className="text-sm text-muted-foreground">{item.value}%</span>
                      </div>
                      <div className="w-full bg-secondary rounded-full h-2">
                        <div className="bg-primary h-2 rounded-full" style={{ width: `${item.value}%` }}></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Card>
        </ScrollAnimation>
      </div>
    </section>
  )
}

