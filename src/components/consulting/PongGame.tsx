import React, { useEffect, useRef, JSX } from "react"
import * as THREE from "three"

interface PongGameProps {
  color1?: number
  color2?: number
}


const PongGame = ({ color1=0xFFBCAA, color2=0x4645D1 }: PongGameProps): JSX.Element => {
  const mountRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    // Scene, camera, renderer
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    )
    const renderer = new THREE.WebGLRenderer({ antialias: true })
    renderer.setClearColor(color1) // Set background color

    if (mountRef.current) {
      renderer.setSize(mountRef.current.clientWidth, mountRef.current.clientHeight)
      renderer.shadowMap.enabled = true // Enable shadow mapping
      mountRef.current.appendChild(renderer.domElement)
    }

    // Paddle dimensions
    const paddleWidth = 0.5
    const paddleHeight = 2.5
    const paddleDepth = 0.5

    // Ball dimensions
    const ballRadius = 0.3

    // Paddles
    const paddleGeometry = new THREE.BoxGeometry(paddleWidth, paddleHeight, paddleDepth)
    const paddleMaterial = new THREE.MeshPhysicalMaterial({
      color: color2,
      opacity: 0.3,
      metalness: 0.4,
      roughness: 0.3,
      clearcoat: 1.0,
      clearcoatRoughness: 0.05,
    })

    const playerPaddle = new THREE.Mesh(paddleGeometry, paddleMaterial)
    playerPaddle.position.set(-8, 0, 0)
    playerPaddle.castShadow = true
    playerPaddle.receiveShadow = true

    const aiPaddle = new THREE.Mesh(paddleGeometry, paddleMaterial)
    aiPaddle.position.set(8, 0, 0)
    aiPaddle.castShadow = true
    aiPaddle.receiveShadow = true

    // Ball
    const ballGeometry = new THREE.SphereGeometry(ballRadius, 64, 64)
    const ballMaterial = new THREE.MeshPhysicalMaterial({
      color: color2,
      metalness: 0.4,
      roughness: 0.3,
      clearcoat: 1.0,
      clearcoatRoughness: 0.05,
    })
    const ball = new THREE.Mesh(ballGeometry, ballMaterial)
    ball.position.set(0, 0, 0)
    ball.castShadow = true

    // Add objects to scene
    // Wireframe floor
    const floorGeometry = new THREE.PlaneGeometry(20, 10, 10, 10)
    const floorMaterial = new THREE.MeshBasicMaterial({
      color: color2,
      wireframe: true,
      opacity: 0.3,
    })
    const floor = new THREE.Mesh(floorGeometry, floorMaterial)
    floor.rotation.x = -Math.PI / 2
    floor.position.set(0, -0.5, 0)
    scene.add(floor)
    scene.add(playerPaddle)
    scene.add(aiPaddle)
    scene.add(ball)

    // Lights
    const rectLight = new THREE.RectAreaLight(0xffffff, 3, 20, 10)
    rectLight.position.set(0, 5, 5)
    rectLight.lookAt(0, 0, 0)
    scene.add(rectLight)

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.3)
    scene.add(ambientLight)

    // Remove environment map setup
    scene.background = null
    scene.environment = null

    // Adjust camera position for a 3D perspective
    camera.position.set(0, 2, 10) // Zoomed in slightly closer
    camera.lookAt(0, 0, 0)

    // Movement variables
    const ballSpeed = { x: 0.1, y: 0.1 }
    const paddleSpeed = 0.25

    const playerReadyToMove = true
    const aiReadyToMove = true
    const reactionDelay = 300 // Delay in milliseconds before paddle starts moving

    // Resize handler
    const updateRendererSize = () => {
      if (mountRef.current) {
        const width = mountRef.current.clientWidth
        const height = mountRef.current.clientHeight
        renderer.setSize(width, height)
        camera.aspect = width / height
        camera.updateProjectionMatrix()
      }
    }

    const onWindowResize = () => {
      updateRendererSize()
    }
    window.addEventListener(`resize`, onWindowResize)
    updateRendererSize() // Ensure proper scaling during initialization

    // Game loop
    const animate = () => {
      requestAnimationFrame(animate)

      // Ball movement
      ball.position.x += ballSpeed.x
      ball.position.y += ballSpeed.y

      // Ball collision with top, bottom walls, and floor
      if (ball.position.y - ballRadius < floor.position.y + 0.01) {
        ball.position.y = floor.position.y + ballRadius // Prevent clipping below the floor
        ballSpeed.y *= -1
      }
      if (ball.position.y + ballRadius > 5 || ball.position.y - ballRadius < -5) {
        ballSpeed.y *= -1
      }

      // Ball collision with paddles
      if (
        ball.position.x - ballRadius < playerPaddle.position.x + paddleWidth / 2 &&
        ball.position.y < playerPaddle.position.y + paddleHeight / 2 &&
        ball.position.y > playerPaddle.position.y - paddleHeight / 2
      ) {
        const offset = (ball.position.y - playerPaddle.position.y) / (paddleHeight / 2)
        ballSpeed.x *= -1
        ballSpeed.y += offset * 0.05
      }

      if (
        ball.position.x + ballRadius > aiPaddle.position.x - paddleWidth / 2 &&
        ball.position.y < aiPaddle.position.y + paddleHeight / 2 &&
        ball.position.y > aiPaddle.position.y - paddleHeight / 2
      ) {
        const offset = (ball.position.y - aiPaddle.position.y) / (paddleHeight / 2)
        ballSpeed.x *= -1
        ballSpeed.y += offset * 0.05
      }

      // Ball out of bounds
      if (ball.position.x + ballRadius > 9 || ball.position.x - ballRadius < -9) {
        ball.position.set(0, 0, 0)
        ballSpeed.x = 0.1
        ballSpeed.y = 0.1
      }

      // Smooth paddle movement
      if (ballSpeed.x < 0 && ball.position.x < 0) {
        // Ball moving toward player paddle
        playerPaddle.position.y += (ball.position.y - playerPaddle.position.y) * paddleSpeed * 0.1
      }

      if (ballSpeed.x > 0 && ball.position.x > 0) {
        // Ball moving toward AI paddle
        aiPaddle.position.y += (ball.position.y - aiPaddle.position.y) * paddleSpeed * 0.1
      }

      // Clamp paddle positions
      playerPaddle.position.y = THREE.MathUtils.clamp(playerPaddle.position.y, -5, 5)
      aiPaddle.position.y = THREE.MathUtils.clamp(aiPaddle.position.y, -5, 5)

      renderer.render(scene, camera)
    }

    animate()

    return () => {
      window.removeEventListener(`resize`, onWindowResize)
      if (mountRef.current) {
        mountRef.current.removeChild(renderer.domElement)
      }
    }
  }, [])

  return <div ref={mountRef} className="non-accessible absolute left-0 right-0 overflow-hidden" style={{ margin: `auto`, height: `300px` }} />
}

export default PongGame
