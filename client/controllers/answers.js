


app.controller("answercontroller", ['$scope', 'questionFactory', '$location', '$routeParams', function($scope, questionFactory, $location, $routeParams){

  questionFactory.getuser(function(response){
    $scope.username = response
  })

  if(!$scope.username){
    //$location.url('/')
  }

  questionFactory.getoneq($routeParams.id, function(response){
    $scope.oneq = response[0]
    $scope.answers = $scope.oneq.answers
    console.log($scope.oneq)
    console.log($scope.answers)
  })

  $scope.addlike = function(id, $index){
    console.log(id, $index)
    $scope.answers[$index].likes += 1
    questionFactory.updatelikes(id, $scope.answers.likes)
  }
}])
