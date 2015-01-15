var angular = require('angular')
,	app = require('../namespace').app

var noticesCtrl = app.controller('notice-ctrl', onlineNoticeCtrlFactory);

onlineNoticeCtrlFactory.$inject = ['$scope', 'onlineNotice'];
function onlineNoticeCtrlFactory($scope, onlineNotice) {
	$scope.notices = undefined;

	onlineNotice.getNotices(function(err, data, status) {
		if (err) {
			throw err;
			return;
		}
		$scope.notices = data;
	});

	$scope.resolveImg = function(status) {
		var img;
		status = +status;
		switch (status) {
			default:
			case 1:
			case 2:
				img = 'issue';
				break;
			case 3:
				img = 'new';
				break;
			case 4:
				img = 'change';
				break;
			case 8:
				img = 'zuzhi';
				break;
		}
		return img;
	}
}

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

module.exports = noticesCtrl;