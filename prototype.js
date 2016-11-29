let Superhero = function(){
	this.name = "Nameles";
	this.kind = "unknown";
	this.attire = ["costume"];
	this.moralcode = true;
	this.worksIndependent = true;
	this.alterEgo = null;
	this.powers = [];
	this.currentPower = null;
}

Superhero.prototype.setPowers = function(items){
	let newPowers = this.powers.concat(items);
	return newPowers;
};

Superhero.prototype.getCurrentPower = function(){
	let cpower = this.powers[Math.floor(Math.random() * (this.powers.length -1))];
	return cpower;
};

Superhero.prototype.setAttire = function(items){
	let nAttire = this.attire.concat(items);
	return nAttire;
};


var SuperNatural = function(){
	this.kind ="SuperNatural";
	this.mortal = false;
};
SuperNatural.prototype = new Superhero();

var SkilledHero = function(){
	this.kind = "Skilled";
	this.mortal = true;
	this.tools = [];
};
SkilledHero.prototype = new Superhero();

SkilledHero.prototype.setTools = function(items){
	let nTools = this.tools.concat(items);
	return nTools;
};


let Superman = new SuperNatural();
Superman.name = "Superman";
Superman.powers = Superman.setPowers(["super strength", "flight", "invulnerability", "super speed", "heat vision", "freeze breath", "x-ray vision", "superhuman hearing", "healing factor"]);
Superman.currentPower = Superman.getCurrentPower();
Superman.attire = Superman.setAttire(["cape"]);
console.log("Superman", Superman);

let Batman = new SkilledHero();
Batman.name = "Batman";
Batman.powers = Batman.setPowers(["exceptional martial artist", "combat strategy", "inexhaustible wealth", "brilliant deductive skill", "advanced technology"]);
Batman.currentPower = Batman.getCurrentPower();
Batman.attire = Batman.setAttire(["mask", "cape"]);
Batman.worksIndependent = false;
Batman.sidekick = "Robin";
Batman.tools = Batman.setTools(["bats", "armour", "car", "belt", "shark repellant"]);
console.log("Batman", Batman);







