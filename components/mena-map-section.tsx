"use client"

import { useRef, useState } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { OrbitControls, Text, Html } from "@react-three/drei"
import * as THREE from "three"
import ScrollAnimation from "./scroll-animation"
import { Button } from "@/components/ui/button"
import Link from "next/link"

// Define the countries and their positions
const countries = [
  { id: 1, name: "UAE", position: [1.5, 0, 0], labs: 8, color: "#3b82f6" },
  { id: 2, name: "KSA", position: [0, 0, 0], labs: 6, color: "#3b82f6" },
  { id: 3, name: "Jordan", position: [-1.5, 0, 0], labs: 10, color: "#3b82f6" },
  { id: 4, name: "Egypt", position: [-0.75, -1.5, 0], labs: 3, color: "#3b82f6" },
  { id: 5, name: "Qatar", position: [0.75, 1.5, 0], labs: 2, color: "#3b82f6" },
]

function CountryMarker({ name, position, labs, color, isHovered, onHover, onLeave }) {
  const markerRef = useRef()
  const [hover, setHover] = useState(false)

  useFrame(() => {
    if (markerRef.current) {
      markerRef.current.rotation.y += 0.01

      // Pulse effect when hovered
      if (isHovered) {
        markerRef.current.scale.x = THREE.MathUtils.lerp(markerRef.current.scale.x, 1.2, 0.1)
        markerRef.current.scale.y = THREE.MathUtils.lerp(markerRef.current.scale.y, 1.2, 0.1)
        markerRef.current.scale.z = THREE.MathUtils.lerp(markerRef.current.scale.z, 1.2, 0.1)
      } else {
        markerRef.current.scale.x = THREE.MathUtils.lerp(markerRef.current.scale.x, 1, 0.1)
        markerRef.current.scale.y = THREE.MathUtils.lerp(markerRef.current.scale.y, 1, 0.1)
        markerRef.current.scale.z = THREE.MathUtils.lerp(markerRef.current.scale.z, 1, 0.1)
      }
    }
  })

  return (
    <group position={position}>
      {/* Marker */}
      <mesh ref={markerRef} onPointerOver={() => onHover(name)} onPointerOut={() => onLeave()}>
        <octahedronGeometry args={[0.2, 0]} />
        <meshStandardMaterial color={color} />
      </mesh>

      {/* Country name */}
      <Text position={[0, -0.4, 0]} fontSize={0.15} color="white" anchorX="center" anchorY="middle">
        {name}
      </Text>

      {/* Info popup when hovered */}
      {isHovered && (
        <Html position={[0, 0.5, 0]} center>
          <div className="bg-background/90 backdrop-blur-sm p-2 rounded-md shadow-lg border border-primary/20 text-center w-32">
            <p className="font-bold text-sm">{name}</p>
            <p className="text-xs text-primary">{labs} Metaversity Labs</p>
          </div>
        </Html>
      )}
    </group>
  )
}

function MENAMap() {
  const [hoveredCountry, setHoveredCountry] = useState(null)

  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} />

      {/* Background sphere */}
      <mesh>
        <sphereGeometry args={[5, 32, 32]} />
        <meshStandardMaterial color="#111827" side={THREE.BackSide} />
      </mesh>

      {/* Connection lines between countries */}
      {countries.map((country, i) =>
        countries.slice(i + 1).map((otherCountry, j) => (
          <line key={`${country.id}-${otherCountry.id}`}>
            <bufferGeometry attach="geometry">
              <bufferAttribute
                attachObject={["attributes", "position"]}
                array={new Float32Array([...country.position, ...otherCountry.position])}
                count={2}
                itemSize={3}
              />
            </bufferGeometry>
            <lineBasicMaterial attach="material" color="#3b82f6" opacity={0.3} transparent />
          </line>
        )),
      )}

      {/* Country markers */}
      {countries.map((country) => (
        <CountryMarker
          key={country.id}
          name={country.name}
          position={country.position}
          labs={country.labs}
          color={country.color}
          isHovered={hoveredCountry === country.name}
          onHover={setHoveredCountry}
          onLeave={() => setHoveredCountry(null)}
        />
      ))}

      <OrbitControls
        enableZoom={false}
        enablePan={false}
        autoRotate
        autoRotateSpeed={0.5}
        minPolarAngle={Math.PI / 3}
        maxPolarAngle={Math.PI / 1.5}
      />
    </>
  )
}

export default function MENAMapSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-secondary/30 to-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollAnimation>
          <h2 className="text-3xl font-bold mb-6 text-center">Our Presence in the MENA Region</h2>
          <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
            Beyond Universe XR has established a strong network of Metaversity Labs across the Middle East and North
            Africa, empowering educational institutions with cutting-edge XR technology.
          </p>
        </ScrollAnimation>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <ScrollAnimation>
            <div className="aspect-square relative bg-black rounded-lg overflow-hidden">
              <Canvas>
                <MENAMap />
              </Canvas>
            </div>
          </ScrollAnimation>

          <ScrollAnimation delay={200}>
            <div>
              <h3 className="text-2xl font-bold mb-4">Expanding Across Borders</h3>
              <p className="text-muted-foreground mb-6">
                With 29 Metaversity Labs installed across 5 countries, we're rapidly expanding our footprint in the
                region, bringing immersive educational experiences to universities, schools, and training centers.
              </p>

              <div className="space-y-4 mb-8">
                {countries.map((country) => (
                  <div key={country.id} className="flex items-center">
                    <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary mr-4 flex-shrink-0">
                      <span className="font-bold">{country.labs}</span>
                    </div>
                    <div>
                      <h4 className="font-medium">{country.name}</h4>
                      <p className="text-muted-foreground text-sm">{country.labs} Metaversity Labs installed</p>
                    </div>
                  </div>
                ))}
              </div>

              <Button asChild>
                <Link href="/services/metaversity-labs">Learn More About Our Metaversity Labs</Link>
              </Button>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  )
}

