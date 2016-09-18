var accountAPP = angular.module('accountAPP', ['ui.router', 'accountCtrl', 'accountDrirective', 'accountFilters']);

accountAPP.run(function($templateCache) {
	$templateCache.put('oneday.html', 'tpl/oneday.html');
});

accountAPP.config(function($stateProvider, $urlRouterProvider) {
	$urlRouterProvider.otherwise('index/blockmode');
	$stateProvider
		.state('index', {
			url: '/index',
			views: {
				'': {
					templateUrl: 'tpl/index-tpl.html'
				}
			}
		})
		.state('index.blockmode', {
			url: '/blockmode',
			views: {
				'': {
					templateUrl: 'tpl/index.blockmode-tpl.html'
				},
				'statisic@index.blockmode': {
					templateUrl: 'tpl/index-statisic-tpl.html'
				},
				'otherItem@index.blockmode': {
					templateUrl: 'tpl/index-otherItem-tpl.html'
				}
			}
		})
		.state('index.tablemode', {
			url: '/tablemode',
			templateUrl: 'tpl/index.tablemode-tpl.html'
		})
		.state('typelist', {
			url: '/typelist',
			views: {
				'': {
					templateUrl: 'tpl/typelist-tpl.html'
				}
			}
		})
		.state('grid', {
			url: '/grid',
			views: {
				'': {
					templateUrl: 'tpl/typelist-grid.html'
				}
			}
		})
});