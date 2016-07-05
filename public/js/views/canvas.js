var app = app || {};

$(function () {
	
  app.CanvasView = Backbone.View.extend({
  	
    el: '#webglcanvas',

    initialize: function() {
      this.draw();
      this.listenTo(this.model, 'change', this.render);
    },

    draw: function() {
  	var scene = new THREE.Scene();
			var camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );

			var renderer = new THREE.WebGLRenderer();
			renderer.setSize( window.innerWidth, window.innerHeight );
			document.body.appendChild( renderer.domElement );

			var geometry = new THREE.BoxGeometry( 1, 1, 1 );
			var material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
			var cube = new THREE.Mesh( geometry, material );
			scene.add( cube );

			camera.position.z = 5;

			var render = function () {
				setTimeout(requestAnimationFrame( render ), 300);

				cube.rotation.x += 0.1;
				cube.rotation.y += 0.1;

				renderer.render(scene, camera);
			};

			render();
    },

    render: function() {
    	//var template = _.template($('#three').html());
    	//this.$el.html( template({ name : this.model.get('data')[String(this.model.get('x'))][this.model.get('y')]}) );
    }

  });
  
});
