var AppDispatcher = require('../app-dispatcher');
var AppConstants = require('../CONSTANTS.js');

//var BaseAction = function(tableId) {
/*function AppAction() {
	this.handleViewAction = function(action) {		
		
	};
}*/
AppAction = {
	toggleCenterZone: function() {
		AppDispatcher.handleViewAction({
			actionType: AppConstants.TOGGLE_CENTER_ZONE
		});
	},
	animateCenterZone: function(isAnimating) {
		var actionType = isAnimating? AppConstants.ANIMATING : AppConstants.ANIMATED
		AppDispatcher.handleViewAction({
			actionType: actionType
		});
	}
}

module.exports = AppAction;