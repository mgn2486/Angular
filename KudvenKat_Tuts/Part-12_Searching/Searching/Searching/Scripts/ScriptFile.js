/// <reference path="angular.min.js" />



// **************************   FILTERS  SEARCHING IN ANGULAR  ********************************************


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

        $scope.reverseSort = false;

        $scope.sortData = function(column) {
            $scope.reverseSort = ($scope.sortColumn == column) ? !$scope.reverseSort : false;
            $scope.sortColumn = column;
        }

        $scope.getSortClass = function (column) {
            if ($scope.sortColumn == column) {
                return $scope.reverseSort ? 'arrow-down' : 'arrow-up'
            }
            return '';
        }

    });




