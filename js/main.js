
//////////	
// MAIN //
//////////
// standard global variables
var container, scene, camera, renderer, controls, stats;
// var keyboard = new THREEx.KeyboardState();
// var clock = new THREE.Clock();
// custom global variables
var cube;
// initialization
init();
// animation loop / game loop
animate();
///////////////
// FUNCTIONS //
///////////////
			
function init() 
{
	///////////
	// SCENE //
	///////////
	scene = new THREE.Scene();
	////////////
	// CAMERA //
	////////////
	
	// set the view size in pixels (custom or according to window size)
	// var SCREEN_WIDTH = 400, SCREEN_HEIGHT = 300;
	var SCREEN_WIDTH = window.innerWidth, SCREEN_HEIGHT = window.innerHeight;	
	// camera attributes
	var VIEW_ANGLE = 45, ASPECT = SCREEN_WIDTH / SCREEN_HEIGHT, NEAR = 0.1, FAR = 20000;
	// set up camera
	camera = new THREE.PerspectiveCamera( VIEW_ANGLE, ASPECT, NEAR, FAR);
	// add the camera to the scene
	scene.add(camera);
	// the camera defaults to position (0,0,0)
	// 	so pull it back (z = 400) and up (y = 100) and set the angle towards the scene origin
	camera.position.set(0,150,400);
	camera.lookAt(scene.position);	
	
	//////////////
	// RENDERER //
	//////////////
	
	// create and start the renderer; choose antialias setting.
	//if ( Detector.webgl )
	renderer = new THREE.WebGLRenderer( {antialias:true} );
	//else
	//renderer = new THREE.CanvasRenderer(); 
	
	renderer.setSize(SCREEN_WIDTH, SCREEN_HEIGHT);
	
	// attach div element to variable to contain the renderer
	//container = document.getElementById( 'ThreeJS' );
	container = document.body;
	// alternatively: to create the div at runtime, use:
	//   container = document.createElement( 'div' );
	//    document.body.appendChild( container );
	
	// attach renderer to the container div
	container.appendChild( renderer.domElement );
	
	///////////
	// LIGHT //
	///////////
	
	// create a light
	var light = new THREE.PointLight(0xffffff);
	light.position.set(250,0,0);
	scene.add(light);
	var ambientLight = new THREE.AmbientLight(0x111111);
	// scene.add(ambientLight);
	
	//////////////
	// GEOMETRY //
	//////////////
		
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
	scene.add(sphere);
	
	
}
function animate() 
{
    requestAnimationFrame( animate );
	render();
}

function render() 
{	
	renderer.render( scene, camera );
}