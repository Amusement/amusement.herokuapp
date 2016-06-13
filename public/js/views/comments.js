var app = app || {};

$(function() {

app.CommentsView = Backbone.View.extend({

	el: '#comments',

	initialize: function() {
		this.collection = new app.Comments();
		this.collection.fetch({reset: true});
		this.render();
		this.listenTo(this.collection, 'add', this.renderComment);
		this.listenTo(this.collection, 'reset', this.render);
	},

	events: {
		'click #submit': 'addComment'
	},

	addComment: function(e) {
		console.log('addComment called');

		e.preventDefault();
	
		var formData = {};
	
		$('#addComment div').children('input').each(function(i, el) {
			if($(el).val() !== '') {
				formData[el.id] = $(el).val();
			}
		});

		console.log(formData);

		//No persistence
		//this.collection.add(new app.Comment(formData));

		this.collection.create(formData);
	},

	render: function() {
		this.collection.each(function(item) {
			this.renderComment(item);
		}, this);
	},

	renderComment: function(item) {

		var commentView = new app.CommentView({
			model: item
		});

		this.$el.append(commentView.render().el);
	}
});

});
