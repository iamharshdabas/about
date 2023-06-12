import * as THREE from 'three'

const width = innerWidth
const height = innerHeight

const screen = new THREE.Scene()
const camera = new THREE.PerspectiveCamera(80, width / height, 1, 80)
camera.position.z = 2

const renderer = new THREE.WebGLRenderer()
renderer.setSize(width, height)
document.body.appendChild(renderer.domElement)

const totalStar = 2000
const starGeomatry = new THREE.BufferGeometry()
const stars = new Float32Array(totalStar * 3)
for (let i = 0; i < totalStar * 3; i++) {
  stars[i] = Math.random() * 24 - 12
  starGeomatry.setAttribute('position', new THREE.BufferAttribute(stars, 3))
}

const starMaterial = new THREE.PointsMaterial({ color: 0xffffff, size: 0.008 })

const starMesh = new THREE.Points(starGeomatry, starMaterial)
screen.add(starMesh)

function animate() {
  requestAnimationFrame(animate)
  // sphere.rotation.y += 0.002
}

renderer.render(screen, camera)
// animate()
