const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer();

renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

var effect = new THREE.StereoEffect(renderer);
effect.setSize(window.innerWidth, window.innerHeight);

const light = new THREE.AmbientLight(0xffffff); // soft white light
scene.add(light);

var right = false;
var left = false;
var jump = false;




let materialArray = [];//arreglo
let texture_ft = new THREE.TextureLoader().load('grada.jpg');
let texture_bk = new THREE.TextureLoader().load('grada.jpg');
let texture_up = new THREE.TextureLoader().load('grada.jpg');
let texture_dn = new THREE.TextureLoader().load('grada.jpg');
let texture_rt = new THREE.TextureLoader().load('grada.jpg');
let texture_lf = new THREE.TextureLoader().load('grada.jpg');

materialArray.push(new THREE.MeshStandardMaterial({ map: texture_ft }));
materialArray.push(new THREE.MeshStandardMaterial({ map: texture_bk }));
materialArray.push(new THREE.MeshStandardMaterial({ map: texture_up }));
materialArray.push(new THREE.MeshStandardMaterial({ map: texture_dn }));
materialArray.push(new THREE.MeshStandardMaterial({ map: texture_rt }));
materialArray.push(new THREE.MeshStandardMaterial({ map: texture_lf }));

for (let i = 0; i < 6; i++)
    materialArray[i].side = THREE.BackSide;//relaciona una imagen como un lado de un objeto 
let estrellas = new THREE.BoxGeometry(1000, 1000, 1000);
let skybox = new THREE.Mesh(estrellas, materialArray);
scene.add(skybox);
//
vaya = new Maniqui();
//
Porteria = new Cube();
//
Ball = new Balon();




camera.position.z = 100;


function animate() {
    requestAnimationFrame(animate);
    vaya.actualizar();
    Ball.golpear();
    
    effect.render(scene, camera);
};

animate();