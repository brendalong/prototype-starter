//start with order
let Order = function(){

};

//define pizza. Root function in prototype chain
let Pizza = function(){
	this.toppings = ["cheese"];
	this.crustThickness = 1;
	this.shape = "round";
};
Pizza.prototype.setCrustThickness = function(amount){
	this.crustThickness = this.crustThickness * amount;
};

Pizza.prototype.setToppings = function(toppings){
	this.toppings = toppings ? this.toppings.concat(toppings) : this.toppings;
};

// new object that will inherit from pizza
let DeepDish = function(items){
	this.description = "yummy and filling";
	this.setToppings(items);
	this.shape = "square"
};
DeepDish.prototype = new Pizza(); //tied to pizza

//now go back and make setToppings

let ThinCrust = function(items){
	this.description = "just like paper";
	this.setToppings(items);
};
ThinCrust.prototype = new Pizza();


//root function
let Topping = function(){
	this.price = .50;
}

let Meat = function(){
	this.isSpicy = false;
}

Meat.prototype = new Topping();

Meat.prototype.makeSpicy = function(){
	this.isSpicy = true;
}

let Pepperoni = function(){
	this.sourceMeat = "pork parts";
};







