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
                //                    { name: "London" },
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

// ---------------   Lesson 7 Handling events in ANGULAR JS -----------------------------
/*var myApp1 = angular
    .module("myModule", [])
    .controller("myController", function ($scope) {
        //This technolioges variable is our model
        var technologies = [
            {
                name: "C#",
                likes: 0,
                dislikes: 0
            },
            {
                name: "ASP.NET",
                likes: 0,
                dislikes: 0
            },
            {
                name: "SQL",
                likes: 0,
                dislikes: 0
            },
            {
                name: "AngularJS",
                likes: 0,
                dislikes: 0
            }
        ];

        $scope.technologies = technologies;

        $scope.incrementLikes = function(technolgy) {
            technolgy.likes++;
        }

        $scope.incrementDisLikes = function (technolgy) {
            technolgy.dislikes++;
        }
    });
*/

// ---------------   Lesson 8 ANGULAR JS FILTERS -----------------------------

var myApp1 = angular
    .module("myModule", [])
    .controller("myController",
        function($scope) {
            var employees = [
                { name: "Ben", DOB: "23/11/1980", gender: "", Salary: 5500.79, Salary: 5500.79 },
                { name: "Sara", DOB: "24/11/1980", gender: "", Salary: 590.79, Salary: 590.79 },
                { name: "Mark", DOB: "2/05/1980", gender: "", Salary: 57500.79, Salary: 57500.79 },
                { name: "Luke", DOB: "3/10/1980", gender: "", Salary: 55070.79, Salary: 55070.79 },
                { name: "John", DOB: "25/09/1980", gender: "", Salary: 75500.79, Salary: 75500.79 },
                { name: "Mary", DOB: "13/01/1980", gender: "", Salary: 5500.79, Salary: 5500.79 }
            ];

            $scope.employees = employee;

        }); 