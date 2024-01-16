
function action1(){
	let predio = document.getElementById('predio')
	let janelas = document.getElementsByClassName('janela')
	document.body.style.backgroundColor = 'blue';
	predio.setAttribute('style','border: 1px solid #000000;')

	for (let i=0; i<janelas.length; ++i){
		janelas[i].setAttribute(
			'style',
			'border: 1px solid black; background-color: gray;')
	}

	alert("Good night")
}



function action2(){
	let predio = document.getElementById('predio')
	let janelas = document.getElementsByClassName('janela')
	document.body.style.backgroundColor = 'black';
	predio.setAttribute('style','border: 1px solid #ffffff;')

	for (let i=0; i<janelas.length; ++i){
		janelas[i].setAttribute(
			'style',
			'border: 1px solid #ffffff; background-color: yellow;')
	}

	alert("Good night")
}


















