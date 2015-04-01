import Sphere from './sphere.js';

var scene, camera, renderer;

// initialization
init();
animate();

function init() 
{
	scene = new THREE.Scene();
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
		
	// create and start the renderer; choose antialias setting.
	if (window.WebGLRenderingContext) {
		renderer = new THREE.WebGLRenderer( {antialias:true} );
	} else {
		renderer = new THREE.CanvasRenderer(); 
	}
	
	renderer.setSize(SCREEN_WIDTH, SCREEN_HEIGHT);
	
	document.body.appendChild( renderer.domElement );

	
	// create a light
	var light = new THREE.PointLight(0xffffff);
	light.position.set(250,0,0);
	scene.add(light);
	var ambientLight = new THREE.AmbientLight(0x111111);
	scene.add(ambientLight);
	
	// Create sphere
	var sphere = new Sphere(scene, 30);
	sphere.initialize();


	
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