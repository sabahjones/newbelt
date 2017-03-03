/*
    /client/factories/item.js
    The "Client Side DB" / connection between the client and the server (where the client can request additional data)
*/
app.factory("questionFactory", function ($http, $location) {

    console.log("Created Question Factory");

    var factory = {};
    var questions = [];
    var username = "";
    var oneq = {};

    factory.login = function(loginname){
      console.log("factory received login name: ", loginname)
      username = loginname
    },

    factory.getoneq = function(id, callback){
        console.log("factory received id", id)
        $http({method: 'GET', url: '/oneq/'+id})
        .then(function(response){
          callback(response.data)
          oneq = response.data
        })
    },

    factory.getuser = function(callback){
      callback(username)
      //return username
    },

    factory.getquestions = function(callback){
      $http({method: 'GET', url: '/getquestions'})
      .then(function(response){
        callback(response.data)
        questions = response.data
      })
    },

    factory.addquestion = function(data){
      console.log("factory received", data)
      $http({method: 'POST', url: '/addq', data: data})
      .then(function(response){
        questions.push(response.data)
        $location.url('/qindex')
      })
    }

    factory.addanswer = function(q_id, data){
      data.id = q_id
      console.log("factory addanswer data: ", data)
      $http({method: 'POST', url: 'adda', data: data})
      .then(function(response){
        console.log(response)
        $location.url('/qindex')

      })
    }

    factory.updatelikes = function(id, value){
      var data = {}
      data.id = id
      data.value = value
      $http({method: 'POST', url: 'likes', data: data})
      .then(function(response){
        console.log(response)
        })
      }








    return factory;

});
