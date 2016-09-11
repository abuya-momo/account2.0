var app = angular.module('accountDrirective',[]);

// app.directive('hello', function() {
// 	return {
// 		template: '<div>Hi here <span ng-transclude>233</span></div>',
// 		transclude: true
// 	}
// });

// app.directive('dailyOutput', function() {
// 	return {
// 		restrict: 'EA',
// 		template: '<div ng-transclude></div>',
// 		replace: true,
// 		transclude: true,
// 		controller: function() {
// 			var onedayBlocks = [];

// 			this.analyze = function() {//统计选中后的日期的平均花销等
// 				var sum = 0;
// 				angular.forEach(onedayBlocks, function(onedayBlock) {

// 				});

// 			}

// 			this.cancelSelectAll = function() {//一键取消所有日期的选中

// 			}
// 		}

// 	}
// });

app.directive('onedayblock', function($templateCache) {
	return {
		restrict: 'EA',
		templateUrl: 'tpl/oneday.html',
		replace: true,
		link: function(scope, element, attr) {
			var sum = 0;
			for (var i = 0; i < 3; i++) {
				sum += scope.x.meal[i];
			}
			if (scope.x.others) {
				for (var i = 0; i < scope.x.others.length; i++) {
					sum += scope.x.others[i].price;
				}
			}
			scope.daySum = sum;
		}
	}
});