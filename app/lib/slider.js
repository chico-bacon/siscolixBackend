// const slides = document.querySelectorAll(".slides img");
// let slideIdex = 0;
// let intervaloId = null;

// inicalizaSlider();
// document,addEventListener("DOMContentLoaded",inicalizaSlider);

// function inicalizaSlider(){
// 	if(slides,length > 0){
// 		slides[slideIdex].classList.add("displaySlide");
// 		intervaloId = setInterval(nextSlide, 5000);
// 	}
// }

// function mostrarSlide(index){
// 	slides.forEach(slide =>{
// 		slide.classList.remove("displaySlide")
// 	})
// 	slides[slideIdex].classList.add("displaySlide");
// }

// function prevSlide(){

// }

// function nextSlide(){
// 	slideIdex++;
// 	mostrarSlide(slideIdex);
// }























// let currentIndex = 0;

// function showSlides() {
// 	const slides = document.querySelectorAll(".slide");

// 	// Esconde todas as imagens
// 	slides.forEach(slide => (slide.style.display = "none"));

// 	// Mostra a próxima imagem
// 	currentIndex++;
// 	if (currentIndex > slides.length) currentIndex = 1;
// 		slides[currentIndex - 1].style.display = "block";

// 	// Troca automaticamente a cada 3 segundos
// 	setTimeout(showSlides, 3000);
// } 

// showSlides();

/* // Inicializa o carrossel
Como funciona
HTML: Define as imagens dentro de um contêiner .carousel.
CSS: Aplica o efeito de fade com a animação @keyframes 
e oculta as imagens inicialmente.
JavaScript: Alterna entre as imagens automaticamente a 
cada 3 segundos, aplicando o efeito de fade.
Você pode substituir as imagens 
(image1.jpg, image2.jpg, etc.) pelos seus próprios 
arquivos e ajustar o tempo de transição no setTimeout.
 */










































































































// var satual=1;
// var smax=5;
// var stmp=3000;

// function troca(){
// 	document.getElementById("b1").style.visibility="hidden";
// 	document.getElementById("b2").style.visibility="hidden";
// 	document.getElementById("b3").style.visibility="hidden";
// 	document.getElementById("b4").style.visibility="hidden";
// 	document.getElementById("b5").style.visibility="hidden";
	
// 	document.getElementById("b"+satual).style.visibility="visible";
	
// 	satual=satual+1;
	
// 	if(satual > smax){
// 		satual=1;
// 	}
// }

// function slider(){
// 	document.getElementById("b1").style.visibility="hidden";
// 	document.getElementById("b2").style.visibility="hidden";
// 	document.getElementById("b3").style.visibility="hidden";
// 	document.getElementById("b4").style.visibility="hidden";
// 	document.getElementById("b5").style.visibility="visible";
	
// 	sliderTimer=setInterval(troca,stmp);
// }




/*
var numSlide=1;
mostrarSlide(numSlide);

function mudarSlide(ns){
	mostrarSlide(numSlide += ns);
}

function slideAtual(ns){
	mostrarSlide(numSlide = ns);
}

function mostrarSlide(ns){
	var slides=document.getElementsByClassName("slide");
	var indicadores=document.getElementsByClassName("indicador");
	
	if(ns > slides.length){
		numSlide=1;
	}
	if(ns < 1){
		numSlide=slides.length;
	}
	for(var i=0;i<slides.length;i++){
		slides[i].style.display="none";
	}
	for(var i=0;i<indicadores.length;i++){
		indicadores[i].className = indicadores[i].className.replace(" ativo","")
	}

	slides[numSlide-1]style.display="block";
	
	indicadores[numSlide-1].className += " ativo";


}
function autoSlide() {
    mostrarSlide(numSlide);
    numSlide++
}

setInterval(() => {
    autoSlide();
}, 3500);
*/	