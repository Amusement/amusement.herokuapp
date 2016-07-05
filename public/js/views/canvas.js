var app = app || {};

$(function () {
	
  app.CanvasView = Backbone.View.extend({
  	
    el: "#webglcanvas",

    initialize: function() {
	
	this.scene = new THREE.Scene();
	this.camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 20000);

	this.renderer = new THREE.WebGLRenderer({antialias:true});
	this.renderer.setSize(window.innerWidth, window.innerHeight);

	this.$el.append(this.renderer.domElement);
	this.geometry = new THREE.BoxGeometry(1,1,1);
	this.material = new THREE.MeshBasicMaterial({color: 0x00ff00});
	this.cube = new THREE.Mesh(this.geometry, this.material);
	this.scene.add(this.cube);
	this.camera.position.z = 5;
	
	this.animate();

	this.listenTo(this.model, 'change', this.animate);
    },

    animate: function() {
	var parent = this;
	requestAnimationFrame(function() {parent.animate();});

	this.cube.rotation.x -= 0.05;
	this.cube.rotation.y -= 0.05;
	this.renderer.render(parent.scene, parent.camera);
    },

    render: function() {
    	//var template = _.template($('#three').html());
    	//this.$el.html( template({ name : this.model.get('data')[String(this.model.get('x'))][this.model.get('y')]}) );
	
    }

  });
  
});
