'use strict';

var app = app || {};

app.Comment = Backbone.Model.extend({

	defaults: {
		name: 'Unknown',
		email: 'Unknown',
		content: 'Blank'
	},

	//Edit the server response
	parse: function(response) {
		response.id = response._id;
		return response;
	}
});
