'use strict';

var app = app || {};

app.Intersection = Backbone.Model.extend({
	// make use of change events triggered by navigation in another view
  	// x - category, y - adjunct
	defaults: {
  	'x': 0,
  	'y': 0,
	'data': {
		 '0': ['glyphicon-console', 'glyphicon-tint', 'glyphicon-certificate'],
		 '1': ['glyphicon-apple', 'glyphicon-bell', 'glyphicon-tower'],
		 '2': ['glyphicon-education', 'glyphicon-picture', 'glyphicon-repeat'],
		 '3': ['glyphicon-leaf', 'glyphicon-heart', 'glyphicon-tower'],
		 '4': ['glyphicon-stats', 'glyphicon-time', 'glyphicon-repeat', 'glyphicon-repeat'],
		 '5': ['glyphicon-globe', 'glyphicon-off', 'glyphicon-bell'],
		 '6': ['glyphicon-send', 'glyphicon-bookmark', 'glyphicon-repeat', 'glyphicon-certificate']
		}
 	},
  
});
