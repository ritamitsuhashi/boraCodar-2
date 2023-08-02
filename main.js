/* let imgSofa = document.getElementById("sofaEstatico"); */

function verGif() {
  if (
    document.getElementById("sofaEstatico").src == "./assets/card-sofa-estatico.png"
  ) {
    document.getElementById("sofaEstatico").src =
    "./assets/card-sofa-girando.gif";
  } else {
    document.getElementById("sofaEstatico").src = "./assets/card-sofa-estatico.png";
  }
}

function adicionarProduto() {
  alert("Produto adicionado à cesta.");
}
