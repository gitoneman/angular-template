angular.module("app")
.controller('homeController', ['$scope','$rootScope','$location', function ($scope,$rootScope,$location) {
	$scope.currentPath = "";
	var path = $location.path();
	if(path.slice(1).split("/")[1]){
		$scope.currentPath = $location.path();
	}else{
		$scope.currentPath = "/home/dashboard";
		$location.path("/home/dashboard")
	}
}])