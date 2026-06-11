"use client"

import { Float, MeshDistortMaterial } from "@react-three/drei"
import { Canvas, useFrame } from "@react-three/fiber"
import { useRef } from "react"
import type { Mesh } from "three"

import { useReducedMotionPreference } from "./use-reduced-motion"

function Orb({ reducedMotion }: { reducedMotion: boolean }) {
  const meshRef = useRef<Mesh>(null)

  useFrame((state, delta) => {
    if (!meshRef.current || reducedMotion) return
    meshRef.current.rotation.x += delta * 0.08
    meshRef.current.rotation.y += delta * 0.12
    meshRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.55) * 0.08
  })

  return (
    <Float speed={reducedMotion ? 0 : 1.2} rotationIntensity={0.25} floatIntensity={0.35}>
      <mesh ref={meshRef} scale={1.65}>
        <icosahedronGeometry args={[1, 12]} />
        <MeshDistortMaterial
          color="#7667ff"
          distort={reducedMotion ? 0.12 : 0.38}
          metalness={0.15}
          roughness={0.2}
          speed={reducedMotion ? 0 : 1.4}
        />
      </mesh>
    </Float>
  )
}

export function AmbientOrb({ className }: { className?: string }) {
  const reducedMotion = useReducedMotionPreference()

  return (
    <div className={className} aria-hidden="true" data-testid="ambient-orb">
      <Canvas
        camera={{ fov: 40, position: [0, 0, 5] }}
        dpr={[1, 1.5]}
        fallback={<div className="h-full w-full rounded-full bg-violet-500/20 blur-3xl" />}
        gl={{ alpha: true, antialias: true, powerPreference: "high-performance" }}
      >
        <ambientLight intensity={1.4} />
        <directionalLight color="#d8d3ff" intensity={3} position={[2, 3, 4]} />
        <pointLight color="#4dd8ff" intensity={20} position={[-3, -2, 2]} />
        <Orb reducedMotion={reducedMotion} />
      </Canvas>
    </div>
  )
}
