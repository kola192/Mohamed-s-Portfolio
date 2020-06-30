//Global Variables
const navLinks = document.querySelectorAll('.nav-link')
let slideImgs = document.querySelectorAll('.work-img')
let slideCount = slideImgs.length
let currentSlide = 1

let prevBtn = document.querySelector('.overlay-prev')
let nextBtn = document.querySelector('.overlay-next') 
console.log(nextBtn)


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

//Hamburger Function
function hamburger() {
	document.body.classList.remove('open')
		document.querySelector('.hamburger').classList.remove('toggle')
}
								  
//Slider Showing & Disappering
slideImgs.forEach(img => {
	img.addEventListener('click', () => {
		hamburger()
		document.body.classList.toggle('overlay-open')
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

// prevBtn.addEventListener('click', prevSlide)
// nextBtn.addEventListener('click', nextSlide)

// //Prev & Next Slide Functions
// function nextSlide() {	
// 	if(currentSlide >= slidesCount) { 
// 			currentSlide = 1
// 			cheker()
// 		 } else {
// 			 currentSlide++;
// 			 cheker();
// 		 }
// } 

// function prevSlide() {
// 	if(currentSlide <= 1) {
// 		currentSlide = slidesCount;
// 		cheker();
// 		 } else {
// 			 currentSlide--;
// 		   cheker();
// 		 }
// } 

// //Checker Function
// function checker() {

// }











