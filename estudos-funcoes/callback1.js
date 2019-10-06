
const fabricantes = ['Mercedes',"Audi","BMW","Wolkswagem"]

function imprimir(nome,indice){
    console.log(`indice: ${indice+1}  ... nome: ${nome}`)
}

fabricantes.forEach(imprimir)


fabricantes.forEach((fabricante)=>console.log(fabricante))