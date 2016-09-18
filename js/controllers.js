var app = angular.module('accountCtrl',['ui.grid']);

app.controller('blockmodeCtrl', function($scope) {
	$scope.monthSum = 0;
	$scope.dayNum = 0;
	$scope.$on('monthSumEvent', function(event, sum) {
		$scope.monthSum = sum;
	});
	$scope.$on('dayNumEvent', function(event, dayNum) {
		$scope.dayNum = dayNum;
	});
});

app.controller('everydayCtrl', function($scope, $http, $rootScope) {
	$http.get('data/2016-9-data.json')
		 .success(function(response) {
			$rootScope.month = response.month;
			$scope.dayData = response.dayData;
			console.log(response.dayData.length);
			$scope.$emit('dayNumEvent', response.dayData.length);
		});
	$scope.monthSum = 0;

	// $scope.gohanHighlight = false;
	// $scope.toggleHighlight = function(){
	// 	$scope.gohanHighlight = !$scope.gohanHighlight;
	// }
});

// app.controller('statisicCtrl', function($scope, $rootScope) {
	
// });

app.controller('incomeCtrl', function($scope, $rootScope) {
	$scope.ifShow = false;
	$scope.toggleMessage = function(){
		$scope.ifShow = !$scope.ifShow;
	}
});

app.controller('typelistCtrl', function($scope, $rootScope, $http, $log) {
	$http.get('data/type.json')
		 .success(function(response) {
		 	$scope.listData = response;
		 	$log.log($scope.listData);
		});
});

app.controller('modeChangeCtrl', function($scope, $location) {
	function setLinkByLocation() {
		if($location.path() == '/index/blockmode'){
			$scope.link = {
				isBlockmode: true
			}
		}
		else if($location.path() == '/index/tablemode'){
			$scope.link = {
				isBlockmode : false
			}
		}
	}

	setLinkByLocation();
	$scope.$on('$locationChangeSuccess', function() {
		setLinkByLocation();
	});
});

app.controller('BookListCtrl', function($scope, $http, $state) {
    $scope.totalServerItems = 0;
    $scope.pagingOptions = {
        pageSizes: [5, 10, 20],
        pageSize: 5,
        currentPage: 1
    };

    $scope.getPagedDataAsync = function(pageSize, page) {
            $http.get('data/type.json')
                .success(function(largeLoad) {
                    // $scope.setPagingData(largeLoad, page, pageSize);
				    $scope.myData = largeLoad;
                });
    };

    console.log($scope.uiGridConstants);

    $scope.gridOptions = {
		data: 'myData', 
		rowTemplate: 'tpl/grid-tpl/row.html',
		multiSelect: true,
		enableRowSelection: false,
		enableFiltering: false,
		enableColumnMenus: false,
		enableSorting: false,
		rowHeight: 30,
		minRowsToShow: 10,
		enableMinHeightCheck: false,
		enableHorizontalScrollbar: 0,
		enableVerticalScrollbar: 0,
		columnDefs: [{
		    name: 'index',
		    displayName: '序号',
		    pinnable: false,
		    sortable: false
		}, {
		    name: 'name',
		    displayName: '名称',
		}, {
		    name: 'parentType',
		    displayName: '范围',
		}],
		// totalServerItems: 'totalServerItems',
		pagingOptions: $scope.pagingOptions,
		filterOptions: $scope.filterOptions
	};

    $scope.getPagedDataAsync($scope.pagingOptions.pageSize, $scope.pagingOptions.currentPage);
});