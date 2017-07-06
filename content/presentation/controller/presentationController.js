define(function(require){
	var app = require("app");
	app.controller("presentationController",["$scope",function($scope){
		$scope.name="张三丰";
	}]);
})