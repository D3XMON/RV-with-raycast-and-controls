function Balon(){
    const texture = new THREE.TextureLoader().load( "balon.jpg" );
    const geometry1 = new THREE.SphereGeometry(2);
    const material1 = new THREE.MeshBasicMaterial({ map: texture });
    const bola = new THREE.Mesh(geometry1, material1);
    scene.add(bola);
    bola.position.z = 90;
    bola.position.y = -6.5; 

    //
    document.addEventListener("keydown", boton);
function boton(e) {
    console.log(e.keyCode)
    if (e.keyCode == 32) {
        jump = true

    }
    if (e.keyCode == 65) {
        left = true


    }
    if (e.keyCode == 68) {
        right = true


    }
}
document.addEventListener("keyup", botonU);
function botonU(e) {
    console.log(e.keyCode)
    if (e.keyCode == 32) {
        jump = false

    }
    if (e.keyCode == 65) {
        left = false

    }
    if (e.keyCode == 68) {
        right = false

    }
}
//
var v = 0;
var a1 = 0;
var t = 0;
var f = 0;
var vx = 0;
var vy = 0;
var vg=0;
var x = 0;
var y = 0;
var r=0;
this.golpear=function(){
    
   
    if (left == true) {
        v = v + 0.01;
    }
    if (right == true) {
        v = v - 0.01;
    }
    if (jump == true) {
        x = Math.cos(v);
        y =  Math.sin(v);
        vx = x ;
        vy = y ;
        a1=-0.005;
        r=-0.1;

    }
    if(v>=0.5){
        v=0.5;
    }
    if(v<=-0.5){
        v=-0.5;
    }
    vg+=a1;

    bola.position.z += -vx ;
    bola.position.x += -vy;
    bola.position.y+=vg;
    bola.rotation.x+=r;
    const raycaster1 = new THREE.Raycaster();
    const ya1 = new THREE.Vector3(-vy, 0, -vx);
    raycaster1.set(bola.position, ya1);
    const intersects1 = raycaster1.intersectObjects(scene.children);
    if (intersects1.length > 0) {
        if (intersects1[0].distance < 0.4) {
            vx=-vx; 
            

        }

    } 

    if (bola.position.y >= 10 || bola.position.x >= 30 || bola.position.y <= -30 || bola.position.x <= -30|| bola.position.z <= -10 ) {
        bola.position.y = -6.5;
        bola.position.x = 0;
        bola.position.z = 90;
        jump = false;
        vx = 0;
        vy = 0;
        a1=0;
        vg=0;
        r=0;

    }
    if( bola.position.z <= 2 ){
        if(bola.position.z >= -18){
            if(bola.position.z <= 18){
                t=t+0.143;
               f =Math.floor(t)
                document.getElementById("demo").innerHTML = f;
            document.getElementById("demo1").innerHTML = f;
            }
        }
        
    }
}
}