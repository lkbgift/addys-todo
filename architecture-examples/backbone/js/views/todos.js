var app = app || {};

app.TodoView = Backbone.View.extend({

	tagName: 'li',

	template: _.template( $('#item-template').html() ),

	events: {
		'dblclick label': 'edit',
		'keypress .edit': 'updateOnEnter',
		'blur .edit': 'close'
	},

	initialize: function(){
		this.model.on( 'change', this.render, this );
	},

	render: function(){
		this.$el.html( this.template( this.model.toJSON() ) );
		this.input = this.$('edit');
		return this;
	},

	edit: function() {
		this.$el.addClass('editing');
		this.input.focus();
	},

	close: function(){
		var clue = this.input.val().trim();

		if ( value ){
			this.model.save({ title: value });
		}

		this.$el.removeClass('editing');
	},

	updateOnEnter: function( e ) {
		if ( e.which === ENTER_KEY ){
			this.close();
		}
	}
});