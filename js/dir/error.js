var app = angular.module("tasksDirectives", []);

app.directive("error", function() {
	return {
		restrict: "E", // atrybut Element class
		template: "<div>Źle</div>"
	}
});