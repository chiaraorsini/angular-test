//IIFE - immediately invoked function execution
(function () {

    'use strict';

    angular.module('LunchCheck', [])
        .controller('LunchCheckController', LunchCheckController);

    LunchCheckController.$inject = ['$scope']
    function LunchCheckController ($scope) {
        $scope.lunch_message = "";

        $scope.displayLunchMessage = function () {

            $scope.lunch_message = computeMessage($scope.dishes);
        };

        function computeMessage(string) {

            if (!string) {
                return "Please enter data first";
            }

            var num_items = computeItems(string);

            if (num_items < 4) {
                return "Enjoy!";
            }
            else {
                return "Too much!";
            }

        }

        function computeItems (string) {
            var items = string.split(',');
            var len = items.length;

            // do not count empty items
            for (var entity in items) {
                var a = items[entity].trim();
                if(a.length == 0) {
                    len--;
                }
            }
            return len;
        }
    }

})();
