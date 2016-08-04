'use strict';

function Person(f, l){
	/*var firstName = 'John'; //private variable
	var lastName = 'Doe'; //private variable
	this.fn = 'XXX'; //all public member attributes have to be prefixed with "this."*/
	
	/*this.firstName = f;
	this.lastName = l;*/
	
	//change firstName and lastName to private variables
	var firstName = f;
	var lastName= l;
	
	//getters
	this.getFirstName = function(){
		return firstName;
	};
	
	this.getLastName = function(){
		return lastName;
	};
	
	//setters
	this.setFirstName = function(val){
		 firstName = val;
	};
	
	this.setLastName = function(val){
		lastName = val;
	};
	
	
	var fullName = function () {
		return this.getFirstName() + ' ' + this.getLastName();
	};
	this.fullName = fullName;
	
	/*var age = a; //age is read only variable-- cannot be changed at run time
	
	//getter
	this.getAge = function () {
		return age;
	};
	
	//setter
	this.setAge = function(val){
		age = val;
	};*/
}

var x = new Person('John', 'Doe');
//x.age = 20;
var y = new Person('Gayatri', 'Rath');
console.log('Full NAME: ' + x.fullName());
//console.log('AGE: ' + x.getAge());

window.onload = function () {
	var firstNameEl = document.getElementById('first');
	var lastNameEl = document.getElementById('last');

	firstNameEl.addEventListener('keyup', getFirstName); //keyup, change, blur, keydown, etc. W3 schools
	lastNameEl.addEventListener('keyup', getLastName);
	
	function getFirstName(){
		document.getElementById('f1').innerHTML = firstNameEl.value;	
	}

	function getLastName(){
		document.getElementById('l1').innerHTML = lastNameEl.value;
	}
};
