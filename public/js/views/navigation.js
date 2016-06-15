var app = app || {};

$(function () {
app.NavigationView = Backbone.View.extend({
  el: '#verticalnav',
  
  initialize: function(){
    this.render(0);		//Renders 0 by default
    
    this.square = parseInt($("#panel").css('height'), 10);
    this.original_left = parseInt($("#panel").css('left'), 10);
    this.original_width = parseInt($("#panel").css('width'), 10);
    this.original_top = parseInt($("#panel").css('top'), 10);
    this.left = parseInt($("#panel").css('left'), 10);
    this.top = parseInt($("#overboard").css('top'), 10);
    this.category = 0;
    this.adjunct = 0;

    _.bindAll(this, 'shift');
    $(document).bind('keydown', this.shift);
  },
  
  render: function(c) {
  	var data = this.data[String(c)];
    var template = _.template($('#navpanel').html());
    this.$el.html( template({data : data}) );
    
  },
  
  events: {
    'keydown': 'shift'
  },
  
  shift: function(e) {
    e.preventDefault();
    this.rerender(e.keyCode);
  },
  
  data: {'0': ['glyphicon-tint', 'glyphicon-certificate'],
  			 '1': ['glyphicon-bell', 'glyphicon-tower'],
         '2': ['glyphicon-picture', 'glyphicon-repeat'],
         '3': ['glyphicon-heart', 'glyphicon-tower'],
         '4': ['glyphicon-time', 'glyphicon-repeat', 'glyphicon-repeat'],
         '5': ['glyphicon-off', 'glyphicon-bell'],
         '6': ['glyphicon-bookmark', 'glyphicon-repeat', 'glyphicon-certificate']
  },
  
  // Input: category (e.g '1', '2', '6' etc;)
  // Output: number of items in input category
  getnum: function(c) {
  	 return (this.data[String(c)]).length;
  },
  
  // Input: category, desired output type (one of: 'px' or 'int')
  // Output: height of vertical bar (#overboard) as integer or pixels
  getheight: function(c, type) {
  	if (type == 'px') {
    	return this.getnum(c) * this.square + 'px';
    } 
    else if (type == 'int') {
    	return this.getnum(c) * this.square;
    }
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
  	var bound = this.original_left + this.square;
    if (this.left + this.square < bound) {
    	this.left += this.square;
      this.adjunct = 0;
      this.category -= 1;
      this.render(this.category);
      this.throwanchor();
   	 	var val = this.left + 'px';
    	$('#panel').css('left', val);
    }
    console.log(this.category + ',' + this.adjunct);
  },
  
  uw: function() {
    var obheight = this.getheight(this.category, 'int');
    var bound = this.original_top - obheight;
  	if (this.top - this.square > bound) {
    	var val = (this.top - this.square) + 'px';
    	$('#overboard').css('top', val);
      this.top -= this.square;
      this.adjunct += 1;
    }
    console.log(this.category + ',' + this.adjunct);
  },
  
  rd: function() {
  var bound = this.original_left - this.original_width;
    if (this.left - this.square > bound) {
    	this.left -= this.square;
      this.adjunct = 0;
      this.category += 1;
      this.render(this.category);
      this.throwanchor();
      var val = this.left + 'px';
      $('#panel').css('left', val);
    }
    console.log(this.category + ',' + this.adjunct);
  },
  
  ds: function() {
  	if (this.top + this.square <= this.original_top) {
    	var val = (this.top + this.square) + 'px';
      $('#overboard').css('top', val);
      this.top += this.square;
      this.adjunct -= 1;
    }
    console.log(this.category + ',' + this.adjunct);
  },
  
  throwanchor: function() {
    this.top = this.original_top;
  	$('#overboard').css('top', this.original_top);
    var obheight = this.getheight(this.category, 'px');
    $('#overboard').css('height', obheight);
  }
  
});

});
