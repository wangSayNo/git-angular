define(function(require, exports, module){
	console.log("app.js");
	var angular = require("angular");
	var app = angular.module("App",["ui.router"]);
	module.exports = app;
});