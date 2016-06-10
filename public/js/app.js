'use strict';

var app = app || {};

$(function() {
	var comments = [
		{name: 'Spongebob', email: 'squarepants@pineapple.net', content: 'Oh well, I guess I\'m not wearing any pants today!'},
		{name: 'Patrick', email: 'star@rock.net', content: 'The inner machinations of my mind are an enigma.'}
	];
	
	new app.CommentsView(comments);
});
