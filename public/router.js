angular.module('app.router', [
	'ui.router'
])
.config(function ($locationProvider,$stateProvider, $urlRouterProvider) {

  //
  // Now set up the states
  $stateProvider
    .state('home', {
        url: "/home",
        templateUrl: "home/homeTemplate.html",
        controller: 'homeController'
    })
    .state('asset', {
        url: "/asset",
        templateUrl: "asset/assetTemplate.html",
        controller: 'assetController'
    })
    .state('rule', {
        url: "/rule",
        templateUrl: "rule/ruleTemplate.html",
        controller: 'ruleController'
    })
    .state('system', {
        url: "/system",
        templateUrl: "system/systemTemplate.html",
        controller: 'systemController'
    })

    $urlRouterProvider.otherwise("/home");
})