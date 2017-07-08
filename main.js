/*此时的路径是参考js文件夹*/
require.config({
  baseUrl: "js/",
  /* 加了baseUrl，baseUrl的路径是以引入require.js的html文件所在的目录为基准 */
  paths:  {
    'css': 'css',
    'jquery': 'jquery.min',
	'bootstrap-min': 'bootstrap.min',
    'angular': 'angular.min',
	'angular-route': 'angular-ui-router',
	'app': '../app/app'
	
  },
  shim: {
    'jquery': {
      'deps': ['css!./../css/bootstrap.min.css','css!./../css/common.css']
    },
	'bootstrap-min': {
		deps:['jquery'],
	},
	'angular':{
		deps:['bootstrap-min'],
		exports:'angular'
	},
	'angular-route':{
		deps:['angular'],
		exports: 'angular-router'
	},
	'app': {
		deps:['angular-route'],
	}
  }

});


/*require加载完毕就需要立刻执行的操作可以放在这里*/
require(['angular','jquery','app','../app/javascript/appRouter'],function(angular){
	angular.element(document).ready(function(){
		angular.bootstrap(document,["App"]);
		angular.element(document).find('html').addClass('ng-app');
	});
	//console.log("main.js");
});
