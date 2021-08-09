
/* 
1. 

10
5 10


2.

10 10 10


3.

p- horasDeTrabalho
t- recebePorDia

*/


// começo programa 1
let nome = prompt ("Qual é seu nome?")
let idade = prompt ("Qual é a sua idade?")

/*
D- deu tipo indefinido porque não foi atribuido nenhum valor às variáveis

F- prompt só recebe vriáveis do tipo string


*/



console.log(typeof nome)
console.log (typeof idade)

console.log("Olá", nome, ", você tem", idade, "anos")
//fim do programa 1







// começo programa 2
let musica = prompt ("Você gosta de música?")

let instrumento = prompt ("Você sabe tocar algum instrumento?")

let fama = prompt ("Você tem vontade se ser um artista famoso?")



console.log("Você gosta de música?", musica)

console.log("Você sabe tocar algum instrumento?", instrumento)

console.log("Você tem vontade se ser um artista famoso?", fama)
// fim do programa 2






//começo programa 3
let a = 10
let b = 25
let c
// Aqui faremos uma lógica para trocar os valores
c = a
a = b
b = c
// Depois de trocados, teremos o seguinte resultado:
console.log("O novo valor de a é", a) // O novo valor de a é 25
console.log("O novo valor de b é", b) // O novo valor de b é 10
//fim do programa 3
