angular.module('WeightLog', ['ui.router'])

.factory('exerciseFactory', [function(){
  var d = new Date();
  var today = d.getDay();
  if(today == 1 || today == 3 || today == 6){
    var o = {
      exercises: [
        {
          name: 'Bench',
          weight: '140lbs',
          reps: '8',
          sets: '3'
        },
        {
          name: 'Shoulder Press',
          weight: '100lbs',
          reps: '8',
          sets: '3'
        }
      ]
    };
    return o;
  } else {
    var o = {
      exercises: [
        {
          name: 'Squat',
          weight: '200lbs',
          reps: '8',
          sets: '3'
        },
        {
          name: 'Calf Raises',
          weight: '100lbs',
          reps: '8',
          sets: '3'
        }
      ]
    };
    return o;
  }
}])

.controller('MainCtrl', [
  '$scope',
  'exerciseFactory',
  function($scope, exerciseFactory){

    $scope.exercises = exerciseFactory.exercises;

    $scope.addExercise = function(){

    };

  }])
])
