/*
    /client/controllers/qController.js
    The logic for items-index partial, will connect the factory with the template
*/
app.controller("qController", function (questionFactory, $scope, $location) {
    console.log("qController here");

  questionFactory.getuser(function(response){
    $scope.username = response
  })

  if(!$scope.username){
    //$location.url('/')
  }

  questionFactory.getquestions(function(response){
    $scope.questions = response
  })
});
