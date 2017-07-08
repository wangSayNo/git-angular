define(function(require){
	//console.log('appRouter.js');
	var app = require('app');
	app.config(function($stateProvider,$urlRouterProvider){
		var baseUrl = "./";
		//如果没有路由引擎能匹配当前的导航状态，那它就会默认将路径路由至 default.html,它就像switch case语句中的default选项
		$urlRouterProvider.when("","/home/presentation");
		
		$stateProvider
			//这一行定义了会在main.html页面第一个显示出来的状态，作为页面被加载好以后第一个被使用的路由.
			.state("home",{
				url:"/home",
				templateUrl: baseUrl+"app/home.html"
			})
			//一级菜单
			.state("home.presentation",{ //介绍
				url:"/presentation",
				templateUrl: baseUrl+"content/presentation/presentation.html"
			})
			.state("home.expression", { //表达式
				url:"/expression",
				templateUrl: baseUrl+"content/expression/expression.html"
			})
			.state("home.module", { //模块
				url:"/module",
				templateUrl: baseUrl+"content/module/module.html"
			})
			.state("home.scope", { //作用域
				url:"/scope",
				templateUrl: baseUrl+"content/scope/scope.html"
			})
			.state("home.controller",{ //控制器
				url:"/controller",
				templateUrl: baseUrl+"content/controller/controller.html"
			})
			.state("home.filter", { //过滤器
				url:"/filter",
				templateUrl: baseUrl+"content/filter/filter.html"
			})
			.state("home.service", { //服务
				url:"/service",
				templateUrl: baseUrl+"content/service/service.html"
			})
			.state("home.directive", { //指令
				url:"/directive",
				templateUrl: baseUrl+"content/directive/directive.html"
			})
			.state("home.promise", { // 相关话题 $q promise
				url:"/promise",
				templateUrl: baseUrl+"content/other/promise.html"
			})
			.state("home.http", { // 相关话题 $http
				url:"/http",
				templateUrl: baseUrl+"content/other/http.html"
			})
			;
			
	});
});

/*

//Menu二级菜单
        .state("PageTab.Menu.menu1", {
            url:"/menu1",
            templateUrl: "temp/menu1.html"
        })
        .state("PageTab.Menu.menu2", {
            url:"/menu2",
            templateUrl: "temp/menu2.html"
        })
        .state("PageTab.Menu.menu3", {
            url:"/menu3",
            templateUrl: "temp/menu3.html"
        })
        .state("PageTab.Menu.menu4", {
            url:"/menu4",
            templateUrl: "temp/menu4.html"
        })
        //fengshui三级菜单
         .state("PageTab.Menu.menu4.fs_01", {
            url:"/fs_01",
            templateUrl: "temp/fengshui/fs_01.html"
        })
         .state("PageTab.Menu.menu4.fs_02", {
            url:"/fs_02",
            templateUrl: "temp/fengshui/fs_02.html"
        })
         .state("PageTab.Menu.menu4.fs_03", {
            url:"/fs_03",
            templateUrl: "temp/fengshui/fs_03.html"
        })

*/