/**
 * Created by Administrator on 2017/7/23.
 */
define(['angular', 'angularAMD', 'angular-ui-router', 'xeditable', 'ui-bootstrap', 'angular-toastr'], function(angular, angularAMD){
	var app = angular.module('app', ['ui.router','xeditable', 'ui.bootstrap', 'toastr']);
	app.config(function ($stateProvider, $urlRouterProvider) {
		$urlRouterProvider.otherwise("/status");
		$stateProvider
			.state('status', {
				url: '/status',
				views: {
					'container@': angularAMD.route({
						templateUrl: 'templates/status.html',
						controllerUrl: 'javascripts/controllers/status.js'
					})
				}
			})
			.state('devices', {
				url: '/devices',
				views:{
					'container@': angularAMD.route({
						templateUrl: 'templates/devices.html',
						controllerUrl: 'javascripts/controllers/devices.js'
					})
				}
			})
			.state('apps', {
				url: '/apps',
				views: {
					'container@': angularAMD.route({
						templateUrl: 'templates/apps.html',
						controllerUrl: 'javascripts/controllers/apps.js'
					})
				}
			})
			.state('users', {
				url: '/users',
				views: {
					'container@': angularAMD.route({
						templateUrl: 'templates/users.html',
						controllerUrl: 'javascripts/controllers/users.js'
					})
				}
			})
			.state('settings', {
				url: '/settings',
				views:{
					'container@': angularAMD.route({
						templateUrl: 'templates/settings.html',
						controllerUrl: 'javascripts/controllers/settings.js'
					})
				}
			})
	});
	app.directive('errSrc', function(){
		return {
			link: function(scope, ele, attr){
				ele.bind('error', function(){
					if(attr.src != attr.errSrc){
						attr.$set('src', attr.errSrc);
					}
				});
			}
		};
	});
	return angularAMD.bootstrap(app);
});