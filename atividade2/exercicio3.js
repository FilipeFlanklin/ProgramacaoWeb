var matriz = [[1,2],[5,6]]
var  matriz2 = [[3,4],[7,8]]
var  matrizResultado = [[0],[0]]

for(let lin=0 ; lin<2 ; lin++){
   console.log('[')
   for(let col=0; col<2 ; col++){
      matrizResultado[lin][col] =  matriz[lin][col] * matriz2[col][lin]
      console.log(matrizResultado[lin][col] + ",");
   }
   console.log(']')
}