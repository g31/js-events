//alert(window.add(10,1));
//alert(window.multiply(10,2));
//alert(x);
//alert(y);

function getFirstName(){
	var firstName= document.getElementById('first').value;
	document.getElementById('f1').innerHTML= firstName;	
}

function getLastName(){
	var lastName= document.getElementById('last').value;
	document.getElementById('l1').innerHTML= lastName;
	console.log(n10(15,5));
}

function add(a,b){
	var sum = a+b;
	return sum;
}

x=10;

var n1=undefined;
var n2=null;
var n3=true; //boolean
var n4=5; //number
var n5='Gayatri'; //string
var n6= [1,2,3,'hi',false]; //array
var n7= {name:'Sameer',
		 age: 17}; //object
var n8=  function hello(){alert('hello X');}; //this is a function expression (not anonymous)
var n9=  function (){alert('hello X');}; //this is an anonymous function expression

n8();

var n10= add; //also a funtion expression
//console.log(n10(20,5));



