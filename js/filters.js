var accountFilters = angular.module('accountFilters',[]);

accountFilters.filter('removeNull', function() {
	return function nullFilter(input) {
		if(input == 0) {
			return 0;
		}
	    return input || '无';
	}
});