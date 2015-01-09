angular.module("app")
.controller('dashboardController', ['$scope','$rootScope','$location', function ($scope,$rootScope,$location) {
	var myData = [
		{name: "Moroni", age: 50,gender:"male"},
	    {name: "Tiancum", age: 43,gender:"male"},
		{name: "Jacob", age: 27,gender:"female"},
		{name: "Nephi", age: 29,gender:"male"},
		{name: "Enos", age: 34,gender:"male"}
	];

	$scope.pagingOptions = {
        pageSizes: [250, 500, 1000],
        pageSize: 250,
        currentPage: 1
    };	 
	$scope.gridOptions = {
		data:myData,
		columnDefs:[
			{ name: 'id'},
	        { name: 'name',enableCellEdit: true,enableColumnResizing: true},
	        { name: 'age'},
	        { name: '11',field:"gender"},
	        { name: 'email'},
		],
		paginationPageSizes: [25, 50, 75],
        paginationPageSize: 25,
        enableSorting: false,
        enableGridMenu: true,
        enableSelectAll: true,
	}
}])