
function supermanHero(name) {
	this.name = name;
	this.kind = "Supernatural";
	this.attire = ["costume", "cape"];
	this.moralcode = true;
	this.motivation = "strong belief in justice and humanitarian service";
	this.worksIndependent = true;
	this.alterEgo = "Clark Kent";
	this.powers = ["super strength", "flight", "invulnerability", "super speed", "heat vision", "freeze breath", "x-ray vision", "superhuman hearing", "healing factor"];
	this.currentPower = () => {
		return this.powers[Math.floor(Math.random() * (this.powers.length - 1))];
	};
}

function wonderwomanHero(name) {
	this.name = name;
	this.kind = "Supernatural";
	this.attire = ["costume", "cape", "crown"];
	this.moralcode = true;
	this.motiviation = "formal calling";
	this.worksIndependent = true;
	this.alterEgo = "Diana Prince";
	this.powers = ["super strength", "invulnerability", "flight", "combat skill", "combat strategy", "superhuman agility", "healing factor", "magic weaponry"];
	this.currentPower = () => {
		return this.powers[Math.floor(Math.random() * (this.powers.length - 1))];
	};
}

function batmanHero(name) {
	this.name = name;
	this.kind = "Skilled";
	this.attire = ["costume", "cape", "mask"];
	this.moralcode = true;
	this.motivation = "childhood trauma when parents were killed";
	this.worksIndependent = false;
	this.alterEgo = "Bruce Wayne";
	this.powers = ["exceptional martial artist", "combat strategy", "inexhaustible wealth", "brilliant deductive skill", "advanced technology"];
	this.currentPower = () => {
		return this.powers[Math.floor(Math.random() * (this.powers.length - 1))];
	};
	this.tools = ["bats", "armour", "car", "belt", "shark repellant"];
	this.sidekick = "Robin";
}

function phantomHero(name) {
	this.name = name;
	this.kind = "Skilled";
	this.attire = ["costume", "mask"];
	this.moralcode = true;
	this.motivation = "childhood trauma when parents were killed";
	this.worksIndependent = true;
	this.alterEgo = "Christopher Walker ";
	this.powers = ["strength", "intelligence", "trained pets"];
	this.currentPower = () => {
		return this.powers[Math.floor(Math.random() * (this.powers.length - 1))];
	};
	this.tools = ["costume", "eagle"];
	this.sidekick = "Wolf";
}

let phantom = new phantomHero("Phantom");
console.log(phantom.name, "current power is", phantom.currentPower());
console.log(phantom);


