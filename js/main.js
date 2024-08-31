const cardEl = document.querySelector('.card');

/* Promise.any() */
const promise1 = new Promise((resolve, reject) => {
	setTimeout(resolve, 200, '3428');
});

const promise2 = new Promise((resolve, reject) => {
	setTimeout(resolve, 100, '3429');
});

Promise.any([promise1, promise2]).then(function (val) {
	const cardTitleIdEl = cardEl.querySelector('.card__title .id');
	cardTitleIdEl.textContent = '#' + val;
});

/* String replaceAll() */
let description = 'Our Equilibrium collection promotes soft, soft and calm.';
description = description.replaceAll('soft', 'balance');

const cardDescriptionEl = cardEl.querySelector('.card__desc');
cardDescriptionEl.textContent = description;

/* Numeric Separators (_) */
const imageSize = 3_3;

const cardAuthorImageEl = cardEl.querySelector('.card__author-img');
cardAuthorImageEl.width = imageSize;
cardAuthorImageEl.height = imageSize;
