   angular.module('myApp',[]).controller('ToDoController', ToDoController);
   ToDoController.$inject = ['$scope'];
function ToDoController ($scope)
{
$scope.todo = [
			  {name: 'Wash Dog', description: 'Looking after pet'},
			  {name: 'Cut grass', description: 'Looking after garden'},
			  {name: 'Collect washing', description: 'Clothes line'},
			  {name: 'Buy milk', description: 'Do shopping'}
			  ];


$scope.makeAnItem= function(){
$scope.todo.push(
{
	name:$scope.item.name,
	description:$scope.item.description
}
);

    }


     $scope.removeItems = function(index){
        $scope.todo.splice(index,1);
    }

    }