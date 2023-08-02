/* let imgSofa = document.getElementById("sofaEstatico"); */

function verGif() {
  if (
    document.getElementById("sofaEstatico").src == "./assets/card-sofa1.png"
  ) {
    document.getElementById("sofaEstatico").src =
      "./assets/Sofá #boraCodar.gif";
  } else {
    document.getElementById("sofaEstatico").src = "./assets/card-sofa1.png";
  }
}

function adicionarProduto() {
  alert("Produto adicionado à cesta.");
}
