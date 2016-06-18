'use strict';

var app = app || {};

$(function() {
	var intersection = new app.Intersection();
	new app.NavigationView({ model: intersection });
	new app.PageView({ model: intersection });
	new app.CommentsView();
});
