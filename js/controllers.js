app.controller('NavController', ['$scope', '$http', '$location', function($scope, $http, $location) {
  $http.get('http://g12-kate-heese-memories.cfapps.io/api/v1/memories/years').then(function(response){
    $scope.years = response.data.data;
  });
}])

app.controller('HomeController', ['$scope', '$http', function($scope, $http) {
  $http.get('http://g12-kate-heese-memories.cfapps.io/api/v1/memories').then(function(response){
    $scope.allMemories = response.data.data;
  });

  $scope.postMemory = function () {
    $http.post('http://g12-kate-heese-memories.cfapps.io/api/v1/memories', {
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

app.controller('YearController', ['$scope', '$http', '$routeParams', function($scope, $http, $routeParams) {
  $http.get('http://g12-kate-heese-memories.cfapps.io/api/v1/memories/' + $routeParams.year).then(function(response){
    $scope.allMemories = response.data.data;
    $scope.year = $routeParams.year;
  });
}])