var app = app || {};

$(function () {
	
  app.PageView = Backbone.View.extend({
  	
    el: '#coordinates',

    initialize: function() {
      this.listenTo(this.model, 'change', this.render);
    },

    render: function() {
    	var template = _.template($('#heading').html());
    	this.$el.html( template({ name : this.model.get('data')[String(this.model.get('x'))][this.model.get('y')]}) );
    }

  });
  
});
