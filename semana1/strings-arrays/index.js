/* 
----------------------->EXERCÍCIO 1<--------------------
a. undefined
b. null
c. 11
d. 3
e. [3, 19, 5, 6, 7, 8, 9, 10, 11, 12, 13]
f. 9


----------------------->EXERCÍCIO 2<--------------------
"SUBI NUM ÔNIBUS EM MIRROCOS"


*/





// CÓDIGOS

//----------------------->EXERCÍCIO 1<--------------------
const nomeDoUsuario = prompt ("Qual o seu nome?")
const emailDoUsuario = prompt ("Qual o seu email?")

console.log("O e-mail", emailDoUsuario,"foi cadastrado com sucesso. Seja bem-vinda(o)", nomeDoUsuario,"!")







//----------------------->EXERCÍCIO 2<--------------------

let comidasFavoritas = ["lasanha", "hamburger", "sushi", "guacamole", "feijoada"]
console.log ("Essas são as minhas comidas preferidas:")
console.log(comidasFavoritas)

constcomidaUsuário = (prompt ("Qual sua comisa favorita?"))

comidasFavoritas[1]=constcomidaUsuário;

console.log(comidasFavoritas)



//----------------------->EXERCÍCIO 3<--------------------

let listaDeTarefas = [prompt ("primeira tafeda do dia"), prompt ("segunda tafeda do dia"), prompt ("terceira tafeda do dia")]
console.log (listaDeTarefas)
let tarefaRealizada =parseInt (prompt ("qual tarefa você ja realizou? 1/2/3"))


listaDeTarefas.slice(tarefaRealizada,1)
console.log (listaDeTarefas) 