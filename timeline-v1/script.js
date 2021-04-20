function btnShowMore() {
	const dots = document.getElementById('dots')
	const moreText = document.getElementById('more')
	const btnText = document.getElementById('myBtn')

	if (dots.style.display === 'none') {
		dots.style.display = 'inline'
		btnText.innerHTML = 'Leia mais'
		moreText.style.display = 'none'
	} else {
		dots.style.display = 'none'
		btnText.innerHTML = 'Ocultar'
		moreText.style.display = 'inline'
	}
}
