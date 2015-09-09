var app = angular.module('msNGr', []);

app.controller('HeaderController', ['$scope', function($scope){
  $scope.title = "msNGr",
  $scope.tagLine = "Facebook combined with Twitter... but not really"
}]);

app.controller('MessageController', ['$scope', function($scope){
  $scope.messages =
  [
    {
      user: "Tom",
      date: new Date('2015', '09', '09'),
      image:'https://pixabay.com/static/uploads/photo/2015/04/22/20/18/internet-735262_640.png',
      text: 'Backbone suuuuuuuucks',
      likes: 0
    },
    {
      user: "James",
      date: new Date('2015', '09', '09'),
      image: 'https://pixabay.com/static/uploads/photo/2015/04/23/17/41/node-js-736399_640.png',
      text: "No it does not, Angular sucks",
      likes: 0
    },
    {
      user: "Tristan",
      date: new Date('2015', '09', '09'),
      image: 'https://pixabay.com/static/uploads/photo/2014/07/24/08/42/web-400853_640.jpg',
      text: "I suuuuuuuuck",
      likes: 0
    }
  ],
  $scope.plusLike = function(index) {
    $scope.messages[index].likes += 1;
  };
  $scope.minusLike = function(index) {
    $scope.messages[index].likes -= 1;
  };
}]);
