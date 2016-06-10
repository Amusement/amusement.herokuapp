'use strict';

var app = app || {};

app.Comment = Backbone.Model.extend({

	defaults: {
		name: 'Unknown',
		email: 'Unknown',
		content: 'Blank'
	}
});
