'use strict';
var myApp=angular.module('sortableApp',['ui.sortable']);
				myApp.controller('courseController',function ($scope , $http)
				{
					$http.get("zaya.json").success(function(data)
					{
						$scope.addtopic=[{}];
						$scope.courses=data.slice();
						$scope.lessons=[{"title":"Algebra","remove":"images/remove.png","drag_drop_lesson":"Drag to add more lesson"}];
					

					$scope.sortableOptions ={
   							 connectWith: ".lessons",
   							 stop: function (e, ui)
   							 	{
    						 if ($(e.target).hasClass('first') && e.target != ui.item.sortable.droptarget) 
    							   {
      								 $scope.courses = data.slice();
      							   }
   								}
  					};
  					});
				});
		