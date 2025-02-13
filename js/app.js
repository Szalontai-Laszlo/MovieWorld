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

      .state('movies', {
				url: '/movies',
        parent: 'root',
        controller: "moviesController",
				templateUrl: './html/movies.html'
			})

      .state('register', {
				url: '/register',
        parent: 'root',
        controller: 'registerController',
				templateUrl: './html/register.html',
			})

      .state('login', {
				url: '/login',
        parent: 'root',
        controller: 'loginController',
				templateUrl: './html/login.html'
			});
    
      $urlRouterProvider.otherwise('/home');
    }
  ])

  app.controller('loginController', function($scope) {
    $scope.login = function() {
      console.log($scope.email + "\n" + $scope.password)
      $scope.showPassword = false;
    }
  }),

  app.controller('registerController', function($scope) {
    $scope.register = function() {
      console.log($scope.last_name + "\n" + $scope.first_name + "\n" + $scope.born + "\n" + $scope.email + "\n" + $scope.password)
      $scope.showPassword = false;
    }
  }),

  app.controller('moviesController', function($scope) {
      $scope.items = ['Első elem', 'Második elem', 'Harmadik elem', 'Negyedik elem'];
      $scope.title = ['A Csodálatos Pókember','','','',''];
  })
	
})(window, angular);