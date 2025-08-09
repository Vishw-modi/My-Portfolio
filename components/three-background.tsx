"use client"

import { useEffect, useRef } from "react"

export default function ThreeBackground() {
  const mountRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (typeof window === "undefined") return

    let scene: any, camera: any, renderer: any, particles: any
    let animationId: number

    const init = async () => {
      const THREE = await import("three")

      // Scene setup
      scene = new THREE.Scene()
      camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
      renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true })
      renderer.setSize(window.innerWidth, window.innerHeight)
      renderer.setClearColor(0x000000, 0)

      if (mountRef.current) {
        mountRef.current.appendChild(renderer.domElement)
      }

      // Create simple particle system
      const particlesGeometry = new THREE.BufferGeometry()
      const particlesCount = 3000
      const posArray = new Float32Array(particlesCount * 3)
      const colorArray = new Float32Array(particlesCount * 3)

      for (let i = 0; i < particlesCount * 3; i += 3) {
        // Position
        posArray[i] = (Math.random() - 0.5) * 1500
        posArray[i + 1] = (Math.random() - 0.5) * 1500
        posArray[i + 2] = (Math.random() - 0.5) * 1500

        // Color - professional blue/cyan gradient
        const colorChoice = Math.random()
        if (colorChoice < 0.6) {
          // Cyan
          colorArray[i] = 0.0
          colorArray[i + 1] = 0.7
          colorArray[i + 2] = 1.0
        } else {
          // Blue
          colorArray[i] = 0.2
          colorArray[i + 1] = 0.5
          colorArray[i + 2] = 1.0
        }
      }

      particlesGeometry.setAttribute("position", new THREE.BufferAttribute(posArray, 3))
      particlesGeometry.setAttribute("color", new THREE.BufferAttribute(colorArray, 3))

      const particlesMaterial = new THREE.PointsMaterial({
        size: 2,
        vertexColors: true,
        transparent: true,
        opacity: 0.6,
        blending: THREE.AdditiveBlending,
      })

      particles = new THREE.Points(particlesGeometry, particlesMaterial)
      scene.add(particles)

      camera.position.z = 100

      // Simple animation
      const animate = () => {
        animationId = requestAnimationFrame(animate)

        particles.rotation.x += 0.0002
        particles.rotation.y += 0.0003

        renderer.render(scene, camera)
      }

      animate()

      // Handle resize
      const handleResize = () => {
        camera.aspect = window.innerWidth / window.innerHeight
        camera.updateProjectionMatrix()
        renderer.setSize(window.innerWidth, window.innerHeight)
      }

      window.addEventListener("resize", handleResize)

      return () => {
        window.removeEventListener("resize", handleResize)
        if (animationId) {
          cancelAnimationFrame(animationId)
        }
        if (mountRef.current && renderer.domElement) {
          mountRef.current.removeChild(renderer.domElement)
        }
        renderer.dispose()
      }
    }

    init()

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId)
      }
    }
  }, [])

  return <div ref={mountRef} className="fixed inset-0 -z-10" />
}
