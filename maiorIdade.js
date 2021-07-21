var idade;
idade = document.getElementsByName(idade);


if (idade >= 18) {
	var maiorIdade = true;
} else {
	var maiorIdade = false;
}


if (maiorIdade){
	document.getElementById('result').src='./img/driving.jpg';
	document.write("Maior de idade. Pode dirigir!");
} else {
	document.getElementById('result').src='./img/crying.jpg';
	document.write("Menor de idade. :(");
}