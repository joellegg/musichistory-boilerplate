app.config(function ($routeProvider, $locationProvider) {
  $locationProvider.hashPrefix('');

  $routeProvider
  .when('/', {
    controller: 'SongListCtrl',
    templateUrl: 'partials/song-list.html'
  })
  .when('/detail', {
    controller: 'DetailsCtrl',
    templateUrl: 'partials/song-details.html'
  })
  .otherwise({
    redirectTo: '/'
  })
})
