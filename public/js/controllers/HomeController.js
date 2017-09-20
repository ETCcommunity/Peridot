angular.module('BlocksApp').controller('HomeController', function($rootScope, $scope, $http, $timeout) {
    $scope.$on('$viewContentLoaded', function() {
        // initialize core components
        App.initAjax();
    });

    var URL = '/data';

    $rootScope.isHome = true;

    $scope.reloadBlocks = function() {
      $scope.blockLoading = true;
      $http({
        method: 'POST',
        url: URL,
        data: {"action": "latestdevice"}
      }).success(function(data) {
        $scope.blockLoading = false;
        $scope.latestdevice = data.device;
      });
    }


      $scope.reloadBlocks();
     $scope.blockLoading = false;
})
