/// <reference path="angular.min.js" />

/*
var myApp = angular.module("myModule", []);

var functionName = function($scope) {
    $scope.message = "Angular Js Tutorial";
};

// Registering a controller with a module 

            myApp.controller("myController", function ($scope) {

                var employee = {
                    firstName: "Massy",
                    lastName: "Gomba",
                    gender: "Male"
                };
    
                $scope.employee = employee;
            }); 

            */


//USING METHOD CHAINING TO JOIN ALL COMPONENTS TOGETHER

            /*
            var myApp = angular
                              .module("myModule", [])
                              .controller("myController", function ($scope) {
                                       var employee = {
                                         firstName: "Massy G",
                                         lastName: "Gomba",
                                         gender: "Male"
                                      };
                      
                                    $scope.employee = employee;
                               });
            */


// BINDING EXPRESSIONS

            //var myApp = angular
            //    .module("myModule", [])
            //    .controller("myController",
            //        function($scope) {
            //            var country = {
            //                name: "South-Africa",
            //                capital: "Pretoria",
            //                flag: "../images/South-African-Flag.jpg"
            //            };

            //            $scope.country = country;
            //        });


// TWO WAY DATA BINDING

            //var myApp1 = angular
            //    .module("myModule", [])
            //    .controller("myController", function ($scope) {
            //        $scope.message = "Hello Angular1";
            //    });

// TWO WAY DATA BINDING WITH COMPLEX OIBJECTS

            //var myApp1 = angular
            //    .module("myModule", [])
            //    .controller("myController", function ($scope) {
            //        var employee = {
            //            firstName: "Massy",
            //            lastName : "Ndadzibaya",
            //            age : "20"
            //        };

            //        $scope.employee = employee;
            //    });


// LESSON 6 - NG-REPEAT Directive 

                //var myApp1 = angular
                //    .module("myModule", [])
                //    .controller("myController", function ($scope) {
                //        var employees = [
                //            { firstName: "Massy", lastName: "Ndadzibaya", age: "20" },
                //            { firstName: "James", lastName: "gombs", age: "20" },
                //            { firstName: "Lyndre", lastName: "Johns", age: "65" },
                //            { firstName: "Jacky", lastName: "Ruppet", age: "23" }
                //        ];

                //        $scope.employees = employees;
                //    });


      //-----------    Nesting NG-DIRECTIVES  ---------------------

                //var myApp1 = angular
                //    .module("myModule", [])
                //    .controller("myController", function ($scope) {
                //        var countries = [
                //            {
                //                name: "UK",
                //                cities: [
                //                    { name: "Londoon" },
                //                    { name: "Manchester" },
                //                    { name: "Birmhingham" }
                //                ]
                //            },
                //            {
                //                name: "South Africa",
                //                cities: [
                //                    { name: "East London" },
                //                    { name: "Johannesburg" },
                //                    { name: "Polokwane" }
                //                ]
                //            },
                //            {
                //                name: "India",
                //                cities: [
                //                    { name: "Chennai" },
                //                    { name: "Hyderabad" },
                //                    { name: "Mumbai" }
                //                ]
                //            }
                //        ];

                //        $scope.countries = countries;
                //    });



//-----------    Events in Angular  ---------------------

//var myApp = angular
//            .module("myModule", [])
//            .controller("myController", function ($scope) {
//                var technologies = [
//                    { name:"C#", likes:0, dislikes: 0 },
//                    { name:"Java", likes:0, dislikes: 0 },
//                    { name:"Android", likes:0, dislikes: 0 },
//                    { name:"Angular", likes:0, dislikes: 0 }
//                ];

//                $scope.technologies = technologies;

//                $scope.incrementLikes = function(technology) {
//                    technology.likes++;
//                }

//                $scope.incrementDislikes = function (technology) {
//                    technology.dislikes++;
//                }

//            });





// **************************   FILTERS IN ANGULAR  ********************************************


var myApp = angular
    .module("myModule", [])
    .controller("myController", function($scope) {

        var employees = [
            { name: "Ben", dateOfBirth: new Date("November 23, 1980"), gender: "Male", salary: 55000.788 },
            { name: "River", dateOfBirth: new Date("May 24, 1986"), gender: "Male", salary: 68000 },
            { name: "Mary", dateOfBirth: new Date("June 23, 1980"), gender: "female", salary: 57000 },
            { name: "Roy", dateOfBirth: new Date("July 23, 1980"), gender: "Male", salary: 53000 },
            { name: "Lyndra", dateOfBirth: new Date("December 23, 1980"), gender: "Male", salary: 56000 }
        ];

        $scope.employees = employees;

        $scope.rowLimit = 3;

        $scope.sortColumn = "name";
    });




