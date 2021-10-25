function tamanhoArray (array)
{
    return array.length
}

function arrayInvertido (array)
{
    let invertido=[]

    for(let i=array.length-1 ; i> -1; i--)
    {
        invertido.push(array[i])
    }
    return invertido;

}

function arrayCrescente(array)
{

}

function arrayDePares(array) {

 
    const pares = []
 
    for (let i=0; i<array.length; i++) 
    {
       if (array[i] % 2 == 0) 
       {
           pares.push(array[i])
       }
    }
 
    return pares
 }

 function arrayDeParesElevadoADois(array) {

    let elevado
    let pareselevados = []
 
    for (let i=0; i<array.length; i++) 
    {
       if (array[i] % 2 == 0) 
       {
            elevado= array[i]*array[i]
           pareselevados.push(elevado)
       }
    }
 
    return pareselevados
 }

 function maiorNumeroarray(array)
 {
     let maior=array[0]
     for (let i=0; i<array.length; i++)
     {
         if (array[i]>maior)
         {
            maior = array[i]
         }
     }
     return maior;
 }

 function naoseicomochamar(x,y)
 {
    let maiorNumero
    let menorNumero
    
    if (x>y){
        maiorNumero=x
        menorNumero=y
    }
    else
    {
        maiorNumero=y
        menorNumero=x
    }
    let maiorDivisivelporMenor = (maiorNumero%menorNumero==0)
    let diferenca = maiorNumero-menorNumero

    let objeto ={
        maiorNumero:maiorNumero,
        maiorDivisivelporMenor:maiorDivisivelporMenor,
        diferenca:diferenca
        
    }

    return objeto;
 }

 function primeirosNumerosPares(n)
 {
     arrayPares=[]
     
    for (let i=0; i<n; i++)
    {
        array.push(i*2)
    }
    return arrayPares;
 }

 function triangulo(ladoA, ladoB, ladoC) {

    let ladoA
    if (ladoA === ladoB && ladoB === ladoC) 
    {
        lado= "Equilátero"
    }
    else if (ladoA === ladoB || ladoA === ladoC || ladoB === ladoC) 
    {
        lado= "Isósceles"
    }
    else{
        lado= "Escaleno"
    }
    return lado;
 }

 function chamadaFilme(filme) {
    return `Venha assistir ao filme ${filme.nome}, de ${filme.ano}, dirigido por ${filme.diretor} e estrelado por ${filme.atores.join(", ")}.`

 }

 function nomeAnonimo(pessoa)
 {
     return {...pessoa, nome: "ANÔNIMO"}
 }

 