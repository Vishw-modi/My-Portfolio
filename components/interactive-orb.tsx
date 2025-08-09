"use client"

import { useEffect, useRef, useState } from "react"

export default function InteractiveOrb() {
  const mountRef = useRef<HTMLDivElement>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setMousePosition({
        x: (event.clientX / window.innerWidth) * 2 - 1,
        y: -(event.clientY / window.innerHeight) * 2 + 1,
      })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  useEffect(() => {
    if (typeof window === "undefined") return

    let scene: any, camera: any, renderer: any, orb: any, particles: any
    let animationId: number

    const init = async () => {
      const THREE = await import("three")

      // Scene setup
      scene = new THREE.Scene()
      camera = new THREE.PerspectiveCamera(75, 300 / 300, 0.1, 1000)
      renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true })
      renderer.setSize(300, 300)
      renderer.setClearColor(0x000000, 0)

      if (mountRef.current) {
        mountRef.current.appendChild(renderer.domElement)
      }

      // Create main orb
      const orbGeometry = new THREE.SphereGeometry(2, 32, 32)
      const orbMaterial = new THREE.MeshBasicMaterial({
        color: 0x06b6d4,
        wireframe: true,
        transparent: true,
        opacity: 0.8,
      })
      orb = new THREE.Mesh(orbGeometry, orbMaterial)
      scene.add(orb)

      // Create orbiting particles
      const particleGeometry = new THREE.SphereGeometry(0.1, 8, 8)
      const particleMaterial = new THREE.MeshBasicMaterial({
        color: 0xf59e0b,
        transparent: true,
        opacity: 0.9,
      })

      particles = []
      for (let i = 0; i < 8; i++) {
        const particle = new THREE.Mesh(particleGeometry, particleMaterial)
        const angle = (i / 8) * Math.PI * 2
        particle.position.set(Math.cos(angle) * 4, Math.sin(angle) * 4, 0)
        particles.push({ mesh: particle, angle, radius: 4 })
        scene.add(particle)
      }

      camera.position.z = 10

      // Animation
      const animate = () => {
        animationId = requestAnimationFrame(animate)

        // Rotate main orb
        orb.rotation.x += 0.01
        orb.rotation.y += 0.015

        // Animate orbiting particles
        particles.forEach((particle: any, index: number) => {
          particle.angle += 0.02 + index * 0.001
          particle.mesh.position.x = Math.cos(particle.angle) * particle.radius
          particle.mesh.position.y = Math.sin(particle.angle) * particle.radius
          particle.mesh.position.z = Math.sin(particle.angle * 2) * 1
        })

        // Mouse interaction
        orb.rotation.x += mousePosition.y * 0.01
        orb.rotation.y += mousePosition.x * 0.01

        renderer.render(scene, camera)
      }

      animate()
    }

    init()

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId)
      }
      if (mountRef.current && mountRef.current.firstChild) {
        mountRef.current.removeChild(mountRef.current.firstChild)
      }
    }
  }, [mousePosition])

  return <div ref={mountRef} className="mx-auto" />
}
