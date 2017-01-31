app.factory('songFactory', function($http) {
  let userSelectedSong = {};

  return {
    getSongs: () => {
      return $http.get('/json/music.json');
    }
  }
})
