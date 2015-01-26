var AppDispatcher = require('../app-dispatcher');
var EventEmitter = require('events').EventEmitter;
var AppConstants = require('../CONSTANTS');
var assign = require('object-assign');

var ProcessStore = assign({
	addProcessListener: function(cb) {
		this.on(AppConstants.RETRIEVE_PROCESS, cb);
	},
	removeProcessListener: function(cb) {
		this.removeListener(cb);
	},
	emitProcess: function(data) {
		this.emit(AppConstants.RETRIEVE_PROCESS, data);
	}
}, EventEmitter.prototype);

AppDispatcher.register(function(payload){
	var action = payload.action;
	switch(action.actionType) {
		default: return;
		case AppConstants.RETRIEVE_PROCESS:
			ProcessStore.emitProcess(action.data);
			break;
	}
});

module.exports = ProcessStore;