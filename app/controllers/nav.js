app.controller('navCtrl', function($scope, $location) {
  $scope.isCurrentTab =  (url) => url === $location.url();
})
