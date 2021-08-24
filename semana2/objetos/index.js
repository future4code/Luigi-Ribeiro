/*
============INTERPRETAÇÃO

-------------------------------> EXERCÍCIO 1<--------------------------

Matheus Nachtergaele
Virginia Cavendish
canal: "Globo", horario: "14h"


-------------------------------> EXERCÍCIO 2<--------------------------
A-
nome: "Juca", 
idade: 3, 
raca: "SRD"

nome: "Juba", 
idade: 3, 
raca: "SRD"

nome: "Juco", 
idade: 3, 
raca: "SRD"

B-
Copia um outro objeto

-------------------------------> EXERCÍCIO 3<--------------------------

A- 
false
undefined

B-
a variável altura não foi declarada


*/



// ============ESCRITA

//-------------------------------> EXERCÍCIO 1<--------------------------


function imprimeMensagem (objeto){
    let frase = "Eu sou " + objeto.nome +", mas pode me chamar de: "+objeto.apelidos[0]+", "+ objeto.apelidos[1]+" ou " + objeto.apelidos[2]
    console.log(frase)

}

const Eu = {
    nome : "Luigi",
    apelidos: ["Marioverde", "Tuche", "Tortuguita"]
}

imprimeMensagem(Eu)

const Eu2 = {
    ... Eu,
    apelidos: ["Lu", "Lulu","Cupim"]
}

imprimeMensagem(Eu2)



//-------------------------------> EXERCÍCIO 2<--------------------------

const pessoa1 = {
    nome: "Bruno",
    idade: 23 ,
    profissao: "Instrutor"
}
const pessoa2 = {
    nome: "Lebron",
    idade: 36 ,
    profissao: "Jogador"
}

function imprimePessoa (pessoa){
    let arrayPessoa= [pessoa.nome, pessoa.nome.length, pessoa.idade, pessoa.profissao, pessoa.profissao.length]
    console.log(arrayPessoa)
}

imprimePessoa(pessoa1)
imprimePessoa(pessoa2)


//-------------------------------> EXERCÍCIO 3<--------------------------

let carrinho = []

const morango = {

    nome: "morango" ,
    disponivel: true
}

const laranja = {

    nome: "laranja" ,
    disponivel: true
}

const kiwi = {
    
    nome: "kiwi" ,
    disponivel: true
}


function compra (fruta, carrinho)
{
    
    carrinho.push(fruta)
}


compra(morango, carrinho)
compra(laranja, carrinho)
compra(kiwi, carrinho)

console.log(carrinho)