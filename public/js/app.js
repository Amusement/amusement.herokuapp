
var app = app || {};

$(function() {
	var intersection = new app.Intersection();
	new app.NavigationView({ model: intersection });
	new app.CanvasView({ model: intersection });
	new app.CommentsView();
});
