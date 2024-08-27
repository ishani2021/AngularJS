var app=angular.module("myApp",[]); 
            app.controller("myCntrl",function($scope){
                $scope.studlist=[
                   {'USN':'1BI21CS120','NAME':'RAM','DEPT':'CSE','SEMESTER':8,'MARKS':99},
                     {'USN':'1BI21CS121','NAME':'SHYAM','DEPT':'CSE','SEMESTER':7,'MARKS':90},
                     {'USN':'1BI21CS122','NAME':'GOPAL','DEPT':'CSE','SEMESTER':6,'MARKS':79},
                     {'USN':'1BI21CS123','NAME':'MOHAN','DEPT':'CSE','SEMESTER':5,'MARKS':90}]
            });
