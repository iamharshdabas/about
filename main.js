import * as THREE from 'three'

const width = innerWidth
const height = innerHeight

const screen = new THREE.Scene()
const camera = new THREE.PerspectiveCamera(80, width / height, 1, 80)
const renderer = new THREE.WebGLRenderer()
renderer.setSize(width, height)
document.body.appendChild(renderer.domElement)

const geometry = new THREE.SphereGeometry(1, 64, 64)
const material = new THREE.PointsMaterial({ color: 0xffffff, size: 0.002 })
const sphere = new THREE.Points(geometry, material)
screen.add(sphere)

camera.position.z = 2

function animate() {
  requestAnimationFrame(animate)
  sphere.rotation.x += 0.002
  sphere.rotation.y += 0.002
  sphere.rotation.z += 0.002
  renderer.render(screen, camera)
}

animate()
