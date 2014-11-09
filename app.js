(function(){
		  var app=angular.module('MOODLE',[]);	
		  var service="moodle_mobile_app";
		  var hostname="http://leowulf.selu.edu/moodle/";
	app.config(['$httpProvider', function($httpProvider) {
        $httpProvider.defaults.useXDomain = true;
        delete $httpProvider.defaults.headers.common['X-Requested-With'];
    }
]);

		 app.controller('LoginController',function($scope,$http,$location){
									$scope.user={username:'',password:''};
									$scope.submit=function(user){
												var link=hostname+'login/token.php?username='+user.username+'&password='+user.password+'&service='+service;
												//console.log(link);
												
										$http.get(link).success(function(data,status,headers,config,response){
											console.log(data);
										 }).error(function (data, status,response) {
									        console.log("Request Failed");
											console.log(status);
											return false;
										    });	
									};
								});
		  })();