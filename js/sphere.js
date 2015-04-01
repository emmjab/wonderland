class Sphere {
  constructor(scene, size) {
    this.size = size;
    this.scene = scene
  }
  initialize() {
    // most objects displayed are a "mesh":
    //  a collection of points ("geometry") and
    //  a set of surface parameters ("material")  
    // Sphere parameters: radius, segments along width, segments along height

    var sphereGeometry = new THREE.SphereGeometry( 50, 32, 16 ); 
    // use a "lambert" material rather than "basic" for realistic lighting.
    //   (don't forget to add (at least one) light!)
    var sphereMaterial = new THREE.MeshLambertMaterial( {color: 0x8888ff} ); 
    var sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
    sphere.position.set(0, 0, 0);
    this.scene.add(sphere);

  }
}

export default Sphere;