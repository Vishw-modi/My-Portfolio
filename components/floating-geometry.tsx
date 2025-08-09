"use client"

import { useEffect, useRef } from "react"

export default function FloatingGeometry() {
  const mountRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (typeof window === "undefined") return

    let scene: any,
      camera: any,
      renderer: any,
      shapes: any[] = []
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

      // Create various geometric shapes
      const geometries = [
        new THREE.IcosahedronGeometry(15),
        new THREE.DodecahedronGeometry(12),
        new THREE.OctahedronGeometry(18),
        new THREE.TetrahedronGeometry(20),
      ]

      const colors = [0x06b6d4, 0x3b82f6, 0xf59e0b, 0x10b981]

      for (let i = 0; i < 15; i++) {
        const geometry = geometries[Math.floor(Math.random() * geometries.length)]
        const material = new THREE.MeshBasicMaterial({
          color: colors[Math.floor(Math.random() * colors.length)],
          wireframe: true,
          transparent: true,
          opacity: 0.2,
        })

        const shape = new THREE.Mesh(geometry, material)
        shape.position.set((Math.random() - 0.5) * 800, (Math.random() - 0.5) * 600, (Math.random() - 0.5) * 400)
        shape.rotation.set(Math.random() * Math.PI, Math.random() * Math.PI, Math.random() * Math.PI)

        shapes.push({
          mesh: shape,
          rotationSpeed: {
            x: (Math.random() - 0.5) * 0.02,
            y: (Math.random() - 0.5) * 0.02,
            z: (Math.random() - 0.5) * 0.02,
          },
          floatSpeed: Math.random() * 0.02 + 0.01,
          floatRange: Math.random() * 100 + 50,
          initialY: shape.position.y,
        })

        scene.add(shape)
      }

      camera.position.z = 200

      // Animation
      const animate = () => {
        animationId = requestAnimationFrame(animate)

        shapes.forEach((shapeData, index) => {
          const { mesh, rotationSpeed, floatSpeed, floatRange, initialY } = shapeData

          mesh.rotation.x += rotationSpeed.x
          mesh.rotation.y += rotationSpeed.y
          mesh.rotation.z += rotationSpeed.z

          mesh.position.y = initialY + Math.sin(Date.now() * floatSpeed + index) * floatRange
        })

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

  return <div ref={mountRef} className="absolute inset-0 pointer-events-none" />
}
