'use strict';

module.exports = function() {

	/*
	 * This directive shows a gravatar with the specified email attribute
	 *
	 * @example
	 * <img tb-gravatar email="mauri@myyra.com">
	 */

	var crypto = require('crypto');

	return {
		template: '<img ng-src="{{ url }}" class="gravatar">',
		scope: {
			email: '=email'
		},
		link: function(scope) {
			scope.$watch('email', function(val) {
				if(val !== undefined && val !== null && val !== '') {
					if(!scope.hash) {
						scope.hash = crypto.createHash('md5')
							.update(scope.email)
							.digest('hex');
					}

					scope.url = 'http://gravatar.com/avatar/' +
						scope.hash + '?d=monsterid';
				}
			});
		},
		replace: true
	}
}
