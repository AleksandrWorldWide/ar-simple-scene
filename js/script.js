let scene, camera, renderer, light,
	loader, controls;

scene = new THREE.Scene();
scene.background = new THREE.Color(0xCC99FF);

camera = new THREE.PerspectiveCamera(50, window.innerWidth/window.innerHeight);
camera.position.set(0,0,25);

renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

light = new THREE.AmbientLight(0xF0EAD6,1);
scene.add(light);

window.addEventListener('resize', function() {
	renderer.setSize(window.innerWidth, window.innerHeight);
	camera.aspect = window.innerWidth / window.innerHeight;
})

/// controls

controls = new THREE.OrbitControls(camera, renderer.domElement);
controls.update();

/// GLTF loader

loader = new THREE.GLTFLoader();

loader.load('../models/scene.gltf', function(gltf) {
	scene.add(gltf.scene);
})

function animate() {
	requestAnimationFrame(animate);
	renderer.render(scene,camera);
}
animate()