var app = app || {};

$(function() {

app.NavigationView = Backbone.View.extend({

	el: '#panelcontainer',

	initialize: function(){
		this.render(4);
		this.left = parseInt($("#panel").css('left'), 10);
		this.original = parseInt($("#panel").css('top'), 10);
		this.top = parseInt($("#overboard").css('top'), 10);
		this.category = 0;
		_.bindAll(this, 'shift');
		$(document).bind('keydown', this.shift);
	},

	render: function(n) {
		var template = _.template( $('#navpanel').html(), {n : n});
		console.log(template);
		this.$el.html( template );
	},

	events: {
		'keydown': 'shift'
	},

	shift: function(e) {
		e.preventDefault();
		this.rerender(e.keyCode);
	},

	data: { '0': [30],
		'1': [60],
		'2': [90],
		'3': [120],
		'4': [150],
		'5': [180],
		'6': [210]
	},

	rerender: function(key) {
		switch(key) {
		case 37:
			this.la();
		break;
		case 38:
			this.uw();
		break;
		case 39:
			this.rd();
		break;
		case 40:
			this.ds();
		break;
		case 65:
			this.la();
		break;
		case 87:
			this.uw();
		break;
		case 68:
			this.rd();
		break;
		case 83:
			this.ds();
		break;
		}
	},

	la: function() {
		if (this.left + 30 < 130) {
			this.left += 30;
			this.category -= 1;
			this.throwanchor();
			 	var val = this.left + 'px';
			$('#panel').css('left', val);
		}
	},

	uw: function() {
		var bound = this.original - parseInt(this.data[String(this.category)], 10);
		if (this.top - 30 > bound) {
			var val = (this.top - 30) + 'px';
			$('#overboard').css('top', val);
			this.top -= 30;
		}
	},

	rd: function() {
		if (this.left - 30 > -110) {
			this.left -= 30;
			this.category += 1;
			this.throwanchor();
			var val = this.left + 'px';
			$('#panel').css('left', val);
		}
	},

	ds: function() {
		if ((this.top + 30) <= this.original) {
			var val = (this.top + 30) + 'px';
			$('#overboard').css('top', val);
			this.top += 30;
		}
	},

	throwanchor: function() {
		this.top = this.original;
		$('#overboard').css('top', 150);
		var len = this.data[String(this.category)];
		var val = len + 'px';
		$('#overboard').css('height', val);
	}

	});

});

