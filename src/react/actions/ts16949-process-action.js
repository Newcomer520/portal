var AppDispatcher = require('../app-dispatcher');
var AppConstants = require('../CONSTANTS.js');

ProcessAction = {
	retrieveProcess: function(process) {
		/*require(['my-react/component/ts16949/process/configs/' + process], function(result) {
			AppDispatcher.handleViewAction({
				actionType: AppConstants.RETRIEVE_PROCESS,
				data: result
			})
		});*/
		/*require(['bundle!my-react/component/ts16949/process/configs/' + process], function(bundledResult) {
			bundledResult(function(result) { 
				AppDispatcher.handleViewAction({
					actionType: AppConstants.RETRIEVE_PROCESS,
					data: result
				})
			});
		});*/
		var result = require('my-react/component/ts16949/process/configs/' + process);
		AppDispatcher.handleViewAction({
			actionType: AppConstants.RETRIEVE_PROCESS,
			data: result
		})
	}
}

module.exports = ProcessAction;