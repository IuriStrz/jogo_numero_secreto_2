function sortear () {
    let Quantidade = parseInt(document.getElementById("quantidade").value);
    let NumeroDe = parseInt(document.getElementById("de").value);
    let NumeroAte = parseInt(document.getElementById("ate").value);
    let Contador = 1;
    let ListaNumeros = [];

    //alert("Quantidade: " + Quantidade + ", N° de: " + NumeroDe + ", N° até: " + NumeroAte);

    if (Quantidade > NumeroAte - NumeroDe) {
        alert("a quantidade de números sorteados precisa ser menor ou igual ao número de opções disponíveis entre o número de e até")
        process.exit();
    }

    while (Contador <= Quantidade) {
        let Numero = ObterNumeroAleatorio(NumeroDe, NumeroAte);
        while (ListaNumeros.includes(Numero) == true) {
            Numero = ObterNumeroAleatorio(NumeroDe, NumeroAte)
        }
        ListaNumeros.push(Numero);
        ++Contador;
    }

    console.log(ListaNumeros);
    let Resultado = document.getElementById ("resultado");
    Resultado.innerHTML = '<label class="texto__paragrafo">Números sorteados:' + ListaNumeros + '</label>'

    AlterarStatusBotao()
}

function ObterNumeroAleatorio (A, B) {
  const min = Math.ceil(Math.min(A, B));
  const max = Math.floor(Math.max(A, B));

  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function reiniciar () {
    document.getElementById ("quantidade").value = "";
    document.getElementById ("de").value = "";
    document.getElementById ("ate").value = "";
    document.getElementById ("resultado").innerHTML = '<label class="texto__paragrafo">Números sorteados:  nenhum até agora</label>';
    AlterarStatusBotao() 
}

function AlterarStatusBotao() {
    let Botao = document.getElementById ("btn-reiniciar")
    if (Botao.classList.contains("container__botao-desabilitado")==true) {
        Botao.classList.remove("container__botao-desabilitado")
        Botao.classList.add("container__botao")
    } else {
        Botao.classList.remove("container__botao")
        Botao.classList.add("container__botao-desabilitado")
    }
}