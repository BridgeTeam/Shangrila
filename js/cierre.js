var cierreApp = angular.module('cierreHoy', []);

cierreApp.controller('CierreController', function($scope, $http){
	$http.get('../librerias/cierre.php').success(function(data){
		$scope.cierre=data;
		
		$scope.cierre.valorTotal=0.00;		
		$.each($scope.cierre.valoresCierre, function(i, item){
			$scope.cierre.valorTotal+=item.valor;
			$scope.cierre.valoresCierre[i].valor=(item.valor.toFixed(2)).toString().replace('.',',');
		});
		$scope.cierre.valorTotal=($scope.cierre.valorTotal.toFixed(2)).toString().replace('.',',');
	});
	
});