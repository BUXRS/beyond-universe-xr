import type * as React from "react"

const Chart = ({ children }: { children: React.ReactNode }) => {
  return <div className="chart">{children}</div>
}

const ChartContainer = ({ children }: { children: React.ReactNode }) => {
  return <div className="chart-container">{children}</div>
}

const ChartTooltip = ({ children }: { children: React.ReactNode }) => {
  return <div className="chart-tooltip">{children}</div>
}

const ChartTooltipContent = ({ children }: { children: React.ReactNode }) => {
  return <div className="chart-tooltip-content">{children}</div>
}

const ChartLegend = ({ children }: { children: React.ReactNode }) => {
  return <div className="chart-legend">{children}</div>
}

const ChartLegendItem = ({ color, label }: { color: string; label: string }) => {
  return (
    <div className="chart-legend-item">
      <span className="chart-legend-item-color" style={{ backgroundColor: color }}></span>
      <span className="chart-legend-item-label">{label}</span>
    </div>
  )
}

export { Chart, ChartContainer, ChartTooltip, ChartTooltipContent, ChartLegend, ChartLegendItem }

