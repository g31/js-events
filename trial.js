var firstNameEl = document.getElementById('first');
var lastNameEl = document.getElementById('last');

function getFirstName(){
	document.getElementById('f1').innerHTML = firstNameEl.value;	
}

function getLastName(){
	document.getElementById('l1').innerHTML = lastNameEl.value;
}

firstNameEl.addEventListener('keyup', getFirstName); //keyup, change, blur, keydown, etc. W3 schools
lastNameEl.addEventListener('keyup', getLastName);
