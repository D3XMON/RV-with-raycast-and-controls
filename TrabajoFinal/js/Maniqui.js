function Maniqui(){
    const texture1 = new THREE.TextureLoader().load( "text.jpg" );
    const geometry2 = new THREE.BoxGeometry(5, 40, 2);
    const material2 = new THREE.MeshBasicMaterial({ map:texture1 });
    const cube1 = new THREE.Mesh(geometry2, material2);
    scene.add(cube1);
    cube1.position.y = -20;
    cube1.position.z = 22;
    cube1.position.x = 0; 
    var rapido= true;
    var velocidad= 0;
    this.actualizar=function(){
        if (rapido){
            velocidad=0.1;
            cube1.position.x+=velocidad;
        }
        if (rapido==false){
            velocidad=0.1;
            cube1.position.x-=velocidad;
        }
        
            if(cube1.position.x>=18){
                velocidad=-velocidad;
                rapido=false;
            }
            
            if(cube1.position.x<=-18){
                velocidad=-velocidad;
                rapido=true;
            }
    }
}