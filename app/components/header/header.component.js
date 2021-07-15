angular.module('headerComponent', ['ngRoute', ]);

angular.
    module('headerComponent').
    component('headerComponent', {  // This name is what AngularJS uses to match to the `<phone-list>` element.
        templateUrl: 'components/header/header.template.html',
        controller: function headerComponentController($scope, $rootScope, $http) {        
          var self = this;          
          $http.get('./data/users/users.json').then(function(response) {
            
            //console.log(response.data);
            var userData = response.data;
            

            // Selecting a random user between 3 users
            var randomUser = Math.floor(Math.random() * 3);
            $scope.userName = userData[randomUser]["firstName"];
            $scope.profilePicture = userData[randomUser]["profileImage"];
            //$scope.userName = "Rajive";
          });          
        }
    });