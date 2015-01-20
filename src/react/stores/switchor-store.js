var AppDispatcher = require('../app-dispatcher');
var EventEmitter = require('events').EventEmitter;
var AppConstants = require('../CONSTANTS');
var assign = require('object-assign');

 
var currentView = AppConstants.DEFAULT_VIEW;
var animating = false;

function toggleView() {
	currentView = currentView == DEFAULT_VIEW ?
		TS16949_VIEW: DEFAULT_VIEW;
}
var SwitchorStore = assign({}, EventEmitter.prototype, {
	getCurrent: function() {
		return {
			view: currentView,
			pending: animating
		}
	},
	addToggleListener: function(handler) {
		this.on(TOGGLE_EVENT, handler);
	},
	removeToggleListener: function(handler) {
		this.removeListener(handler);
	},	
	emitEvent: function(event) {
		console.log(event)
		this.emit(event);
	}
});


AppDispatcher.register(function(payload) {
	var action = payload.action;
	switch(action.actionType) {
		default:
			return;
		case AppConstants.TOGGLE_CENTER_ZONE:
			if(animating)
				return;
			toggleView();
			break;
		case AppConstants.ANIMATING:
			animating = true;
			break;
		case AppConstants.ANIMATED:
			animating = false;
			break;
	}
	SwitchorStore.emitEvent(action.actionType);
});

module.exports = SwitchorStore;

var TOGGLE_EVENT = 'TOGGLE_CENTER_ZONE';
var DEFAULT_VIEW = AppConstants.DEFAULT_VIEW;
var TS16949_VIEW = AppConstants.TS16949_VIEW;