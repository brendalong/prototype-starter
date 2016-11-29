//what are the properties/methods that are common

let Superhero = function(){
	this.name = null;
	this.kind = "unknown";
	this.attire = ["costume"];
	this.moralcode = true;
	this.worksIndependent = true;
	this.alterEgo = null;
	this.powers = [];
	this.currentPower = null;
}

//setup methods for ALL Superheros
Superhero.prototype.setPowers = function(items){
	let newPowers = this.powers.concat(items);
	return newPowers;
};

Superhero.prototype.getCurrentPower = function(){
	let cpower = this.powers[Math.floor(Math.random() * (this.powers.length - 1))];
	return cpower;
};

Superhero.prototype.setAttire = function(items){
	let nAttire = this.attire.concat(items);
	return nAttire;
};


// New types that will inherit from Superhero
var SuperNatural = function(){
	this.kind = "Supernatural";
	this.mortal = false;
};
SuperNatural.prototype = new Superhero();


var SkilledHero = function(){
	this.kind = "Skilled";
	this.mortal = true;
	this.tools = []; //Only SkilledHeros have tool - significant to make prototypes
};
SkilledHero.prototype = new Superhero();


//set up some additional stuff specific to SkilledHero Superheros
SkilledHero.prototype.setTools = function(items){
	let nTools = items;
	return nTools;
}



var Superman = new SuperNatural();
Superman.name = "Superman";
Superman.powers = Superman.setPowers(["super strength", "flight", "invulnerability", "super speed", "heat vision", "freeze breath", "x-ray vision", "superhuman hearing", "healing factor"]);
Superman.currentPower = Superman.getCurrentPower();
Superman.attire = Superman.setAttire(["cape"]);
console.log("Superman", Superman);


var Batman = new SkilledHero();
Batman.name = "Batman";
Batman.powers = Batman.setPowers(["exceptional martial artist", "combat strategy", "inexhaustible wealth", "brilliant deductive skill", "advanced technology"]);
Batman.currentPower = Batman.getCurrentPower();
Batman.attire = Batman.setAttire(["mask", "cape"]);
Batman.worksIndependent = false;
Batman.sidekick = "Robin";
Batman.tools = Batman.setTools(["bats", "armour", "car"]);
console.log("Batman", Batman);


