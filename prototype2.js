"use strict";
//good read http://phrogz.net/js/classes/OOPinJS2.html
//step one - define your main object with default values

let Animal = function(){
	this.type = "unknown critter";
	this.hair = "short";
	this.isPet = true;
	
};

//set some methods on the animal
Animal.prototype.getHealth = function(){
	let newHealth = Math.ceil(Math.random() * (this.healthMax - this.healthMin) + this.healthMin);
	return newHealth;
}

Animal.prototype.attack = function(){ 
	let newAttack = Math.floor(Math.random() * (this.attackMax - this.attackMin)) + this.attackMin;
 	return newAttack;
}


//step two - add specific details for sub-object
//these could also allow values to be passed in
let dog = function(){
	console.log("dog run");
	this.type = "dog";
	this.healthMax = 200;
	this.healthMin = 100;
	
};

let cat = function(){
	this.type = "cat";
	this.isPet = false;
	this.attackMin = 400;
	this.attackMax = 500;
	//this.attackVals = {max:200, min:100};
	
};



//step three - set sub-object as extension of main object
dog.prototype = new Animal();
cat.prototype = new Animal();

//set up some additional stuff specific to cats
cat.prototype.hasClaws = true;

//step four - declare new instances based on sub-objects.
//these will include the sub and main properties/methods
let pitbull = new dog();
pitbull.health = pitbull.getHealth();

let zoocat = new cat();
//modify the default properties
let housecat = new cat();
housecat.type = "kitten";
housecat.isPet = true;
housecat.attack = housecat.attack;
//the pitbull inherits the hair from animal unless specified.
//pitbull.hair = "long";
console.log("my pitbull hair:", pitbull.hair, "health:", pitbull.health);
console.log("zoocat", zoocat.type, zoocat.isPet, "claws:", zoocat.hasClaws);
console.log("housecat", housecat.type, housecat.isPet, "attack:", housecat.attack(), "claws:", housecat.hasClaws);

console.log("get a new attack for the housecat", housecat.attack());

