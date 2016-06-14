angular.module('app.controllers', [])
.controller('pageCtrl', function($scope, $http) {
      var successCallback = function() {
        console.log("SUCCESS");
      }
    var errorCallback = function() {
      console.log("ERROR", arguments);
    }
  setInterval(function() {
    // 'Access-Control-Allow-Origin: http://cmmakerclub.com'
    $http.get('http://cmmakerclub.com').then(successCallback, errorCallback);
  }, 200);
})
