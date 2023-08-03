function verGif() {
  let sofaEstatico = document.getElementById("sofaEstatico");
  let botaoGirar = document.getElementById("botaoGirar");

  if (
    sofaEstatico.src == "http://127.0.0.1:5500/assets/card-sofa-estatico.png"
  ) {
    sofaEstatico.src = "http://127.0.0.1:5500/assets/card-sofa-girando.gif";
  } else {
    sofaEstatico.src = "http://127.0.0.1:5500/assets/card-sofa-estatico.png";
  }

  if (botaoGirar.src == "http://127.0.0.1:5500/assets/botao360.svg") {
    botaoGirar.src = "http://127.0.0.1:5500/assets/fechar.svg";
  } else {
    botaoGirar.src = "http://127.0.0.1:5500/assets/botao360.svg";
  }
}

function adicionarProduto() {
  alert("Produto adicionado à cesta.");
}
