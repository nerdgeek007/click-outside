// grab the buttons
const grabButtons = document.querySelectorAll('.card button');

const modalInner = document.querySelector('.modal-inner');

const modalOuter = document.querySelector('.modal-outer');

// attach a click event on every button
function handleButtons(e) {
	const button = e.currentTarget;
	// grab the card according to the click
	const card = button.closest('.card');
	// grab the image source
	const imgSrc = card.querySelector('img').src;
	// grab the data description
	const data = card.dataset.description;
	const name = card.querySelector('h2').textContent;
	// populate the modal info
	modalInner.innerHTML = `
  <img width="400" height="400" src="${imgSrc.replace(
		'200',
		'400'
	)}" alt="${name}"/>
  <p>${data}</p>
  `;
	// show the modal
	modalOuter.classList.add('open');
}

grabButtons.forEach(button => button.addEventListener('click', handleButtons));

// close the modal
function closeModal() {
	modalOuter.classList.remove('open');
}

modalOuter.addEventListener('click', function (e) {
	const isOuter = !e.target.closest('.modal-inner');
	if (isOuter) {
		closeModal();
	}
});

window.addEventListener('keydown', e => {
	if (e.key == 'Escape') closeModal();
});
