
angular.module('app', [
    "app-template",
    "app.router",
    "ui.bootstrap",
    "ui.grid",
    'ui.grid.pagination',
    'ui.grid.edit',
    'ui.grid.resizeColumns',
    'ui.grid.selection', 
    'ui.grid.exporter'
])
.controller('appController', ['$scope','$rootScope','$location', function ($scope,$rootScope,$location) {
	$scope.currentPath = "";

    $scope.$on("$locationChangeSuccess",function(e){
    	var path = $location.path();

    	$scope.currentPath = path.slice(1).split("/")[0];
    })
}])
