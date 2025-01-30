function Cube() {
    const geometry3 = new THREE.BoxGeometry(50, 5, 2);
const material3 = new THREE.MeshBasicMaterial({ color: 0xffffff });
const porteriat = new THREE.Mesh(geometry3, material3);
scene.add(porteriat);
porteriat.position.y = 3;
porteriat.position.z = 20;
porteriat.position.x = 0;
const geometry4 = new THREE.BoxGeometry(5, 50, 2);
const material4 = new THREE.MeshBasicMaterial({ color: 0xffffff });
const cube4 = new THREE.Mesh(geometry4, material4);
scene.add(cube4);
cube4.position.y = -19;
cube4.position.z = 20;
cube4.position.x = 25;
var clone = cube4.clone();
clone.position.x = -25;
scene.add(clone);
}