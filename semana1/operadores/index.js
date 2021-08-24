




/* 
--------------> EXERCÍCIO 1<------------------

false
false
true
bool

--------------> EXERCÍCIO 2<------------------

O valor impresso será 12

O número que entra é do tipo string, seria necerrário fazer uma conversão antes


--------------> EXERCÍCIO 3<------------------

let primeiroNumero = Number (prompt("Digite um numero!"))
let segundoNumero = Number (prompt("Digite outro numero!"))

*/






//--------------> EXERCÍCIO 1<------------------


let suaIdade = Number (prompt("Qual a sua idade?"))
let maIdade = Number (prompt("Qual a idade do seu/sua melhor amigo(a)?"))
let maisVelho = suaIdade > maIdade;
let diferenc = suaIdade- maIdade;

console.log("Sua idade é maior do que a do seu melhor amigo?", maisVelho)
console.log(diferenc)




//--------------> EXERCÍCIO 2<------------------


let numeroPar = Number (prompt("Insira um número par"))
console.log (numeroPar%2)

//c- o resto sempre será 0

//d- o resto seria 1



//--------------> EXERCÍCIO 3<------------------


let anos = Number (prompt("Quantos anos você tem?"))

let meses = anos*12
let dias =anos*365
let horas = dias*24

console.log (meses)
console.log (dias)
console.log (horas)



//--------------> EXERCÍCIO 4<------------------


let primeiroNum = Number (prompt("Qual é o primeiro número?"))
let segundoNum = Number (prompt("Qual é o segundo número?"))

console.log ("primeiro número é maior que o segundo?", primeiroNum>segundoNum)
console.log ("primeiro número é igual ao segundo?", primeiroNum===segundoNum)
console.log ("primeiro número é divisivel pelo segundo?", primeiroNum%segundoNum ===0 )
console.log ("segundo número é divisivel pelo primeiro?", segundoNum%primeiroNum ===0 )
