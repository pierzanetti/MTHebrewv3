angular.module('starter.controllers', [])

.controller('HomeCtrl', function($scope) {})

//.controller('DizionarioCtrl', function($scope) {})

.controller('VocaboliCtrl', function($scope, Vocaboli) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.vocaboli = Vocaboli.all();
  $scope.remove = function(vocabolo) {
    Vocaboli.remove(vocabolo);
  };
})

.controller('VocaboloDetailCtrl', function($scope, $stateParams, Vocaboli) {
  $scope.vocabolo = Vocaboli.get($stateParams.vocaboloId);
})

.controller('SintassiCtrl', function($scope) {})
.controller('FoneticheCtrl', function($scope, Fonetiche) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.fonetiche = Fonetiche.all();
  $scope.remove = function(fonetica) {
    Fonetiche.remove(fonetica);
  };
})

.controller('FoneticaDetailCtrl', function($scope, $stateParams, Fonetiche) {
  $scope.fonetica = Fonetiche.get($stateParams.foneticaId);
})

.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
