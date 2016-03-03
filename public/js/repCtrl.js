angular.module('repApp').controller('repCtrl', function ($scope, repService) {

    $scope.states = repService.getStates();

    $scope.data = {};
    $scope.selectedRep = null;

    // GET REP DATA //
    $scope.getRepData = function () {
        $scope.loaded = false;
        $scope.selectedRep = null;

        if (!$scope.data.type || !$scope.data.state) {
            $scope.err = true;
            console.log('INPUT ERROR - INVALID SELECTION');
            return false;
        }
        $scope.err = false;
        repService.getRepData($scope.data).then(function (response) {
            $scope.loaded = true;
            $scope.type = response.type;
            $scope.reps = response.results;
        })
    };

    // REP DETAILS //
    $scope.repDetails = function (rep) {
        $scope.selectedRep = rep;

        var tempNameArr = $scope.selectedRep.name.split(' ');
        $scope.selectedRep['first'] = tempNameArr[0];
        $scope.selectedRep['last'] = tempNameArr[tempNameArr.length - 1];

        if ($scope.selectedRep.district.indexOf('Seat') === -1 && $scope.selectedRep.district.indexOf('District') === -1) {
            $scope.selectedRep.district = 'District ' + $scope.selectedRep.district;
        }
    }


});