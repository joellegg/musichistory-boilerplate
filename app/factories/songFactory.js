app.factory('songFactory', function($http) {
  return {
    getSongs: () => {
      return $http.get('/json/music.json');
    }
  }
})
