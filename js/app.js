//IIFE - immediately invoked function execution
(function () {

    'use strict';


    angular.module('DIApp', [])
        .controller('DIController', DIController);

    function DIController ($scope, $filter, $injector) {
        $scope.name = "Test";

        $scope.upper = function () {
            var upCase = $filter('uppercase');
            $scope.name = upCase($scope.name);
        };

        console.log($injector.annotate(DIController));
    }

    function annotateMe(name, job, blah) {
        return "blah";
    }


    // angular.module('NameCalculator', [])
    // .controller('NameCalculatorController', function ($scope) {
    //     // $scope --> allow for properties to be exposed on the view
    //     $scope.name = "";
    //     $scope.total_val = 0;

    //     // display the numeric value
    //     $scope.displayNumeric = function (argument) {
    //         var totalNameValue = calculateNumericForString($scope.name);
    //         $scope.total_val = totalNameValue;
    //     };

    //     // compute the numeric value
    //     function calculateNumericForString(string) {
    //         var totalStringValue = 0;
    //         for (var i = 0; i < string.length; i++) {
    //             totalStringValue += string.charCodeAt(i);
    //         }
    //         return totalStringValue;
    //     }
    // });

})();
