;(function(window, angular) {

  'use strict';

  // Application module
	const app = angular.module('app', [
		'ui.router',
    'app.common'
	]);

	// Application config
	app.config([
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

      .state('login', {
				url: '/login',
        parent: 'root',
				templateUrl: './html/login.html',
        controller: 'loginController'
			})

      .state('register', {
				url: '/register',
        parent: 'root',
				templateUrl: './html/register.html'
			});
    
      $urlRouterProvider.otherwise('/home');
    },
  ])

  app.controller('loginController', function($scope) {
    $scope.login = function() {
      console.log($scope.password + "\n" + $scope.email)
    }
  })
	
})(window, angular);