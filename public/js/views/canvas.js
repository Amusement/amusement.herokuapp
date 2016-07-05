var app = app || {};

$(function () {
	
  app.CanvasView = Backbone.View.extend({
  	
    el: '#webglcanvas',

    initialize: function() {
      this.draw();
      this.listenTo(this.model, 'change', this.render);
    },

    draw: function() {
  
    },

    render: function() {
    	//var template = _.template($('#three').html());
    	//this.$el.html( template({ name : this.model.get('data')[String(this.model.get('x'))][this.model.get('y')]}) );
    }

  });
  
});
