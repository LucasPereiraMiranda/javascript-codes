
// JSON é um formato para dados 
// e muito presente em muitas tecnologias

const obj = {
    a:1,
    b:2,
    c:3,
    soma: ()=> a+b+c
}

console.log(JSON.stringify(obj))

//console.log(JSON.parse("{a: 1, b:2 , c:3}"))

console.log(JSON.parse('{"a": 1,"b":2 ,"c":3}')) // formato correto JSON
console.log(JSON.parse('{"a": 1, "b":"string" , "c":true}'))
console.log(JSON.parse('{"a": 10.5, "b":"string" , "c":true,"d": {},"e":[]}'))