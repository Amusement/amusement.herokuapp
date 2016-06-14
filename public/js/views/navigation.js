Navigation = Backbone.View.extend({

	tagName: 'div',

	initialize: function() {
		this.render(4);
		this.left = parseInt($("#panel").css('left'), 10);
		this.category = 0;
		_.bindAll(this, 'shift');
		$(document).bind('keydown', this.shift);
	},

	events: {
		'keydown': 'shift'
	},

	render: function(n) {
		var template = _.template( $('#navpanel').html(), {n : n});
		console.log(template);
		this.el.html( template );
	},

	shift: function(e) {
		e.preventDefault();
		this.rerender(e.keyCode);
	},

	data: {	'0': [0],
		'1': [10],
		'2': [20],
		'3': [30],
		'4': [40],
		'5': [50],
		'6': [60]
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
		if (this.left - 30 > -110) {
			this.left -= 30;
			this.category += 1;
			var val = this.left + 'px';
			$("#panel").css('left', val);
		}

	},

	uw: function() {
	
	},

	rd: function() {
		if (this.left + 30 < 130) {
			this.left += 30;
			this.category -= 1;
		        var val = this.left + 'px';
			$("#panel").css('left', val);
		}
	},

	ds: function() {
        	var len = this.data[String(this.category)];
	}
});
   
var nav = new Navigation({ el: $("#panelcontainer") });
