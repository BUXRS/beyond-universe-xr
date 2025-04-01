"use client"

import { useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import ScrollAnimation from "@/components/scroll-animation"
import Link from "next/link"
import { CuboidIcon as Cube, School, BookOpen, Laptop, HardDrive, Users } from "lucide-react"

export default function MetaversityLabsPage() {
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
            <h1 className="text-4xl font-bold mb-6">Metaversity Labs</h1>
            <p className="text-xl text-muted-foreground max-w-3xl">
              Immersive XR laboratories designed to transform education through cutting-edge technology and interactive
              learning experiences.
            </p>
          </ScrollAnimation>
        </div>
      </section>

      {/* What is Metaversity Labs */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <ScrollAnimation>
              <div>
                <h2 className="text-3xl font-bold mb-6">What is Metaversity Labs?</h2>
                <p className="text-muted-foreground mb-4">
                  Metaversity Labs is our flagship educational solution that combines virtual reality, augmented
                  reality, and mixed reality technologies to create immersive learning environments for educational
                  institutions.
                </p>
                <p className="text-muted-foreground mb-4">
                  Our labs are designed to enhance student engagement, improve learning outcomes, and prepare the next
                  generation for the digital future through hands-on experiences with cutting-edge technology.
                </p>
                <p className="text-muted-foreground mb-6">
                  Each Metaversity Lab is customized to meet the specific needs of the institution, whether it's a
                  university, school, or corporate training center.
                </p>
                <Button asChild>
                  <Link href="/contact">Request a Demo</Link>
                </Button>
              </div>
            </ScrollAnimation>

            <ScrollAnimation delay={200}>
              <div className="aspect-video bg-primary/10 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <p className="text-muted-foreground mb-4">Interactive 3D Demo Coming Soon</p>
                  <p className="font-medium">Experience Metaversity Labs in action</p>
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Our Solutions */}
      <section className="py-16 bg-secondary/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation>
            <h2 className="text-3xl font-bold mb-12 text-center">Our Solutions</h2>
          </ScrollAnimation>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ScrollAnimation delay={100}>
              <Card className="h-full">
                <CardContent className="p-6 flex flex-col h-full">
                  <div className="text-primary mb-4 w-12 h-12 flex items-center justify-center rounded-full bg-primary/10">
                    <School className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">University XR Labs</h3>
                  <p className="text-muted-foreground mb-4 flex-grow">
                    Comprehensive XR labs for universities, featuring high-end VR headsets, AR devices, and specialized
                    software for various disciplines including medicine, engineering, and architecture.
                  </p>
                  <Button asChild variant="outline" className="mt-auto">
                    <Link href="/contact">Learn More</Link>
                  </Button>
                </CardContent>
              </Card>
            </ScrollAnimation>

            <ScrollAnimation delay={200}>
              <Card className="h-full">
                <CardContent className="p-6 flex flex-col h-full">
                  <div className="text-primary mb-4 w-12 h-12 flex items-center justify-center rounded-full bg-primary/10">
                    <BookOpen className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">School XR Labs</h3>
                  <p className="text-muted-foreground mb-4 flex-grow">
                    Age-appropriate XR labs for K-12 schools, designed to make learning fun and interactive while
                    introducing students to future technologies.
                  </p>
                  <Button asChild variant="outline" className="mt-auto">
                    <Link href="/contact">Learn More</Link>
                  </Button>
                </CardContent>
              </Card>
            </ScrollAnimation>

            <ScrollAnimation delay={300}>
              <Card className="h-full">
                <CardContent className="p-6 flex flex-col h-full">
                  <div className="text-primary mb-4 w-12 h-12 flex items-center justify-center rounded-full bg-primary/10">
                    <Cube className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">XR Curriculum</h3>
                  <p className="text-muted-foreground mb-4 flex-grow">
                    Comprehensive curriculum packages including Metaverse 101/102 courses, designed to teach students
                    about immersive technologies and their applications.
                  </p>
                  <Button asChild variant="outline" className="mt-auto">
                    <Link href="/contact">Learn More</Link>
                  </Button>
                </CardContent>
              </Card>
            </ScrollAnimation>

            <ScrollAnimation delay={400}>
              <Card className="h-full">
                <CardContent className="p-6 flex flex-col h-full">
                  <div className="text-primary mb-4 w-12 h-12 flex items-center justify-center rounded-full bg-primary/10">
                    <Laptop className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">XR Diplomas</h3>
                  <p className="text-muted-foreground mb-4 flex-grow">
                    Specialized diploma programs in XR development, design, and implementation, preparing students for
                    careers in the growing immersive technology industry.
                  </p>
                  <Button asChild variant="outline" className="mt-auto">
                    <Link href="/contact">Learn More</Link>
                  </Button>
                </CardContent>
              </Card>
            </ScrollAnimation>

            <ScrollAnimation delay={500}>
              <Card className="h-full">
                <CardContent className="p-6 flex flex-col h-full">
                  <div className="text-primary mb-4 w-12 h-12 flex items-center justify-center rounded-full bg-primary/10">
                    <HardDrive className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Hardware & Software Stack</h3>
                  <p className="text-muted-foreground mb-4 flex-grow">
                    Curated selection of the latest XR hardware and software, tailored to the specific needs of each
                    educational institution.
                  </p>
                  <Button asChild variant="outline" className="mt-auto">
                    <Link href="/contact">Learn More</Link>
                  </Button>
                </CardContent>
              </Card>
            </ScrollAnimation>

            <ScrollAnimation delay={600}>
              <Card className="h-full">
                <CardContent className="p-6 flex flex-col h-full">
                  <div className="text-primary mb-4 w-12 h-12 flex items-center justify-center rounded-full bg-primary/10">
                    <Users className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Training & Support</h3>
                  <p className="text-muted-foreground mb-4 flex-grow">
                    Comprehensive training programs for faculty and staff, along with ongoing technical support to
                    ensure the successful implementation of XR technologies.
                  </p>
                  <Button asChild variant="outline" className="mt-auto">
                    <Link href="/contact">Learn More</Link>
                  </Button>
                </CardContent>
              </Card>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation>
            <h2 className="text-3xl font-bold mb-12 text-center">Our Partners</h2>
          </ScrollAnimation>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ScrollAnimation delay={100}>
              <Card>
                <CardContent className="p-6">
                  <div className="aspect-video bg-secondary flex items-center justify-center mb-4">
                    <p className="font-medium">University of Jordan</p>
                  </div>
                  <h3 className="text-xl font-bold mb-2">University of Jordan</h3>
                  <p className="text-muted-foreground">
                    Pioneering partner in implementing Metaversity Labs for engineering and medical education.
                  </p>
                </CardContent>
              </Card>
            </ScrollAnimation>

            <ScrollAnimation delay={200}>
              <Card>
                <CardContent className="p-6">
                  <div className="aspect-video bg-secondary flex items-center justify-center mb-4">
                    <p className="font-medium">RAK Medical University</p>
                  </div>
                  <h3 className="text-xl font-bold mb-2">RAK Medical University</h3>
                  <p className="text-muted-foreground">
                    Utilizing XR technology to revolutionize medical training and simulation.
                  </p>
                </CardContent>
              </Card>
            </ScrollAnimation>

            <ScrollAnimation delay={300}>
              <Card>
                <CardContent className="p-6">
                  <div className="aspect-video bg-secondary flex items-center justify-center mb-4">
                    <p className="font-medium">JODDB</p>
                  </div>
                  <h3 className="text-xl font-bold mb-2">JODDB</h3>
                  <p className="text-muted-foreground">
                    Implementing specialized XR training solutions for defense and security applications.
                  </p>
                </CardContent>
              </Card>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <ScrollAnimation>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">25+</div>
                <p className="text-lg opacity-90">Labs Installed</p>
              </div>
            </ScrollAnimation>

            <ScrollAnimation delay={100}>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">10,000+</div>
                <p className="text-lg opacity-90">Students Trained</p>
              </div>
            </ScrollAnimation>

            <ScrollAnimation delay={200}>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">15+</div>
                <p className="text-lg opacity-90">Educational Partners</p>
              </div>
            </ScrollAnimation>

            <ScrollAnimation delay={300}>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">5</div>
                <p className="text-lg opacity-90">Countries</p>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollAnimation>
            <h2 className="text-3xl font-bold mb-6">Ready to Transform Education?</h2>
            <p className="text-xl mb-8 text-muted-foreground max-w-2xl mx-auto">
              Contact us today to learn how Metaversity Labs can revolutionize learning at your institution.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <Link href="/contact">Request a Consultation</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/contact">Download Brochure</Link>
              </Button>
            </div>
          </ScrollAnimation>
        </div>
      </section>
    </>
  )
}

