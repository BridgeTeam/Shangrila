var gestionModule = angular.module('Gestion', []);

gestionModule.controller('GestionCamposAux', function($scope){
	//$scope.mostrarCamposAux=false;
});


gestionModule.controller('GestionObligatorios', function($scope){
	$scope.basico={};
	function chequeoObligatorios (newValue, oldValue, scope){
		if(newValue!=oldValue){
			alert("algo ha cambiado");
		}
	};
	
	$scope.$watch('basico', chequeoObligatorios, true);
});


