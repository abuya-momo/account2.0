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

function calculateOneDayOtherOutput(scope, element, attr) {//计算一天其他支出的总和
	var sum = 0;
	if (scope.x.others) {
		for (var i = 0; i < scope.x.others.length; i++) {
			sum += scope.x.others[i].price;
		}
	}
	return sum;
}





app.directive('onedayblock', function() {
	return {
		restrict: 'EA',
		templateUrl: 'tpl/onedayblock.html',
		replace: true,
		link: function (scope, element, attr) {//计算一天的总和
			var sum = 0;
			for (var i = 0; i < 3; i++) {
				sum += scope.x.meal[i];
			}
			sum += calculateOneDayOtherOutput(scope, element, attr);
			scope.daySum = sum;
			scope.$parent.monthSum += sum;
			if(scope.$last == true) {
				scope.$emit('monthSumEvent', scope.$parent.monthSum);
			}
		}
	}
});

app.directive('onedaytr', function() {
	return {
		restrict: 'EA',
		templateUrl: 'tpl/onedaytr.html',
		scope: {
			monthSum: '=',
			m: '='
		},
		link: function(scope, element, attr) {
			var otherOutput = 0;
			if (scope.m.others) {
				for (var i = 0; i < scope.m.others.length; i++) {
					otherOutput += scope.m.others[i].price;
				}
			}
			scope.otherOutput = otherOutput;
			//////////////////////////////////////////////////////////
			var sum = 0;
			for (var i = 0; i < 3; i++) {
				sum += scope.m.meal[i];
			}
			sum += otherOutput;
			scope.daySum = sum;
			scope.$parent.$parent.monthSum += sum;
		}
	}
});