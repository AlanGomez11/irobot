let header = document.getElementById('header');

let fondoVacio = document.getElementById('fondoVacio');
let cuadro = document.getElementById('cuadro');
let slogan = document.getElementById('slogan');
let hombre = document.getElementById('hombre');
let mujer = document.getElementById('mujer');
let cerebro = document.getElementById('cerebro');

window.addEventListener('scroll',function(){
	let value = window.scrollY;

	cuadro.style.left = value * -0.4 + 'px';
	cerebro.style.top = value * -1 + 'px';
	hombre.style.left = value * -1 + 'px';
	mujer.style.left = value * -1 + 'px';
})



