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

  app.controller('loginController', function($scope,http) {
    $scope.login = function() {
      console.log($scope.email + "\n" + $scope.password)
      $scope.showPassword = false;
    }
  }),

  app.controller('registerController', function($scope, http) {
    $scope.register = function() {
      console.log($scope.vezetekNev + "\n" + $scope.keresztNev +  "\n" + $scope.email + "\n" + $scope.jelszo)
      http.request({
        url:"./php/mw.php"
      })
      .then(response => {
        response.last_name = $scope.last_name;
        response.first_name = $scope.first_name;
        response.email = $scope.email;
        response.password = $scope.password;
        $scope.$applyAsync();
      })
      .catch(e => console.log(e))
    }
  }),

  app.controller('moviesController', function($scope,http) {
    $scope.movies = function() {
      http.request({
        url:"./php/movies.php"
      })
    }

  })
	
})(window, angular);