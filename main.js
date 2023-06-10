import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import './style.css'

const width = window.innerWidth
const height = window.innerHeight

const scene = new THREE.Scene()
const camera = new THREE.PerspectiveCamera(45, width / height)
const renderer = new THREE.WebGLRenderer()
const controls = new OrbitControls(camera, renderer.domElement)

const geometry = new THREE.BoxGeometry(3, 3, 3)
const material = new THREE.MeshBasicMaterial({ color: 0x8000ff })
const cube = new THREE.Mesh(geometry, material)

scene.add(cube)
camera.position.z = 8
controls.autoRotate = true
renderer.setSize(width / 4, height / 4)
document.getElementById('profile').appendChild(renderer.domElement)

function animate() {
  requestAnimationFrame(animate)
  controls.update()
  renderer.render(scene, camera)
}

animate()
