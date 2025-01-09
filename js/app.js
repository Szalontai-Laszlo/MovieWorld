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
			.state('home', {
				url: '/home',
        parent: 'root',
				templateUrl: './html/home.html'
			})
      .state('page1', {
				url: '/page1',
        parent: 'root',
				templateUrl: './html/page1.html'
			})

      .state('page2', {
				url: '/page2',
        parent: 'root',
				templateUrl: './html/page2.html'
			})

      .state('page3', {
				url: '/page3',
        parent: 'root',
				templateUrl: './html/page3.html'
			});

      
      $urlRouterProvider.otherwise('/home');
    },
  ])
	
})(window, angular);