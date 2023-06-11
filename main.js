import * as THREE from 'three'

const width = innerWidth
const height = innerHeight

const screen = new THREE.Scene()
const camera = new THREE.PerspectiveCamera(80, width / height, 1, 80)

const renderer = new THREE.WebGLRenderer()
renderer.setSize(width, height)
document.body.appendChild(renderer.domElement)

const geometry = new THREE.SphereGeometry(0.02, 32, 32)
const material = new THREE.MeshBasicMaterial({ color: 0xffffff })
const sphere = new THREE.Mesh(geometry, material)
screen.add(sphere)

camera.position.z = 2
renderer.render(screen, camera)
