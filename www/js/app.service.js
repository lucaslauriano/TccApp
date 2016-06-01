(function() {
	'use strict';

	/**
	 * @ngdoc function
	 * @name app.factory:AppService
	 * @description
	 * # AppService
	 * Factory of the [app]
	 */

	angular
	  .module('app')
	  .factory('app.AppService', AppService);

	AppService.$inject = [
		'$firabaseArray'
	];

	function AppService($firabaseArray) {

	}
})();