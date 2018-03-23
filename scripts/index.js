var myImg = document.querySelector('img');
var myButton = document.querySelector('button');
var mySubtitle = document.querySelector('h2');

myImg.onclick = function(){
	var mySrc = myImg.getAttribute('src');
	if(mySrc === 'img/firefox1.png'){
		myImg.setAttribute('src','img/firefox2.png');
	}else{
		myImg.setAttribute('src','img/firefox1.png');
	}	
}

function setName(){
	var name = prompt('Digite seu nome, por favor:');
	localStorage.setItem('name',name);
	mySubtitle.innerHTML = "Bem vindo, "+name+".";
}

myButton.onclick = function(){
	setName();
}

if(localStorage.geItem('name')){
	mySubtitle.innerHTML = "Bem vindo, "+localStorage.getItem('name')+".";	
}else{
	setName();
}