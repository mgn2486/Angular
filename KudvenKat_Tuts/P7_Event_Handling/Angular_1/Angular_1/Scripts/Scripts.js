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

                var myApp1 = angular
                    .module("myModule", [])
                    .controller("myController", function ($scope) {
                        var countries = [
                            {
                                name: "UK",
                                cities: [
                                    { name: "London" },
                                    { name: "Manchester" },
                                    { name: "Birmhingham" }
                                ]
                            },
                            {
                                name: "South Africa",
                                cities: [
                                    { name: "East London" },
                                    { name: "Johannesburg" },
                                    { name: "Polokwane" }
                                ]
                            },
                            {
                                name: "India",
                                cities: [
                                    { name: "Chennai" },
                                    { name: "Hyderabad" },
                                    { name: "Mumbai" }
                                ]
                            }
                        ];

                        $scope.countries = countries;
                    });

