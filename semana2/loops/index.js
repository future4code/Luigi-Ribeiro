/*
------------------INTERPRETAÇÃO

=====================================EXERCÍCIO1===================================
somando os i's na variável valor
10


=====================================EXERCÍCIO2===================================
a-  21 23 25 27 30

b- sim, é só colocar um i que vai incrementando a cada rodada do for of


=====================================EXERCÍCIO3===================================

entendi foi é nada

*/

//------------------ESCRITA DE CODIGO
//=====================================EXERCÍCIO1===================================

quantidadePets = Number(prompt("quantos animais vc tem?"))
let pets= []
let nomePet

if (quantidadePets==0)
{
    console.log("Que pena! Você pode adotar um pet")
}
else
{
    for (let i=0; i<quantidadePets; i++)
    {
        nomePet=(prompt("Qual o nome do pet?"))
        pets.push(nomePet)
    }
}

console.log(pets)



//=====================================EXERCÍCIO2===================================


arrayOriginal= [1,2,3,4,5]

function imprime(arr)
{
    for(let i=0; i<arr.length ; i++)
    {
        console.log(arr[i])
    }
}

function imprimepor10(arr)
{
    for(let i=0; i<arr.length ; i++)
    {
        console.log(arr[i]/10)
    }
}

function imprimepares(arr)
{
    let pares =[]
    for(let i=0; i<arr.length ; i++)
    {
        if (arr[i]%2 === 0)
        {
            pares.push(arr[i])
        }
    }
    console.log(pares)
}

function imprimeFrases(arr)
{
    let= frases
    for(let i=0; i<arr.length ; i++)
    {

        let frase = "O elemento do índex "+i+" é: "+arr[i]
        frases.push(frase)
    }
    console.log(frases)
}

function imprimeMaioreMenor(arr)
{
    let maior= arr[0]
    let menor= arr[0]

    for(let i=0; i<arr.length ; i++)
    {
        if (arr[i]<menor)
        {
            menor = arr[i]
        }

        if (arr[i]>maior)
        {
            maior = arr[i]
        }
    }
    console.log("maior é "+maior)
    console.log("menor é "+menor)
}


//=====================================EXERCÍCIO3===================================

let numeroPensado = Number(prompt("Qual número você pensou?"))

console.log("vamos jogar")

let numeroChutado 

numeroChutado=Number(prompt("Qual número seu amigo pensou?"))
let tentativas=1

while (numeroChutado!=numeroPensado)
{
    console.log("o número chutado foi: "+numeroChutado)

    if(numeroChutado<numeroPensado)
    {
        console.log("Errrrrrrrou, é maior")
    }
    if(numeroChutado>numeroPensado)
    {
        console.log("Errrrrrrrou, é menor")
    }
    numeroChutado = Number(prompt("Qual número seu amigo pensou?" ))
    tentativas++
}

console.log("o número chutado foi: "+numeroChutado)
console.log("Acertou!!")