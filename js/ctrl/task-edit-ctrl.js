// var tasksApp = angular.module('tasksApp', []);

// tasksApp.controller('TaskListCtrl', function($scope) {
tasksApp.controller('TaskEditCtrl', ['$scope', '$http', '$routeParams', 'TaskListFactory', function ($scope, $http, $routeParams, TaskListFactory) {
	$scope.listId = $routeParams.listId;
	$scope.taskId = $routeParams.taskId;
	$scope.task = TaskListFactory.getSingleTask($scope.listId, $scope.taskId);
	
	$scope.save = function(opts){
		$scope.task.desc = document.getElementById("desc").value;
		$scope.task.done = document.getElementById("done").checked;
		$scope.task.email = document.getElementById("mail").value;
		$scope.task.phone = document.getElementById("phone").value;
		$scope.task.realisation = document.getElementById("date").value;
	}
}]);