"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import ScrollAnimation from "./scroll-animation"

export default function ParallaxStorySection() {
  const containerRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  // Parallax effects for different elements
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100])
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -200])
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -300])
  const opacity1 = useTransform(scrollYProgress, [0, 0.3, 0.6], [0, 1, 0])
  const opacity2 = useTransform(scrollYProgress, [0.2, 0.5, 0.8], [0, 1, 0])
  const opacity3 = useTransform(scrollYProgress, [0.4, 0.7, 1], [0, 1, 0])
  const scale1 = useTransform(scrollYProgress, [0, 0.3], [0.8, 1])
  const scale2 = useTransform(scrollYProgress, [0.2, 0.5], [0.8, 1])
  const scale3 = useTransform(scrollYProgress, [0.4, 0.7], [0.8, 1])

  return (
    <div ref={containerRef} className="relative py-32 overflow-hidden bg-gradient-to-b from-background to-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollAnimation>
          <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">
            Transforming the Future of <span className="text-primary">Education & Business</span>
          </h2>
        </ScrollAnimation>

        {/* First Parallax Section */}
        <div className="min-h-[50vh] flex flex-col md:flex-row items-center mb-32">
          <motion.div className="md:w-1/2 mb-8 md:mb-0 md:pr-8" style={{ y: y1, opacity: opacity1, scale: scale1 }}>
            <h3 className="text-2xl md:text-3xl font-bold mb-4">Immersive Learning Experiences</h3>
            <p className="text-muted-foreground mb-6">
              Our Metaversity Labs create immersive educational environments that transform how students learn complex
              subjects. By leveraging XR technologies, we make abstract concepts tangible and interactive.
            </p>
            <div className="h-1 w-20 bg-primary"></div>
          </motion.div>

          <motion.div
            className="md:w-1/2 bg-primary/10 rounded-lg overflow-hidden"
            style={{ y: y1, opacity: opacity1, scale: scale1 }}
          >
            <div className="aspect-video relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-24 h-24 rounded-full bg-primary/20 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-primary/40 flex items-center justify-center">
                    <div className="w-8 h-8 rounded-full bg-primary"></div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Second Parallax Section */}
        <div className="min-h-[50vh] flex flex-col md:flex-row-reverse items-center mb-32">
          <motion.div className="md:w-1/2 mb-8 md:mb-0 md:pl-8" style={{ y: y2, opacity: opacity2, scale: scale2 }}>
            <h3 className="text-2xl md:text-3xl font-bold mb-4">Building the Digital Future</h3>
            <p className="text-muted-foreground mb-6">
              Our Web3 and AI solutions are helping organizations across the MENA region prepare for the next generation
              of digital experiences. From smart contracts to custom AI implementations, we're building the
              infrastructure of tomorrow.
            </p>
            <div className="h-1 w-20 bg-primary"></div>
          </motion.div>

          <motion.div
            className="md:w-1/2 bg-primary/10 rounded-lg overflow-hidden"
            style={{ y: y2, opacity: opacity2, scale: scale2 }}
          >
            <div className="aspect-video relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="grid grid-cols-3 grid-rows-3 gap-2">
                  {[...Array(9)].map((_, i) => (
                    <div
                      key={i}
                      className="w-8 h-8 bg-primary/20 rounded-md"
                      style={{
                        animation: `pulse ${1 + i * 0.2}s infinite alternate`,
                        opacity: 0.3 + i * 0.1,
                      }}
                    ></div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Third Parallax Section */}
        <div className="min-h-[50vh] flex flex-col md:flex-row items-center">
          <motion.div className="md:w-1/2 mb-8 md:mb-0 md:pr-8" style={{ y: y3, opacity: opacity3, scale: scale3 }}>
            <h3 className="text-2xl md:text-3xl font-bold mb-4">Preserving Cultural Heritage</h3>
            <p className="text-muted-foreground mb-6">
              Through our Scan 4 3D initiative, we're creating the world's largest academic 3D asset library, with a
              special focus on preserving and digitizing cultural artifacts from across the MENA region for future
              generations.
            </p>
            <div className="h-1 w-20 bg-primary"></div>
          </motion.div>

          <motion.div
            className="md:w-1/2 bg-primary/10 rounded-lg overflow-hidden"
            style={{ y: y3, opacity: opacity3, scale: scale3 }}
          >
            <div className="aspect-video relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-32 h-32">
                  <div className="absolute inset-0 border-4 border-primary/30 rounded-lg transform rotate-45"></div>
                  <div className="absolute inset-4 border-4 border-primary/50 rounded-lg transform rotate-[30deg]"></div>
                  <div className="absolute inset-8 border-4 border-primary/70 rounded-lg transform rotate-[15deg]"></div>
                  <div className="absolute inset-12 border-4 border-primary rounded-lg"></div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

