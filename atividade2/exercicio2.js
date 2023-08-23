var matriz = [[1,2],[3,4],[5,6]]
var  matriztransporta = [[0,0,0],[0,0,0]]

for(let lin=0 ; lin<3 ; lin++){
    console.log('[')
    for(let col=0; col<2 ; col++){
        console.log(matriz[lin][col] + ",")
        matriztransporta[col][lin] = matriz[lin][col]
    }
    console.log(']')
}
console.log('--traposição--')

for(let lin=0 ; lin<2 ; lin++){
    console.log('[')
    for(let col=0; col<3 ; col++)
        console.log(matriztransporta[lin][col] + ",");
    console.log(']')
}
