var tasksFactory = angular.module('tasksFactories', []);

tasksFactory.factory('TaskListFactory', function($http) {
	var taskList = [];
	var jsonLoaded = false;
	return {
		getTaskLists : function() {
			return $http.get('json/lists.json').success(function(res){
				if(jsonLoaded == false) {
					for(var i in res) {
						taskList.push(res[i]);
					}
					jsonLoaded = true;
				}
			})		
		},
		setTaskLists : function(taskList) {
			taskList = taskList;
		},
		set: function(id, data) {
			taskList[id] = data;
		},
		getAll : function () {
			return taskList;
		},
		getById : function(id) {
			return taskList[id];
		},
		getSingleTask : function(listId, taskId) {
			return taskList[listId].tasks[taskId];
		},
		isJsonLoaded : function() {
			return jsonLoaded;
		}
	};
});