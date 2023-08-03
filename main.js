/* O código abaixo só troca uma vez. Outros problemas: tamanho do gif / trocar o .svg do 360 pra um "x" de fechar animação.

let sofaEstatico = document.querySelector('#sofaEstatico');

function verGif() {
  sofaEstatico.src = './assets/card-sofa-girando.gif';
}


function verGif() {
  if (
    document.getElementById("sofaEstatico").src == "./assets/card-sofa-estatico.png"
  ) {
    document.getElementById("sofaEstatico").src = "./assets/card-sofa-girando.gif";
  } else {
    document.getElementById("sofaEstatico").src = "./assets/card-sofa-estatico.png";
  }
}
*/

let sofaEstatico = document.getElementById('#sofaEstatico');

function verGif() {
  if ( sofaEstatico.src == '/assets/card-sofa-estatico.png'
  ) {
  sofaEstatico.src = '/assets/card-sofa-girando.gif';
  } else {
    sofaEstatico.src = '/assets/card-sofa-estatico.png';
  }
}




function adicionarProduto() {
  alert("Produto adicionado à cesta.");
}
