/*

====exercício 1====
a- imprimir um novo array com o indice


====exercício 2====
a- imprimir um novo array somente com nome

====exercício 3====

a- imprimir um novo array identico sem o item da chijo



*/



/// escrita

///====exercício 1====

const pets = [
    { nome: "Lupin", raca: "Salsicha"},
    { nome: "Polly", raca: "Lhasa Apso"},
    { nome: "Madame", raca: "Poodle"},
    { nome: "Quentinho", raca: "Salsicha"},
    { nome: "Fluffy", raca: "Poodle"},
    { nome: "Caramelo", raca: "Vira-lata"},
 ]

 const nomePets = pets.map((item,index, pets) => {
    return pets.nome})

console.log(nomePets)

const salsichas = pets.filter((item,index, pets) => {
    return pets.raca == "Salsicha"})

console.log(salsichas)

const poodles = pets.filter((item,index, pets) => {
    return pets.raca == "Poodle"})

const poodlesMSG = poodles.map((item,index, poodles) => {
    return `Você ganhou um cupom de desconto de 10% para tosar o/a ${poodles.nome}!`})

console.log(poodlesMSG)


///====exercício 2====


