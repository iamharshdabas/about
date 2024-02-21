import * as THREE from 'three'
import gsap from 'gsap'
import moonTexture from './assets/moon-texture.jpg'
import moonBump from './assets/moon-bump.jpg'

// setting up initial width and height before rendering
let width, height
if (innerWidth < 1024) {
  width = innerWidth
  height = innerHeight - document.querySelector('.grid-intro').clientHeight
} else {
  width = innerWidth / 2
  height = innerHeight
}

// creating objects
const scene = new THREE.Scene()
const camera = new THREE.PerspectiveCamera(45, width / height, 1, 10)
const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector('#moon'),
})

// Texture
const texture = new THREE.TextureLoader()
const moonTextureMap = texture.load(moonTexture)
const moonBumpMap = texture.load(moonBump)

// moon
const moonGeometry = new THREE.SphereGeometry(1, 64, 64)
const moonMaterial = new THREE.MeshStandardMaterial({
  map: moonTextureMap,
  bumpMap: moonBumpMap,
  bumpScale: 0.02,
})
const moonMesh = new THREE.Mesh(moonGeometry, moonMaterial)

// light
const light = new THREE.DirectionalLight(0xffffff)
if (innerWidth < 1024) light.position.set(0, 32, -16)
else light.position.set(32, 0, -16)

renderer.setSize(width, height)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
camera.position.z = 4

scene.add(camera)
scene.add(light)
scene.add(moonMesh)

// update width and hight on resize
window.addEventListener('resize', () => {
  if (innerWidth < 1024) {
    width = innerWidth
    height = innerHeight - document.querySelector('.grid-intro').clientHeight
    light.position.set(0, 32, -16)
  } else {
    width = innerWidth / 2
    height = innerHeight
    light.position.set(32, 0, -16)
  }
  camera.aspect = width / height
  camera.updateProjectionMatrix()
  renderer.setSize(width, height)
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
})

const clock = new THREE.Clock()
function animate() {
  requestAnimationFrame(animate)
  // setting up rotation of moon based on screen size
  const elapsedTime = clock.getElapsedTime()
  moonMesh.rotation.y = elapsedTime / 4
  renderer.render(scene, camera)
}

animate()

const tl = gsap.timeline()
tl.fromTo(moonMesh.scale, { x: 0, y: 0, z: 0 }, { x: 1, y: 1, z: 1 })
tl.fromTo('.grid-intro', { opacity: '0' }, { opacity: '1' })
