angular.module('starter.controllers', [])

.controller('HomeCtrl', function($scope) {})

.controller('DizionarioCtrl', function($scope) {})

.controller('VocaboliCtrl', function($scope, Vocaboli) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.vocaboli = Vocaboli.all();
  
  /*
  $scope.data = {
    search: ''
  }

  $scope.search = function(){
                      
    var s = $scope.data.search.toLowerCase();
    
    if (s == ''){
        $scope.vocaboli = Vocaboli.list;
        return;
    }
    
    $scope.vocaboli = Vocaboli.list.filter(function(vocabolo){
      if (vocabolo.key.toLowerCase().indexOf(s) > -1 || vocabolo.termine.toLowerCase().indexOf(s) > -1 || vocabolo.senza.toLowerCase().indexOf(s) > -1 || vocabolo.traslitterazione.toLowerCase().indexOf(s) > -1){
          return true;
      } 
      return false;
    });
  }
  */

  $scope.remove = function(vocabolo) {
    Vocaboli.remove(vocabolo);
  };
})

.controller('VocaboloDetailCtrl', function($scope, $stateParams, Vocaboli) {
  $scope.vocabolo = Vocaboli.get($stateParams.vocaboloId);
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
