
function tratarErrorELancar(erro){
    //throw new Error('...')
    //throw 10
    throw 'O error foi notificado e foi notificado e será resolvido'
}

function imprimirNomeGritado(obj){
    try{
        console.log(obj.name.toUpperCase() + '!!!') // esta name, ao inves de nome
    }
    catch(e){
        tratarErrorELancar(e)
    }
    finally{
        console.log('final')
    }

}

const obj = {
    nome:'Lucas'
}

imprimirNomeGritado(obj)