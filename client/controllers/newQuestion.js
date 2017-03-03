/*
    /client/controllers/newQuestion.js
    The logic for new-item partial, will connect the factory with the template
*/
app.controller("newQuestion", function (questionFactory, $scope, $location) {
    console.log("newQuestion Controller here");

    questionFactory.getuser(function(response){
      $scope.username = response
    })

    if(!$scope.username){
      //$location.url('/')
    }


    $scope.addQuestion = function(){
      console.log($scope.question.text)
      console.log($scope.question.description)
      if ($scope.question.text.length < 10 ){
        $scope.validate = "question must be at least 10 characters long!"
        $location.url('/addquestion')
      }
      else {
        questionFactory.addquestion($scope.question)
        $scope.validate = ""
        $scope.question = {}
      }
    }
});
