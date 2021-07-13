angular.module('headerComponent', ['ngRoute']);

angular.
    module('headerComponent').
    component('headerComponent', {  // This name is what AngularJS uses to match to the `<phone-list>` element.
        templateUrl: 'components/header/header.template.html',
        /*controller: ['$http', 
        function phoneListController($http) {
          var self = this;          
          $http.get('phones/phones.json').then(function(response) {
            console.log(response);
            // self.phones = response.data.slice(0,5);
            self.phones = response.data;
          });          
          //this.orderProp = 'age'; // Setting up the default value

        }]*/
        // controller: ['headerComponent', 
        // function phoneListController(Phone) {        
        // //   this.phones = Phone.query();
        // //   this.orderProp = 'age';
        // }]
        controller: function headerComponentController($scope, $rootScope) {        
        //   this.phones = Phone.query();
        //   this.orderProp = 'age';
        $scope.userName = "Rajive";
        }
    });