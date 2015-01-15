var angular = require('angular')
,	services = require('../namespace').services;

var onlinenotice = services.provider('onlineNotice', onlineNoticeProvider)

function onlineNoticeProvider() {
	var webserviceUrl;
	var inipIssuesUrl;

	this.setWebServiceUrl = function(url) {
		webserviceUrl = url;
	}
	this.setInipIssuesUrl = function(url) {
		inipIssuesUrl = url;
	}

	this.$get = onlinNoticeFactory;

	onlinNoticeFactory.$inject = ['$http'];
	function onlinNoticeFactory($http) {
		return {										
			getNotices: function(callback) {//callback: function(error, data, status)
				if (!angular.isDefined(callback))
					return false;
				$http.post(webserviceUrl).then(
					//success
					function(xml, status) {
						var x2js = new X2JS()
						,	json = x2js.xml_str2json(xml.data)
						,	news;
						if (!angular.isDefined(json.DataSet.diffgram.NewDataSet))
							return;
						news = json.DataSet.diffgram.NewDataSet.Table1;
						//TIPS_LEVEL: 0: 一般 1: 緊急
						//status= 1or2為issue  3為new  4為change 8為組織公告
						//排序原則  先排level  再排new.issue.change.組隻公告
						//algorithm: bits: xxxxx  left to right: level, new.issue.change.組隻公告
						if (!angular.isArray(news)) {
							news = [news];
						}
						else {
							news = _.sortBy(news, function(it) {
								//the smaller, the higher priority
								var level = it.TIPS_LEVEL == 1 ? (1 << 4) : 0
								,	status
								,	rank;
								switch (+it.STATUS) {
									case 1: //issue
									case 2: 
										status = 1 << 2;
										break;
									case 3: //new
										status = 1 << 3
										break;
									case 4: //change
										status = 1 << 1;
										break;
									default:
									case 8:
										status = 1;
										break;
								}

								rank = (level | status) * -1;
								return rank;
							});
						}


						//structure: json.DataSet.diffgram.NewDataSet.Table1

						callback(undefined, news, status);
					},
					//error
					function(data, status) {
						callback(data, undefined, status);
					}
				);
			},
			getInipIssues: function(callback) {
				if (!angular.isDefined(callback))
					return false;
				//return callback(undefined, undefined);

				$http.jsonp(inipIssuesUrl, {transformResponse: function(data, headers) {
											
					return data;
				}})
				.success(function(data, status) {
					callback(undefined, data, status);
				})
				.error(function(data, status) {
					callback(data, undefined, status);
				});
			}
		};
	}
}

module.exports = onlinenotice;