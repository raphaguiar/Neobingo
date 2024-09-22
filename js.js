window.onload = initAll;
var usedNums = new Array(61); // Array de números usados


function initAll() {
  if (document.getElementById) {
    document.getElementById("reload").onclick = anotherCard;
    newCard();
  } else {
    alert("Seu browser não suporta esse script");
  }
}


function newCard() {
  for (var i = 0; i < 20; i++) {
    setSquare(i);
  }
}


function setSquare(thisSquare) {
  var currentSquare = "square" + thisSquare; // Seleciona o quadrado atual


  var newNum;


  do {
    newNum = getNewNum(); // Gera um número de 1 a 60
  } while (usedNums[newNum]); // Verifica se o número já foi usado


  usedNums[newNum] = true; // Marca o número como usado


  var squareElem = document.getElementById(currentSquare);
  squareElem.innerHTML = newNum; // Preenche o quadrado com o número gerado


  // Adiciona função de clicar para mudar cor
  squareElem.onclick = function () {
    if (squareElem.style.backgroundColor == 'grey') {
      squareElem.style.backgroundColor = '';
    } else {
      squareElem.style.backgroundColor = 'grey'; // Muda a cor do quadrado
    }
  };
}


function getNewNum() {
  return Math.floor(Math.random() * 60) + 1; // Gera um número de 1 a 60
}


function anotherCard() {
  usedNums.fill(false); // Reseta o array de números usados
  newCard(); // Gera um novo cartão
}
