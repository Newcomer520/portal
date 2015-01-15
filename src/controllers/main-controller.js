require('../../template/inipModal.html')
var angular = require('angular');
var app = require('../namespace').app;

var mainCtrl = app.controller('main-ctrl', mainCtrlFactory);
mainCtrlFactory.$inject = ['$scope', '$modal', 'onlineNotice'];
function mainCtrlFactory($scope, $modal, onlineNotice) {
	onlineNotice.getInipIssues(function(err, data, status) {
		if(angular.isDefined(err)) {
			alert('error occurs:\n' + err);
			return;
		}
		if (angular.isDefined(data) && data.length > 0) {
			var modalInstance = $modal.open({
				templateUrl: 'inipModal.html',
				controller: modalInstanceCtrl,
				size: 'md',
				resolve: {
					content: function() {
						return data;
					}
				}
			});
		}

	});			

	modalInstanceCtrl.$inject = ['$scope', '$modalInstance', 'content']
	function modalInstanceCtrl($scope, $modalInstance, content) {
		$scope.content = content;

		$scope.ok = function() {
			 $modalInstance.dismiss('cancel');
		}
	}
}

module.exports = mainCtrl;