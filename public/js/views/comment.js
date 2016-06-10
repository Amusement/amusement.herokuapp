var app = app || {};

$(function() {

app.CommentView = Backbone.View.extend({

	tagName: 'div',

	className: 'commentContainer',

	events: {
		'click #delete': 'deleteComment'
	},

	deleteComment: function() {
		
		this.model.destroy();
	
		this.remove();
	},

	template: _.template($('#commentTemplate').html()),

	render: function() {
		
		this.$el.html(this.template(this.model.attributes));
	
		return this;
	}
});

});
