const sentence = document.getElementById("sentence");

function aparecerFrase() {
  const phrase = "Eu vou provar que meu sentimento mais puro é por você.";
  sentence.textContent = phrase;
}
window.onload = aparecerFrase();

// -------------------------------------

let slideIndex = [1];
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("imagem");
  let dots = document.getElementsByClassName("ponto");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

var slidePosition = 0;
SlideShow();

function SlideShow() {
  var i;
  var slides = document.getElementsByClassName("imagem");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slidePosition++;
  if (slidePosition > slides.length) {
    slidePosition = 1;
  }
  slides[slidePosition - 1].style.display = "block";
  setTimeout(SlideShow, 3000);
}

// -------------------------------------

let slideIndex2 = [1];
showSlides2(slideIndex2);

// Next/previous controls
function plusSlides2(n2) {
  showSlides2((slideIndex2 += n2));
}

function showSlides2(n2) {
  let i2;
  let slides2 = document.getElementsByClassName("imagem2");
  if (n2 > slides2.length) {
    slideIndex2 = 1;
  }
  if (n2 < 1) {
    slideIndex2 = slides2.length;
  }
  for (i2 = 0; i2 < slides2.length; i2++) {
    slides2[i2].style.display = "none";
  }
  slides2[slideIndex2 - 1].style.display = "block";
}

//------------------------------------

const playButton = document.getElementById("button");
const playAudio = document.getElementById("myAudio");
playButton.addEventListener("click", function() {
  if (myAudio.paused) {
    myAudio.play();
    playButton.textContent = "Pausar";
  } else {
    myAudio.pause();
    playButton.textContent = "Clique para Tocar"; // Atualiza o texto do botão
  }
});

function desenharCoração(ctx, x, y, tamanho, cor = "red") {
  ctx.beginPath();
  ctx.moveTo(x, y);
  ctx.bezierCurveTo(x - tamanho / 2, y - tamanho / 2, x - tamanho, y + tamanho / 3, x, y + tamanho);
  ctx.bezierCurveTo(x + tamanho, y + tamanho / 3, x + tamanho / 2, y - tamanho / 2, x, y);
  ctx.fillStyle = cor;
  ctx.fill();
  ctx.stroke();
  
canvas.addEventListener("click", function() {
  // Ajusta a posição vertical para simular um salto
  canvas.style.transform = "translateY(-20px)";
  
  // Aguarda um curto período e, em seguida, reajusta a posição
  setTimeout(function() {
    canvas.style.transform = "translateY(0)";
  }, 500); // 500 milissegundos (0,5 segundos)
});
}


let canvas = document.getElementById("myCanvas");
let ctx = canvas.getContext("2d");

// Substituindo a chamada da função desenharLinha pela função desenharCoração
desenharCoração(ctx, 200, 100, 300, "red");
