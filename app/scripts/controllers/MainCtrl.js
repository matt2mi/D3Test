
var MainCtrl = ['$scope','listData', function($scope, listData) {

    $scope.title = "titre";
    $scope.list = null;
    $scope.myData = [10,20,30,40,60,80,20,50];

    $scope.initList = function()
    {
        var list = new listData();
        list.setList();
        $scope.list = list.getList();
        console.log($scope.myData);
    };
}];

angular.module('controllers').controller('MainCtrl', MainCtrl);