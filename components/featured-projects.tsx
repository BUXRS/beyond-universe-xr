"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"
import ScrollAnimation from "./scroll-animation"

interface Project {
  id: number
  title: string
  partner: string
  description: string
  image: string
}

const projects: Project[] = [
  {
    id: 1,
    title: "XR Medical Lab",
    partner: "RAK Medical University",
    description: "State-of-the-art XR lab for medical students to practice procedures in a virtual environment.",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: 2,
    title: "Engineering Metaverse",
    partner: "University of Jordan",
    description: "Virtual engineering lab allowing students to conduct experiments and simulations safely.",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: 3,
    title: "Weather Visualization",
    partner: "ArabiaWeather",
    description: "3D weather visualization platform for enhanced weather forecasting and presentation.",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: 4,
    title: "Defense Training",
    partner: "JODDB",
    description: "Virtual training environments for defense personnel using advanced XR technology.",
    image: "/placeholder.svg?height=400&width=600",
  },
]

export default function FeaturedProjects() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === projects.length - 1 ? 0 : prevIndex + 1))
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? projects.length - 1 : prevIndex - 1))
  }

  return (
    <div className="py-16 bg-secondary/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollAnimation>
          <h2 className="text-3xl font-bold mb-12 text-center">Featured Projects</h2>
        </ScrollAnimation>

        <div className="relative">
          <Button
            variant="outline"
            size="icon"
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-background/80 backdrop-blur-sm"
            onClick={prevSlide}
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>

          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {projects.map((project) => (
                <div key={project.id} className="w-full flex-shrink-0 px-4">
                  <Card className="overflow-hidden">
                    <div className="aspect-video relative">
                      <img
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        className="object-cover w-full h-full"
                      />
                    </div>
                    <CardContent className="p-6">
                      <div className="text-sm text-primary font-medium mb-2">{project.partner}</div>
                      <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                      <p className="text-muted-foreground">{project.description}</p>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          <Button
            variant="outline"
            size="icon"
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-background/80 backdrop-blur-sm"
            onClick={nextSlide}
          >
            <ChevronRight className="h-6 w-6" />
          </Button>
        </div>

        <div className="flex justify-center mt-6">
          {projects.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 mx-1 rounded-full ${index === currentIndex ? "bg-primary" : "bg-primary/30"}`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

