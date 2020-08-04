/*
====================== 
Global Variables Start
======================
*/
const aboutImgs = ['imgs/about1.jpg', 'imgs/about2.jpg', 'imgs/about3.jpg']
const aboutSlideCount = aboutImgs.length
let i = 0

const navLinks = document.querySelectorAll('.nav-link')
let slideImgs = document.querySelectorAll('.work-img')
let slideCount = slideImgs.length

let sliderArray = [...slideImgs]

let currentSlide = 0
let sliderBigImg = document.querySelector('.big-img')


let prevBtn = document.querySelector('.overlay-prev')
let nextBtn = document.querySelector('.overlay-next') 

/*
===================== 
Global Variables End
=====================
*/


/*
================ 
Hamburger Start
================
*/

//Hamburger
document.querySelector('.hamburger').addEventListener('click', () => {
	document.body.classList.toggle('open')
	
	//Creating a Cross sign
	document.querySelector('.hamburger').classList.toggle('toggle')
})

//Closing nav after clicking the link
navLinks.forEach(link => {
	link.addEventListener('click', hamburger)
})

/*
============== 
Hamburger End
==============
*/


/*
================== 
About Slider Start
==================
*/

document.querySelector('.prev').addEventListener('click', () => {
	if(i <= 0) {
		i = (aboutSlideCount - 1)
		aboutChecker()
	} else {
		i-= 1
		aboutChecker()
	}
})

document.querySelector('.next').addEventListener('click', () => {
	if(i >= (aboutSlideCount - 1)) {
		i = 0
		aboutChecker()
	} else {
		i+= 1
		aboutChecker()
	}
})

/*
================ 
About Slider End
================
*/


/*
============= 
Slider Start
=============
*/
								  
//Slider Showing & Disappering
sliderArray.forEach(img => {

	img.addEventListener('click', () => {
		currentSlide = img.dataset.slide

		// Get img src
		let imgSrc = img.getAttribute('src')

		//Using The Attribute We Get In The Slider Image
		sliderBigImg.setAttribute('src', imgSrc)

		//Make Sure The Sidebar returns Off Screen
		hamburger()
		document.body.classList.toggle('overlay-open')

		//Making a Cross Sign To Close The Slider
		document.querySelector('.hamburger').style.display = 'none'
		let cross = document.createElement('span')
		cross.setAttribute('class', 'cross-sign')
		cross.appendChild(document.createTextNode('X'))
		document.querySelector('.slider-overlay').appendChild(cross)
		cross.addEventListener('click', () => {
			document.body.classList.remove('overlay-open')
			document.querySelector('.hamburger').style.display = 'block'
		})

		
	})

})	

prevBtn.addEventListener('click', prevSlide)
nextBtn.addEventListener('click', nextSlide)

/*
=========== 
Slider End
===========
*/


/*
==================== 
Loading screen Start
====================
*/

window.addEventListener('load', () => {
	setTimeout( ()=> {
		document.body.classList.add('fadeOut')}, 500)
	setTimeout( () => {
		document.querySelector('.loading-body').remove()}, 3000)
})

/*
=================== 
Loading screen End
===================
*/

/*
================ 
Functions Start
================
*/

//Prev Slide Functions
function prevSlide() {
	if(currentSlide <= 0) {
		currentSlide = slideCount-1
		checker()
		 } else {
			 currentSlide--;
		   checker()
		 }
}

//next Slide Functions
function nextSlide() {	
	if(currentSlide >= (slideCount-1)) { 
			currentSlide = 0
			checker()
		 } else {
			 currentSlide++
			 checker();
		 }
}  

//Checker Function
function checker() {
	removeActive()
	sliderArray[currentSlide].classList.add('change-imge')

	let imgSrc = sliderArray[currentSlide].getAttribute('src')

	//Using The Attribute We Get In The Slider Image
	sliderBigImg.setAttribute('src', imgSrc)
}

//Remove Active Class
function removeActive() {
	
	sliderArray.forEach((img) => {
		
		img.classList.remove('change-imge')
		
	})
}	

// Hamburger Function
function hamburger() {
	document.body.classList.remove('open')
	document.querySelector('.hamburger').classList.remove('toggle')
}

//About Checker Function
function aboutChecker() {
	document.querySelector('.about-img').setAttribute('src', aboutImgs[i])
}

/*
============== 
Functions End
==============
*/