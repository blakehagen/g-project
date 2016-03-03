angular.module('repApp').controller('repCtrl', function($scope, repService){
    
    $scope.states = repService.getStates();
    
    $scope.data = {};
    
    $scope.getRepData = function(){
        console.log($scope.data);
        repService.getRepData($scope.data).then(function(response){
            console.log(response);
        })
    }
    
    
    

    
    
});