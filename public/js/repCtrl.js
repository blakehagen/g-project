angular.module('repApp').controller('repCtrl', function ($scope, repService) {

    $scope.states = repService.getStates();

    $scope.data = {};

    $scope.getRepData = function () {
        console.log($scope.data);
        repService.getRepData($scope.data).then(function (response) {
            console.log(response);
            $scope.reps = response;
        })
    };


    $scope.repDetails = function (rep) {
        $scope.selectedRep = rep;
        var tempNameArr = $scope.selectedRep.name.split(' ');
        $scope.selectedRep['first'] = tempNameArr[0];
        $scope.selectedRep['last'] = tempNameArr[tempNameArr.length - 1];
    }






});