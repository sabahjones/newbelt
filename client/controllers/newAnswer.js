
app.controller("newanswer", ['$scope', 'questionFactory', '$location', '$routeParams', function($scope, questionFactory, $location, $routeParams){

  questionFactory.getuser(function(response){
    $scope.username = response
  })

  if(!$scope.username){
    //$location.url('/')
  }

  questionFactory.getoneq($routeParams.id, function(response){
    $scope.oneq = response[0]
  })

  $scope.addAnswer = function(q_id){
    if ($scope.answer.text.length < 5) {
      $scope.validate = "answer must be at least 5 characters"
    }
    else {
      questionFactory.addanswer(q_id, $scope.answer)
      $scope.validate = ""
      $scope.answer = {}
    }
  }

}])
