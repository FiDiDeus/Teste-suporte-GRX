arrayNumeros = [1,2,3,4,5,6,7,8,9,10];
Function retornaApenasNumerosPares(x){
	var pares = [];
	for (let l = 0; l < x.length; l++){
		if (x[l]%2 == 0){
			pares = x[l];
		}
	}
	return pares;
}
