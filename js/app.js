var tasksApp = angular.module('tasksApp', ['ngRoute', 'tasksControllers', 'tasksFactories', 'tasksDirectives']);
tasksApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
    	when('/', {
        templateUrl: 'html/list-show.html',
        controller: 'TaskListCtrl'
      }).
      when('/list-edit/:listId', {
        templateUrl: 'html/list-edit.html',
        controller: 'TaskListEditCtrl'
      }).
      when('/task-edit/:listId/:taskId', {
        templateUrl: 'html/task-edit.html',
        controller: 'TaskEditCtrl'
      }).
      when('/author', {
        templateUrl: 'html/author.html',
        controller: 'AuthorCtrl'
      }).
      otherwise({
        redirectTo: '/'
      });
  }]);