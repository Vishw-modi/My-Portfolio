"use client"

import { useEffect, useRef, useState } from "react"

export default function FloatingCube() {
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

    let scene: any, camera: any, renderer: any, cube: any
    let animationId: number

    const init = async () => {
      const THREE = await import("three")

      // Scene setup
      scene = new THREE.Scene()
      camera = new THREE.PerspectiveCamera(75, 200 / 200, 0.1, 1000)
      renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true })
      renderer.setSize(200, 200)
      renderer.setClearColor(0x000000, 0)

      if (mountRef.current) {
        mountRef.current.appendChild(renderer.domElement)
      }

      // Create cube with professional colors
      const geometry = new THREE.BoxGeometry(2, 2, 2)
      const material = new THREE.MeshBasicMaterial({
        color: 0x06b6d4, // Cyan color
        wireframe: true,
        transparent: true,
        opacity: 0.8,
      })
      cube = new THREE.Mesh(geometry, material)
      scene.add(cube)

      camera.position.z = 5

      // Animation with mouse interaction
      const animate = () => {
        animationId = requestAnimationFrame(animate)

        cube.rotation.x += 0.01
        cube.rotation.y += 0.01

        // Subtle mouse interaction
        cube.rotation.x += mousePosition.y * 0.005
        cube.rotation.y += mousePosition.x * 0.005

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
