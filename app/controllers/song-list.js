app.controller('SongListCtrl', function($scope, songFactory) {
  songFactory
  .getSongs()
  .then(function(val) {
    $scope.songs = val.data.music;
    // console.log('songs', val.data.music);
  });
})
