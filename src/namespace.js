var angular = require('angular');
var templates = angular.module('inip-templates', []);
var drtvs = angular.module('inip-drtvs', []);
var services = angular.module('inip-services', []);
var app = angular.module('app', [templates.name, drtvs.name, services.name, 'ui.bootstrap']);

var namespaces = {
	directives: drtvs,
	services: services,
	app: app
};

module.exports = namespaces;
