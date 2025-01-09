;(function(window, angular) {

  'use strict';

  // Application module
	angular.module('app', [
		'ui.router',
    'app.common'
	])

	// Application config
	.config([
    '$stateProvider', 
    '$urlRouterProvider', 
    function($stateProvider, $urlRouterProvider) {

      $stateProvider
      .state('root', {
        views: {
          '': {
            templateUrl: './html/root.html'
          },
          'header@root': {
            templateUrl: './html/header.html'
          },
          'footer@root': {
            templateUrl: './html/footer.html'
          }
        }
      })
			.state('add', {
				url: '/add',
        parent: 'root',
				template: '<h1 class="text-center mt-5 display-1">Állatat felvétele</h1>'
			})
      .state('list', {
				url: '/list',
        parent: 'root',
				template: '<h1 class="text-center mt-5 display-1">Állatok megjelenítése</h1>'
			});
      
      $urlRouterProvider.otherwise('/add');
    }
  ]);
	
})(window, angular);