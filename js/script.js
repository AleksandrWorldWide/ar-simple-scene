let scene, camera, renderer, light;

scene = new THREE.Scene();
scene.background = new THREE.Color(0xFFE9D1);

camera = new THREE.PerspectiveCamera(50, window.innerWidth/window.innerHeight);
camera.position.set(0,100,1000);

renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

light = new THREE.AmbientLight(0xF0EAD6);
scene.add(light);

function animate() {
	requestAnimationFrame(animate);
	renderer.render(scene,camera);
}