var angular = require('angular')
,	drtv = require('../namespace').directives;

drtv.directive('noticeMarquee', noticeMarqueeFactory);
drtv.directive('marqueItem', marqueItemFactory);

noticeController.$inject = ['$scope'];
function noticeController($scope) {
	var statusCode = {
		start: 1,
		stop: 0,
		pause: 2
	}
	,	ctrl = this;
	$scope.statusCode = statusCode;
	$scope.status = statusCode.stop;

	ctrl.start = function() {
		$scope.status = statusCode.start;
	}
	ctrl.pause = function() {
		$scope.status = statusCode.pause;			
	}
}

noticeMarqueeFactory.$inject = ['$interval'];
function noticeMarqueeFactory($interval) {
	return {
		restrict: 'EA',
		replace: false,
		scope: {
			stepTime: '@',
			direction: '@'
		},
		transclude: true,
		controller: noticeController,
		template://
		'<div style="position:relative;overflow:hidden;width:100%;">\n' +			
		'	<div ng-transclude style="display:inline-block;white-space: nowrap;position:absolute;left:-9999px;top:-9999px;"></div>\n' +
		//'	<div ng-transclude style="visibility:hidden;overflow:hidden;display:block;width:1px;"></div>' + 
		'</div>',//white-space: nowrap; is critical
		link: function(scope, ele, attrs, ctrl) {				
			var movingContainer = $('div:first-child div:first-child', ele)
			,	totalSize
			,	startPoint
			,	stopPoint
			,	stopFlag
			,	step
			,	left;
			var stepTime = +scope.stepTime || 100;
			var direction = scope.direction || 'horizontal';
			scope.direction = direction;
			switch (direction) {
				default:
				case 'horizontal':
					totalSize = 
					startPoint = $('div:first-child', ele).width();
					stopPoint = 0;
					step = -5;						
					left = startPoint;
					break;
				case 'vertical':
					break;
			}				

			scope.$watch('status', function() {
				if (!angular.isDefined(scope.status))
					return;
				switch (scope.status) {						
					case scope.statusCode.start:						
						if (angular.isDefined(stopFlag)) //already run!
							return;
						//set the correct height based on content
						$('>div:first-child', ele).height(movingContainer.height());
						movingContainer.css({
							left: left,
							top: 0
						});
						//break;
						stopFlag = $interval(function() {								
							if (scope.status == scope.statusCode.pause) {
								$interval.cancel(stopFlag);
								stopFlag = undefined;
								return;
							}
								

							var w = movingContainer.width();
							left = left + step;
							left = left > -(w + 10) ? left : startPoint;
							movingContainer.css('left', left);
						}, stepTime);
						break;
					case scope.statusCode.pause:
						break;

				}
			});

			ele.on('mouseover', function() {
				scope.$apply(ctrl.pause);
			});
			ele.on('mouseout', function() {
				scope.$apply(ctrl.start);
				//ctrl.start();
			})

		}

	};
}

function marqueItemFactory() {
	return {
		restrict: 'EA',
		replace: true,
		transclude: true,
		require: '^noticeMarquee',
		scope: {

		},
		template: '<div ng-transclude style="display:inline-block"></div>',
		link: function(scope, ele, attrs, ctrl) {
			ctrl.start();
		}
	}
}

module.exports = drtv;