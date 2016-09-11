var app = angular.module('accountCtrl',[]);

app.controller('everydayCtrl', function($scope, $http, $rootScope) {
	$http.get('data/2016-9-data.json')
		 .success(function(response) {
			$rootScope.month = response.month;
			$scope.dayData = response.dayData;
		});
	// $scope.gohanHighlight = false;
	// $scope.toggleHighlight = function(){
	// 	$scope.gohanHighlight = !$scope.gohanHighlight;
	// }
});

app.controller('incomeCtrl', function($scope, $rootScope) {
	$scope.ifShow = false;
	$scope.toggleMessage = function(){
		$scope.ifShow = !$scope.ifShow;
	}
});

// app.controller('statisicCtrl', function($scope, $rootScope) {
// 	$scope.ifShow = false;
// });

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