// a variavel var pode ser visivel mesmo fora do bloco do escopo

{
    {
        {
            {
                 var sera = 'será????'
            }
        }
    }
}

console.log(sera);

function teste(){
    var local = 123;
}

console.log(local);