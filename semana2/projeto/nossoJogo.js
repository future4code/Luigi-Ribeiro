
console.log("Boas vindas ao jogo de Blackjack!")
let maoJogador=[];
let valorJogador = 0;
let maoComputador=[];
let valorComputador= 0;
let carta;

//function cartaPraMao(carta,comprarCarta,mao,valorMao){
//   carta = comprarCarta();       
 //  mao.push(carta.texto);

 //  valorMao=valorMao + carta.valor;
 
//}
if(confirm("Quer iniciar uma nova rodada?")) {
//2   cartas jogador
   //1
   carta = comprarCarta();       
   maoJogador.push(carta.texto);
   valorJogador=valorJogador + carta.valor;
   //2
   carta = comprarCarta();       
   maoJogador.push(carta.texto);
   valorJogador=valorJogador + carta.valor;
   //se as cartas forem A A
   while (valorJogador===22)  
   {
      valorJogador=0
      maoJogador=[]
      //1
      carta = comprarCarta();       
      maoJogador.push(carta.texto);
      valorJogador=valorJogador + carta.valor;
      //2
      carta = comprarCarta();       
      maoJogador.push(carta.texto);
      valorJogador=valorJogador + carta.valor;

   }

//2 cartas computador
   //1
   carta = comprarCarta();       
   maoComputador.push(carta.texto);
   valorComputador=valorComputador + carta.valor;
   //2
   carta = comprarCarta();       
   maoComputador.push(carta.texto);
   valorComputador=valorComputador + carta.valor;

//Jogador compra mais uma carta?   
   while(valorJogador<21 && confirm(`Suas cartas são: ${maoJogador}. A carta revelada do computador é:${maoComputador[0]} Deseja comprar mais uma carta?`))

   {

      carta = comprarCarta();       
      maoJogador.push(carta.texto);
      valorJogador=valorJogador + carta.valor;
      alert(`Você comprou: ${carta.texto}`)
   }

   alert(`As cartas do computador são: ${maoComputador}`)

//Computador compra até passar jogardor

   while(valorJogador<21 && valorComputador<21 && valorComputador<valorJogador)
   {
      carta = comprarCarta();       
      maoComputador.push(carta.texto);
      valorComputador=valorComputador + carta.valor;
      alert(`As cartas do computador são: ${maoComputador}`)
   }
//Conclusao

   alert(`Suas cartas são: ${maoJogador}. Sua pontuação é: ${valorJogador}. As cartas do computador são: ${maoComputador}. A pontuação do computador é: ${valorComputador}`)
   
   if(valorJogador==valorComputador)
   {
      alert(`Empatou.`)
   }

   else if(valorJogador>21)
   {
      //derrota
      alert(`O computador ganhou. :(`)
   }
   else if(valorComputador>21)
   {
      //vitoria
      alert(`Você ganhou! \o/`)
   }
   else
   {
      //derrota
      alert(`O computador ganhou. :(`)
   }


} else {

   console.log("O jogo acabou")
}



  




