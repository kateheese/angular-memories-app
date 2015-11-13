app.controller('NavController', ['$scope', '$http', '$location', '$rootScope', function($scope, $http, $location, $rootScope) {
  $http.get('http://galvanize-service-registry.cfapps.io/api/v1/cohorts/g12/kids-these-days').then(function(response){
    $rootScope.url = response.data.data[0].attributes.url
    $http.get($rootScope.url + '/api/v1/memories/years').then(function(response){
      $scope.years = response.data.data;
    })
  });
}])

app.controller('HomeController', ['$scope', '$http', '$rootScope', function($scope, $http, $rootScope) {
  $rootScope.$watch('url', function(){
    $http.get($rootScope.url + '/api/v1/memories').then(function(response){
      $scope.allMemories = response.data.data;
    })
  })


  $scope.postMemory = function () {
    $http.post($rootScope.url + '/api/v1/memories', {
      "data": {
        "type": "memory",
        "attributes": {
          "old_days": $scope.newMemory.old,
          "these_days": $scope.newMemory.these,
          "year": $scope.newMemory.year
        }
      }
    }).then(function(response) {
      $scope.newMemory = {};
    })
  }
}])

app.controller('YearController', ['$scope', '$http', '$routeParams', '$rootScope', function($scope, $http, $routeParams, $rootScope) {
  $rootScope.$watch('url', function(){
    $http.get($rootScope.url + '/api/v1/memories/' + $routeParams.year).then(function(response){
      $scope.allMemories = response.data.data;
      $scope.year = $routeParams.year;
    })
  })
}])