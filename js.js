window.onload = initAll;
var usedNums = new Array(61);

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
  var currentSquare = "square" + thisSquare; 

  var newNum;
  
  do {
    newNum = getNewNum(); 
  } while (usedNums[newNum]);

  usedNums[newNum] = true; 

  var squareElem = document.getElementById(currentSquare);
  squareElem.innerHTML = newNum; 

  squareElem.onclick = function () {
    if (squareElem.style.backgroundColor == 'grey') {
      squareElem.style.backgroundColor = '';
    } else {
      squareElem.style.backgroundColor = 'grey';
    }
  };
}

function getNewNum() {
  return Math.floor(Math.random() * 60) + 1;
}


function anotherCard() {
  usedNums.fill(false); // Reseta o array de números usados
  newCard(); // Gera um novo cartão
}
