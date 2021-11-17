//EXERCICIO 1

// let nome= process.argv[2]
// let idade = Number(process.argv[3])

// const frase = `Olá, ${nome}! Você tem ${idade} anos. Em sete anos você terá ${idade+7}`

// console.log(frase)

//EXERCICIO 2
// let operation=process.argv[2]
// let numberOne= Number(process.argv[3])
// let numberTwo= Number(process.argv[4])
// let result = 0;

// if (operation==="add")
// {
//     result=numberOne+numberTwo
// }
// else if (operation==="sub")
// {
//     result=numberOne-numberTwo
// }
// else if (operation==="mult")
// {
//     result=numberOne*numberTwo   
// }
// else if (operation==="div")
// {
//     result=numberOne/numberTwo
// }

// console.log(result)

//EXERCICIO 3
const tarefa = process.argv[2]
const tarefas=[
    "Lavar Louça"
]
tarefas.push(tarefa)

console.log("Tarefa adicionada com sucesso")
console.log(tarefas)



