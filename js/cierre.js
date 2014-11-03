var cierreModule = angular.module('Cierre', []);

cierreModule.controller('CierreController', function($scope, $http){
	$http.get('../librerias/cierre.php').success(function(data){
		$scope.cierre=data;
		$scope.cierre.muestraTabla=true;
		
		if($scope.cierre.fechaCierre==null){
			$scope.cierre.muestraTabla=false;
			hoy=new Date();
			diaHoy=hoy.getDate();
			$scope.cierre.fechaCierre=(diaHoy<10?"0"+diaHoy:diaHoy)+"-"+(hoy.getMonth()+1)+"-"+hoy.getFullYear();
		}
		
		$scope.cierre.valorTotal=0.00;
		$.each($scope.cierre.valoresCierre, function(i, item){
			$scope.cierre.valorTotal+=item.valor;
		});
		$scope.cierre.valorTotal=$scope.cierre.valorTotal;
	});
	
});

cierreModule.filter('precioComa2', function(){
	var preciosComa2Filter = function(input){
		return (input.toFixed(2)).toString().replace('.',',') + " €";
	};
	return preciosComa2Filter;
});