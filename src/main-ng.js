var angular = require('angular')
,	namespace = require('./namespace')
,	marquee = require('./drtvs/inip-noticeMarquee')
,	inipVersion = require('./drtvs/inip-version')
,	onlineNotice = require('./services/online-notice')
,	noticeController = require('./controllers/notice-controller')
,	mainController = require('./controllers/main-controller')
,	helpDeskController = require('./controllers/help-desk-controller')
,	app = namespace.app
,	$ = require('jquery');

app.config(['onlineNoticeProvider', function(onlineNoticeProvider){
	onlineNoticeProvider.setWebServiceUrl('http://jnoeapp01.cminl.oa/CMIP_NEWS/WS/WebService.asmx/GetDataSet');
	onlineNoticeProvider.setInipIssuesUrl('http://tnvcmipad.cminl.oa/mvc/api/InipIssues?callback=JSON_CALLBACK');
}]);

$(document).ready(function() {
	console.log('hello angular');
	angular.bootstrap(document.body, [app.name]);
});
