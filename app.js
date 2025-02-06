function sortear() {
    let quantidade = parseInt(document.getElementById('quantidade').value);
    let de = parseInt(document.getElementById('de').value);
    let ate = parseInt(document.getElementById('ate').value);

   let sorteados = [];
   let numero;

   if (quantidade < (ate - de)) {
    alert('Campo "Quantidade" deve ser menor ou igual ao intervalo informado no campo "Do número" até o campo "Até o número". Verifique!');
    document.getElementById('quantidade').value = ' ';
    document.getElementById('de').value  = ' ';
    document.getElementById('ate').value  = ' ';
    return;
   }

   if (de > ate){
    alert('O número inicial não pode ser maior que o número final. Por favor coloque outro!!!')
    document.getElementById('de').value  = ' ';
    document.getElementById('ate').value  = ' ';
   }else{
   for (let i = 0; i<quantidade; i++){
    numero = ObterNumeroAleatorio(de,ate);
    while (sorteados.includes(numero)){
        numero = ObterNumeroAleatorio(de,ate);
    }
    sorteados.push(numero);
}
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = ` <label class="texto__paragrafo">Números sorteados: ${sorteados}</label>`;
    alterarStatusBotao();
}
   
}

function ObterNumeroAleatorio(min, max){
    return Math.floor(Math.random() * (max - min)) + min;
}

function alterarStatusBotao(){
    let botao = document.getElementById('btn-reiniciar');
    if (botao.classList.contains('container__botao-desabilitado')){
        botao.classList.remove('container__botao-desabilitado');
        botao.classList.add('container__botao');
    }else{
        botao.classList.remove('container__botao');
        botao.classList.add('container__botao-desabilitado');
    }
}

function reiniciar(){
    document.getElementById('quantidade').value = ' ';
    document.getElementById('de').value  = ' ';
    document.getElementById('ate').value  = ' ';
    document.getElementById('resultado').innerHTML  = ` <label class="texto__paragrafo">Números sorteados: Nenhum até agora</label>`;
    alterarStatusBotao();
}
