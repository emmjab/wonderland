class Tree {
  constructor(scene,height, radius, segments, color, x, y, z) {
    this.scene = scene;
    this.height = height;
    this.radius = radius;
    this.segments = segments;
    this.color = color || "20B060";
  }
  initialize() {
    // most objects displayed are a "mesh":
    //  a collection of points ("geometry") and
    //  a set of surface parameters ("material")  
    // Sphere parameters: radius, segments along width, segments along height


    var base_geometry = new THREE.CylinderGeometry( this.radius/2, this.radius/2, this.height/4, this.segments);
    this.color='#'+Math.floor(Math.random()*16777215).toString(16);
    var base_material = new THREE.MeshLambertMaterial( {color: this.color} );
    var base_cylinder = new THREE.Mesh( base_geometry, base_material );
    this.scene.add( base_cylinder );


    this.color = '#'+Math.floor(Math.random()*16777215).toString(16);

    var geometry = new THREE.CylinderGeometry( 0, this.height, this.radius, this.segments);
    var material = new THREE.MeshLambertMaterial( {color: this.color} );
    var cylinder = new THREE.Mesh( geometry, material );
    this.scene.add( cylinder );







  }

}

export default Tree;


