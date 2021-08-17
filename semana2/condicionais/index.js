// INTERPRETAÇÃP

/*
======================================> EXERCÍCIO 1<==========================
a)recebe um número do prompt e verifica se é par ou ímpar


b)pares


c)ímpares


======================================> EXERCÍCIO 2<==========================

a) verificar o preço das frutas

b)O preço da fruta maçã é R$ 2.25

c)


======================================> EXERCÍCIO 3<==========================


a)pegando um número do prompt

b)
10-Esse número passou no teste
Essa mensagem é secreta


-10-erro


c)se o número for negativo a variável mensagem nao vai ser declarada!
*/





//ESCRITA DE CÓDIGO
//======================================> EXERCÍCIO 1<==========================



let idade = Number(prompt("idade"))

if (idade>=18)
{
    console.log("você pode dirigir")
}
else
{
    console.log("você não pode dirigir")
}


//======================================> EXERCÍCIO 2<==========================

let turno = prompt("turno")

if (turno=="M")
{
    console.log("Bom dia")
}
if (turno=="V")
{
    console.log("Boa tarde")
}
if (turno=="N")
{
    console.log("Boa noite")
}

//======================================> EXERCÍCIO 3<=========================

switch(turno)
{
    case 'M':
        console.log("Bom dia")
        break

    case 'V':
        console.log("Boa tarde")
        break
    case 'N':
        console.log("Boa noite")
        break

}

//======================================> EXERCÍCIO 4<=========================

genero = (prompt("genero"))
preco = Number(prompt("preço"))

if(genero=="fantasia" && preco<15)
{
    console.log("Bom filme")
}
else
{
    console.log("Escolha outro filme :(")
}