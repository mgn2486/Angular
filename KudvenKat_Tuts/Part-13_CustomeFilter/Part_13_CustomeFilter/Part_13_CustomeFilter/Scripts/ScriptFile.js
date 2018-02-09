/// <reference path="angular.min.js" />



// **************************   FILTERS  SEARCHING IN ANGULAR  ********************************************


var myApp = angular
    .module("myModule", [])
    .filter("gender", function () {
        return function (gender) {
            switch (gender) {
            case 1:
                return "Male";
            case 2:
                return "female";
            case 3:
                return "Not specified";
            }

        }
    })
    .controller("myController", function($scope) {

        var employees = [
            { name: "Ben", dateOfBirth: new Date("November 23, 1980"), gender: 1, salary: 55000.788 },
            { name: "River", dateOfBirth: new Date("May 24, 1986"), gender: 1, salary: 68000 },
            { name: "Mary", dateOfBirth: new Date("June 23, 1980"), gender: 2, salary: 57000 },
            { name: "Roy", dateOfBirth: new Date("July 23, 1980"), gender: 1, salary: 53000 },
            { name: "Lyndra", dateOfBirth: new Date("December 23, 1980"), gender: 3, salary: 56000 }
        ];

        $scope.employees = employees;

    });