var tasksControllers = angular.module('tasksControllers', []);

// tasksApp.controller('TaskListCtrl', ['$scope','$http','TaskListFactory', function ($scope, $http, TaskListFactory) {
tasksControllers.controller('TaskListCtrl', function ($scope, TaskListFactory) {
	console.log(TaskListFactory.isJsonLoaded());

	$scope.lists = [];
	$scope.init = function () {
		if(TaskListFactory.isJsonLoaded() == false) {
			TaskListFactory.getTaskLists();
		}
		$scope.lists = TaskListFactory.getAll();
	}
	$scope.init();

	$scope.remove = function(index) {
		$scope.lists.splice(index, 1);
	}
	$scope.addList = function() {
		$scope.lists.push({
			name: $scope.newList.name,
			desc: $scope.newList.desc,
			tasks : []
		});
		TaskListFactory.setTaskLists($scope.lists);
	}
});