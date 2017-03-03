


app.controller("logincontroller", ['$scope', 'questionFactory', '$location', function($scope, questionFactory, $location){


  questionFactory.getuser(function(response){
    $scope.username = response
    })

  if ($scope.username){
    $location.url('/qindex')
    }

  $scope.login = function(){
    //console.log($scope.username)
    questionFactory.login($scope.username)
    $location.url('/qindex')
    }

}])
