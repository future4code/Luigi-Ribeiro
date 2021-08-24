/*



============= EXERCÍCIO 1=======================
a-
10
50


b= nada

============= EXERCÍCIO 2=======================


retorna true se tiver escrito cenoura, com letas maiúsculas ou minúsculas

true
true
true






*/


//ESCRITA

//============= EXERCÍCIO 1=======================

function imprimeInfo(){

    console.log("Oi, eu sou o Luigi, moro no R")

}

function pessoa(){
const nome=prompt("nome")
const idade= prompt("idade")
const lugar= prompt("lugar")
const profissao= prompt("profissao")
return "eu sou "+ nome+ " tenho "+ idade + " anos, moro em "+lugar+" e sou "+ profissao 

}

let frase = pessoa


console.log(frase)

