// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  // implemente sua lógica aqui
  let altura = Number (prompt("Qual a altura?"))
  let largura = Number (prompt("Qual a largura?"))

  console.log(altura*largura)
}

// EXERCÍCIO 02
function imprimeIdade() {
  // implemente sua lógica aqui
  let anoAtual = Number (prompt("Que ano estamos?"))
  let anoNascimento = Number (prompt("Em que ano você nasceu?"))

  console.log(anoAtual-anoNascimento)
}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  let imc = peso /(altura*altura)
  return imc

}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  // implemente sua lógica aqui
  let nome = (prompt("Qual seu nome?"))
  let idade = (prompt("Quantos anos você tem?"))
  let email = (prompt("Qual seu email?"))
  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."
  console.log("Meu nome é "+ nome + ", tenho "+ idade +" anos, e o meu email é "+ email+".")
}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  // implemente sua lógica aqui
  let coresFavoritas = ["cor1", "cor2", "cor3"]
  coresFavoritas[0]= (prompt("primeira cor"))
  coresFavoritas[1]= (prompt("segunda cor"))
  coresFavoritas[2]= (prompt("terceira cor"))

  console.log (coresFavoritas)
}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  // implemente sua lógica aqui

  let str = string.toUpperCase()
  return (str)

}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui
  let ingrecoVendido = custo/valorIngresso
  return ingrecoVendido


}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui
  let mesmoTamanho = (string1.length == string2.length) 
  return mesmoTamanho;
}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  return array[0]

}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui
  let ultimoElemento = array.length -1
  return array[ultimoElemento]

}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui
  let ultimoElemento = array.length -1
  let troca

  troca=array[0]
  array[0]= array[ultimoElemento]
  array[ultimoElemento]=troca
  return array
}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui
  igual = string1.toUpperCase() == string2.toUpperCase()
  return igual


}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui


  let anoAtual =Number (prompt("Em que ano estamos?"))
  let anoNascimento =Number(prompt("Em que ano você nasceu?"))
  let anoCarteira =Number (prompt("Em que ano vc emitiu sua carteira?"))
  let idade= anoAtual - anoNascimento
  let tempoCarteira = anoAtual - anoCarteira

  const cond1 = idade <= 20 && tempoCarteira >= 5
  const cond2 = idade > 20 && idade <= 50 && tempoCarteira >= 10
  const cond3 = idade > 50 && tempoCarteira >= 15

  const condFinal = cond1 || cond2 || cond3

console.log (condFinal)

}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui
  const cond1 = ano%400 === 0;
  const cond2 = ano%4 === 0;
  const cond3 = ano%100 === 0 && ano%400 != 0;
  

  const condFinal = (cond1 ||cond2) && !cond3 

  return (condFinal)
  

}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui
  let maiorDeIdade = prompt("Você tem mais de 18 anos?")
  let ensinoMedio = prompt("Você possui ensino médio completo?")
  let disponibilidade= prompt("você possui disponibilidade exclusiva durante os horários do curso?")

  const cond1 = maiorDeIdade === "sim"
  const cond2 = ensinoMedio ==="sim"
  const cond3 = disponibilidade === "sim"


  const condFinal = cond1 && cond2 && cond3
  
  console.log(condFinal)

}