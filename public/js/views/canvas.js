var app = app || {};

$(function () {
	
  app.CanvasView = Backbone.View.extend({
  	
    el: "#webglcanvas",

    initialize: function() {

	this.set();	

	this.listenTo(this.model, 'change:x', this.identity);
	this.listenTo(this.model, 'change:y', this.identitty);
    },

    set: function() {
	
	this.scene = new THREE.Scene();
	this.camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 20000);

	this.renderer = new THREE.WebGLRenderer({antialias:true});
	this.renderer.setSize(window.innerWidth, window.innerHeight);

	this.$el.append(this.renderer.domElement);
	this.geometry = new THREE.BoxGeometry(1,1,1);
	this.material = new THREE.MeshBasicMaterial({color: 0xffff});
	this.cube = new THREE.Mesh(this.geometry, this.material);

	this.scene.add(this.cube);
	this.camera.position.z = 5;
	this.controls = new THREE.OrbitControls( this.camera, this.renderer.domElement );

	var axes = new THREE.AxisHelper(100);
	this.scene.add(axes);
	
	var imagePrefix = "../../images/sp-";
	var directions  = ["xpos", "xneg", "ypos", "yneg", "zpos", "zneg"];
	var imageSuffix = ".jpg";
	var skyGeometry = new THREE.CubeGeometry( 5000, 5000, 5000 );	
	
	var materialArray = [];
	for (var i = 0; i < 6; i++)
		materialArray.push( new THREE.MeshBasicMaterial({
			map: THREE.ImageUtils.TextureLoader( imagePrefix + directions[i] + imageSuffix ),
			side: THREE.BackSide
		}));
	var skyMaterial = new THREE.MeshFaceMaterial( materialArray );
	var skyBox = new THREE.Mesh( skyGeometry, skyMaterial );
	this.scene.add( skyBox );
	
	this.animate(1, 1);

    },

    animate: function(dx, dy) {
	var parent = this;
	requestAnimationFrame(function() {parent.animate(1, 1);});
	
	this.cube.rotation.x += (dx * 0.01);
	this.cube.rotation.y += (dy * 0.01);

	this.renderer.render(parent.scene, parent.camera);
    },

    identity: function() {
	//
    },

    identitty: function() {
	//
    },

    render: function() {
    	//var template = _.template($('#three').html());
    	//this.$el.html( template({ name : this.model.get('data')[String(this.model.get('x'))][this.model.get('y')]}) );
	
    }

  });
  
});
