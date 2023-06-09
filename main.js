import * as THREE from 'three';
import './style.css';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  45,
  window.innerWidth / window.innerHeight,
  1,
  100
);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth / 2, window.innerHeight / 2);
document.getElementById('box').appendChild(renderer.domElement);
// document.body.appendChild(renderer.domElement);

const geometry = new THREE.SphereGeometry(2, 32, 32);
const material = new THREE.MeshBasicMaterial({ color: 0x8000ff });
const cube = new THREE.Mesh(geometry, material);

scene.add(cube);
camera.position.z = 8;
renderer.render(scene, camera);
