require('../../template/helpDesk.html');
var angular = require('angular');
var app = require('../namespace').app;

app.controller('helpDeskCtrl', helpDeskCtrlFactory);
helpDeskCtrlFactory.$inject = ['$modal'];
function helpDeskCtrlFactory($modal) {
	var ctrl = this;
	this.desks = [
		{site: '竹科(JN)', tel: '513-65911'},
		{site: '南科(TN)', tel: '514-65911'},
		{site: '佛山(FS)', tel: '569-80875'},
		{site: '上海(SH)', tel: '572-66589'},
		{site: '南京(NJ)', tel: '572-85382'},
		{site: '寧波(NB)', tel: '562-80885'}
	];
	this.showHelpDesk = function() {
		var modalInstance = $modal.open({
			templateUrl: 'helpDesk.html',
			controller: modalHelpDeskCtrlFactory,
			size: 'sm',
			resolve: {
				desks: function() {
					return ctrl.desks;
				}
			}
		});
	}
	
	modalHelpDeskCtrlFactory.$inject = ['$scope', '$modalInstance', 'desks']
	function modalHelpDeskCtrlFactory($scope, $modalInstance, desks) {
		$scope.desks = desks;
		$scope.close = function() {
			$modalInstance.dismiss('cancel');
		}
	}

	/*
modalInstanceCtrl.$inject = ['$scope', '$modalInstance', 'content']
	function modalInstanceCtrl($scope, $modalInstance, content) {
		$scope.content = content;

		$scope.ok = function() {
			 $modalInstance.dismiss('cancel');
		}
	}

	*/
}
