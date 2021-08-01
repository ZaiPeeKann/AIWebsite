'use strict'

const burger = document.querySelector('.header__burger');
const menu = document.querySelector('.header__menu');
let width = document.body.clientWidth;
const title = document.querySelectorAll('.columns__body');


// sliderSwiper

new Swiper('.slider', {
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},
	spaceBetween: 50,
	breakpoints: {
		500: {
			slidesPerView: 2,
			spaceBetween: 30,
		},
		850: {
			slidesPerView: 3,
			spaceBetween: 30,
		},

	}
});

if (window.innerWidth < 1150) {
	title.forEach((itemTitle) => {
		itemTitle.addEventListener('click', () => {
			let list = itemTitle.querySelectorAll('.columns__list');
			list.forEach(itemList => {
				let item = itemList.querySelectorAll('.columns__item');

				item.forEach((itemItem) => {
					itemItem.style.display = (itemItem.style.display === "block") ? "none" : "block";
				})
			})
		})
	})
}
// mobileCheck

const isMobile = {
	Android: function () {
		return navigator.userAgent.match(/Android/i);
	},
	BlackBerry: function () {
		return navigator.userAgent.match(/BlackBerry/i);
	},
	iOS: function () {
		return navigator.userAgent.match(/iPhone|iPad|iPod/i);
	},
	Opera: function () {
		return navigator.userAgent.match(/Opera Mini/i);
	},
	Windows: function () {
		return navigator.userAgent.match(/IEMobile/i);
	},
	any: function () {
		return (
			isMobile.Android() ||
			isMobile.BlackBerry() ||
			isMobile.iOS() ||
			isMobile.Opera() ||
			isMobile.Windows());
	},
};


// burgerMenu
burger.addEventListener('click', burgerFunc);

function
burgerFunc() {
	burger.classList.toggle('active');
	menu.classList.toggle('active');
	document.body.classList.toggle('lock')
}
