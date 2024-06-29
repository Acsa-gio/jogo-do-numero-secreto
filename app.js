let listaDeNumerosSorteados = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let numeroTentativas = 1;

// código omitido. 

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag)
        campo.innerHTML = texto;
        responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2} );

}

function exibirMensagemInicial() {
    exibirTextoNaTela ('h1', 'Jogo do número secreto');
    let mensagemInicialTitulo = `Escolha um número de 1 a ${numeroLimite}`;
    exibirTextoNaTela ('p', mensagemInicialTitulo);
}

exibirMensagemInicial();

function verificarChute() {
    let chute = document.querySelector('input').value;
    
    if (chute == numeroSecreto){

        exibirTextoNaTela('h1','Acertou!');
        let palavraTentativa = numeroTentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `Você descobriu o número secreto em ${numeroTentativas} ${palavraTentativa}. `;
        exibirTextoNaTela('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');

    } else { if (chute > numeroSecreto) {
        exibirTextoNaTela('p','O número secreto é menor.');
    } else {
        exibirTextoNaTela('p', 'O número secreto é maior.');
    }
    numeroTentativas++;
    limparCampo()
  }
}

function gerarNumeroAleatorio () {
  let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
  let quantidadeDeElemetosDaLista = listaDeNumerosSorteados.length;

   if (quantidadeDeElemetosDaLista == numeroLimite) {
    listaDeNumerosSorteados = [];
   }

  if(listaDeNumerosSorteados.includes(numeroEscolhido)) {
    return gerarNumeroAleatorio();
  } else {
    listaDeNumerosSorteados.push(numeroEscolhido);
    console.log(listaDeNumerosSorteados);
    return numeroEscolhido;
  }
}

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo(){
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    numeroTentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}