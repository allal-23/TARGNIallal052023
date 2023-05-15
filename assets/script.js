const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]
// On va selectioner les fleches selon leur classe
const arrowLeft = document.querySelector('.arrow_left');
const arrowRight = document.querySelector('.arrow_right');


// EventListener pour chaque fleche
// arrowLeft.addEventListener('click', () => {
// 	console.log('Arrow left clicked')
// })
// arrowRight.addEventListener('click', () => {
// 	console.log('Arrow right clicked')
// })



// On va selectioner "tous" les bullets points ici
// (remarque:querySelectorAll nous donne un tableua avec tous les élements qui ont la classe dot ici)
const dots = document.querySelectorAll('.dot');

// On va selectioner l'image et le texte 
const bannerImage = document.querySelector('.banner-img');


// dans queryselector ici il selectione le premier element <p> dans l'element qui a id="banner"(dans notre  cas il y a un seule élement <p>)
const slideTexte = document.querySelector('#banner p')


// Le variable qui va indiquer le numero du slide courrant initialement le slide 0 (premier)
let currentSlide = 0;
const lengthSlide = slides.length - 1;
// console.log(lengthSlide, slides.length)

arrowLeft.addEventListener('click', () => {
	// Si le currentSlide n'est pas le premier le currentSlide sera le slide précédent
	if (currentSlide > 0) {
		currentSlide -= 1;
	} else {
		// Sinon currentSlide sera le dernier
		currentSlide = lengthSlide;
	}
	// On appelle la function qui va changer le slide
	changerLeSlide();
})
arrowRight.addEventListener('click', () => {
	// Si le currentSlide n'est pas le dernier le currentSlide sera le slide suivant
	if (currentSlide < lengthSlide) {
		currentSlide += 1;
	} else {
		// Sinon currentSlide sera le premier
		currentSlide = 0;
	}
	// On appelle la function qui va changer le slide
	changerLeSlide();
})


function changerLeSlide() {
	slides.forEach((slide, index) => {
		if (currentSlide === index) {
			// console.log('hi')
			// Si on est l'index de ce slide est le numero du slide courrant,
			//  on mets l'image du slide sur le src de l'image et le tagline dans le slideTexte et on ajoute la classe dot_selected pour le bullet du meme index
			bannerImage.setAttribute('src', `./assets/images/slideshow/${slide.image}`);
			dots[index].classList.add('dot_selected')
			slideTexte.innerHTML = slide.tagLine;
		} else {
			//si on est pas dans l'index courrant on confirme que le bullet du mem index n'est pas active
			dots[index].classList.remove('dot_selected')
		}
	})
}
