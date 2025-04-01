"use client"

import { useEffect } from "react"
import ScrollAnimation from "@/components/scroll-animation"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function AboutPage() {
  useEffect(() => {
    // Add padding to body to account for fixed navbar
    document.body.style.paddingTop = "4rem"

    return () => {
      document.body.style.paddingTop = "0"
    }
  }, [])

  return (
    <>
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation>
            <h1 className="text-4xl font-bold mb-6">About Beyond Universe XR</h1>
            <p className="text-xl text-muted-foreground max-w-3xl">
              Leading the future of immersive technologies in the MENA region through innovation, education, and
              strategic partnerships.
            </p>
          </ScrollAnimation>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <ScrollAnimation>
              <div>
                <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
                <p className="text-muted-foreground mb-6">
                  To be the leading provider of immersive technology solutions in the MENA region, transforming
                  education, business, and entertainment through innovative XR, Metaverse, Web3, and AI technologies.
                </p>
                <div className="h-1 w-20 bg-primary"></div>
              </div>
            </ScrollAnimation>

            <ScrollAnimation delay={200}>
              <div>
                <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
                <p className="text-muted-foreground mb-6">
                  To empower organizations and individuals with cutting-edge immersive technologies that enhance
                  learning, productivity, and creativity, while fostering a culture of innovation and digital
                  transformation across the MENA region.
                </p>
                <div className="h-1 w-20 bg-primary"></div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Company Timeline */}
      <section className="py-16 bg-secondary/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation>
            <h2 className="text-3xl font-bold mb-12 text-center">Our Journey</h2>
          </ScrollAnimation>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-primary/30"></div>

            {/* Timeline Items */}
            <div className="space-y-24 relative">
              <ScrollAnimation>
                <div className="flex flex-col md:flex-row items-center">
                  <div className="md:w-1/2 md:pr-12 md:text-right">
                    <h3 className="text-xl font-bold mb-2">2018</h3>
                    <h4 className="text-lg font-medium mb-3">Company Founded</h4>
                    <p className="text-muted-foreground">
                      Beyond Universe XR Solutions was established with a vision to transform education and business
                      through immersive technologies.
                    </p>
                  </div>
                  <div className="mx-auto md:mx-0 my-4 md:my-0 w-10 h-10 rounded-full bg-primary flex items-center justify-center z-10">
                    <span className="text-white font-bold">1</span>
                  </div>
                  <div className="md:w-1/2 md:pl-12 md:text-left"></div>
                </div>
              </ScrollAnimation>

              <ScrollAnimation>
                <div className="flex flex-col md:flex-row items-center">
                  <div className="md:w-1/2 md:pr-12 md:text-right"></div>
                  <div className="mx-auto md:mx-0 my-4 md:my-0 w-10 h-10 rounded-full bg-primary flex items-center justify-center z-10">
                    <span className="text-white font-bold">2</span>
                  </div>
                  <div className="md:w-1/2 md:pl-12 md:text-left">
                    <h3 className="text-xl font-bold mb-2">2020</h3>
                    <h4 className="text-lg font-medium mb-3">First Metaversity Lab</h4>
                    <p className="text-muted-foreground">
                      Launched our first Metaversity Lab at the University of Jordan, setting the foundation for our
                      educational XR solutions.
                    </p>
                  </div>
                </div>
              </ScrollAnimation>

              <ScrollAnimation>
                <div className="flex flex-col md:flex-row items-center">
                  <div className="md:w-1/2 md:pr-12 md:text-right">
                    <h3 className="text-xl font-bold mb-2">2021</h3>
                    <h4 className="text-lg font-medium mb-3">Expansion to UAE</h4>
                    <p className="text-muted-foreground">
                      Established our regional headquarters in Dubai to better serve the growing demand for immersive
                      technologies in the Gulf region.
                    </p>
                  </div>
                  <div className="mx-auto md:mx-0 my-4 md:my-0 w-10 h-10 rounded-full bg-primary flex items-center justify-center z-10">
                    <span className="text-white font-bold">3</span>
                  </div>
                  <div className="md:w-1/2 md:pl-12 md:text-left"></div>
                </div>
              </ScrollAnimation>

              <ScrollAnimation>
                <div className="flex flex-col md:flex-row items-center">
                  <div className="md:w-1/2 md:pr-12 md:text-right"></div>
                  <div className="mx-auto md:mx-0 my-4 md:my-0 w-10 h-10 rounded-full bg-primary flex items-center justify-center z-10">
                    <span className="text-white font-bold">4</span>
                  </div>
                  <div className="md:w-1/2 md:pl-12 md:text-left">
                    <h3 className="text-xl font-bold mb-2">2022</h3>
                    <h4 className="text-lg font-medium mb-3">Launch of Scan 4 3D</h4>
                    <p className="text-muted-foreground">
                      Initiated the Scan 4 3D project to build the world's largest academic 3D asset library,
                      revolutionizing access to 3D educational resources.
                    </p>
                  </div>
                </div>
              </ScrollAnimation>

              <ScrollAnimation>
                <div className="flex flex-col md:flex-row items-center">
                  <div className="md:w-1/2 md:pr-12 md:text-right">
                    <h3 className="text-xl font-bold mb-2">2023</h3>
                    <h4 className="text-lg font-medium mb-3">Web3 & AI Integration</h4>
                    <p className="text-muted-foreground">
                      Expanded our service offerings to include Web3 and AI solutions, providing comprehensive digital
                      transformation services to our clients.
                    </p>
                  </div>
                  <div className="mx-auto md:mx-0 my-4 md:my-0 w-10 h-10 rounded-full bg-primary flex items-center justify-center z-10">
                    <span className="text-white font-bold">5</span>
                  </div>
                  <div className="md:w-1/2 md:pl-12 md:text-left"></div>
                </div>
              </ScrollAnimation>

              <ScrollAnimation>
                <div className="flex flex-col md:flex-row items-center">
                  <div className="md:w-1/2 md:pr-12 md:text-right"></div>
                  <div className="mx-auto md:mx-0 my-4 md:my-0 w-10 h-10 rounded-full bg-primary flex items-center justify-center z-10">
                    <span className="text-white font-bold">6</span>
                  </div>
                  <div className="md:w-1/2 md:pl-12 md:text-left">
                    <h3 className="text-xl font-bold mb-2">2024</h3>
                    <h4 className="text-lg font-medium mb-3">Saudi Arabia Expansion</h4>
                    <p className="text-muted-foreground">
                      Opened operations in Riyadh to support Saudi Vision 2030 initiatives and the growing demand for
                      immersive technologies in the Kingdom.
                    </p>
                  </div>
                </div>
              </ScrollAnimation>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation>
            <h2 className="text-3xl font-bold mb-12 text-center">Our Leadership</h2>
          </ScrollAnimation>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ScrollAnimation>
              <div className="text-center">
                <div className="w-40 h-40 rounded-full bg-secondary mx-auto mb-4 overflow-hidden">
                  <img src="/placeholder.svg?height=160&width=160" alt="CEO" className="w-full h-full object-cover" />
                </div>
                <h3 className="text-xl font-bold">Ahmed Al-Mansour</h3>
                <p className="text-primary font-medium mb-2">Founder & CEO</p>
                <p className="text-muted-foreground">
                  Visionary leader with 15+ years of experience in technology and education.
                </p>
              </div>
            </ScrollAnimation>

            <ScrollAnimation delay={100}>
              <div className="text-center">
                <div className="w-40 h-40 rounded-full bg-secondary mx-auto mb-4 overflow-hidden">
                  <img src="/placeholder.svg?height=160&width=160" alt="CTO" className="w-full h-full object-cover" />
                </div>
                <h3 className="text-xl font-bold">Sarah Khalid</h3>
                <p className="text-primary font-medium mb-2">Chief Technology Officer</p>
                <p className="text-muted-foreground">
                  Technology innovator specializing in XR development and AI integration.
                </p>
              </div>
            </ScrollAnimation>

            <ScrollAnimation delay={200}>
              <div className="text-center">
                <div className="w-40 h-40 rounded-full bg-secondary mx-auto mb-4 overflow-hidden">
                  <img src="/placeholder.svg?height=160&width=160" alt="COO" className="w-full h-full object-cover" />
                </div>
                <h3 className="text-xl font-bold">Omar Nasser</h3>
                <p className="text-primary font-medium mb-2">Chief Operations Officer</p>
                <p className="text-muted-foreground">
                  Operations expert with a background in scaling technology companies across MENA.
                </p>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollAnimation>
            <h2 className="text-3xl font-bold mb-6">Join Our Journey</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
              Partner with Beyond Universe XR Solutions to be at the forefront of the immersive technology revolution in
              the MENA region.
            </p>
            <Button asChild size="lg" variant="secondary" className="text-primary">
              <Link href="/contact">Get in Touch</Link>
            </Button>
          </ScrollAnimation>
        </div>
      </section>
    </>
  )
}

