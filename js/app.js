(function(){
	var app = angular.module('myApp', []);


	app.controller('formularioCtrl', function($scope) {
		

	    $scope.formData = {};
	    
	 	$scope.submitForm = function (formData) {
		    console.log('Form submitted with'+ "\n" + JSON.stringify(formData));
		  };

	  	

	});

	
})();
	