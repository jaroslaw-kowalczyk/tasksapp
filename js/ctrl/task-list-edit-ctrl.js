// var tasksApp = angular.module('tasksApp', []);

// tasksApp.controller('TaskListCtrl', function($scope) {
tasksApp.controller('TaskListEditCtrl', ['$scope', '$http', '$routeParams', 'TaskListFactory', function ($scope, $http, $routeParams, TaskListFactory) {
	$scope.lists = [];
	$scope.listId = $routeParams.listId;
	$scope.currentList = TaskListFactory.getById($scope.listId);

	$scope.save = function() {
		console.log($scope.currentList);
		$scope.currentList.name = document.getElementById("name").value;
		$scope.currentList.desc = document.getElementById("name2").value;
		
		TaskListFactory.set($scope.listId, $scope.currentList);
		history.go(-1);
	};
	$scope.remove = function(id) {
		$scope.currentList.tasks.splice(id, 1);	
	};
	$scope.add = function() {
		$scope.currentList.tasks.push({
			desc : document.getElementById("desc").value,
			done: document.getElementById("done").checked,
			email: document.getElementById("mail").value,
			phone: document.getElementById("phone").value,
			realisation: document.getElementById("date").value, 

		})
	};

}]);