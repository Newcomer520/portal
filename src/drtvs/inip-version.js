var angular = require('angular')
,	drtv = require('../namespace').directives;

require('../../template/inip-version.html');

var inipVersion = drtv.directive('inipVersion', inipVersionFactory);

function inipVersionFactory() {
	return {
		restrict: 'EA',
		replace: false,
		templateUrl: 'inip-version.html',
		link: function(scope, ele, attrs, ctrl) {
			var dropList = $('div', ele);
			var imgVer = $('img', ele);
			ele.on('click', function() {
				//dropList.toggle();
				/*dropList.css({
					'left': (imgVer.position().left - 10 )+ 'px',
					'top': imgVer.position().top + imgVer.height() + 'px',
				});*/
				dropList.slideToggle({
					duration: 1000
				});
			});
		}
	}
}

module.exports = inipVersion;