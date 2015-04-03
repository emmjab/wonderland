import ImprovedNoise from './improvednoise.js';

class Landscape {
  constructor(scene, width, height) {
    this.scene = scene;
    this.width = width;
    this.height = height;
  }
  initialize() {
    // var texture = THREE.ImageUtils.loadTexture('images/grass.jpg');
    // texture.wrapS = THREE.MirroredRepeatWrapping;
    // texture.wrapT = THREE.MirroredRepeatWrapping;
    // var geoUniverse = new THREE.SphereGeometry(2000, 50, 50);
    // var material = new THREE.MeshLambertMaterial({
    //   map : texture,
    //   side: THREE.BackSide
    // });
    // var universe = new THREE.Mesh( geoUniverse, material );
    // this.scene.add(universe);


    // texture
    var texture = THREE.ImageUtils.loadTexture('images/grass.jpg');
    // texture.wrapS = THREE.MirroredRepeatWrapping;
    // texture.wrapT = THREE.MirroredRepeatWrapping;
    // texture.repeat.set( 4, 4 );


    // material
    var material = new THREE.MeshLambertMaterial({
      map: texture,
      side: THREE.DoubleSide
    });

    // var materials = new THREE.MeshFaceMaterial( materialsArr )
    var geometry = new THREE.BoxGeometry( this.width * 1.2, this.height * 1.2, 1 );
    var cube = new THREE.Mesh(geometry, material);
    cube.overdraw = true;
    cube.rotation.x = Math.PI * 0.1;
    this.scene.add(cube);

  }
}

export default Landscape;
