//constructor
function  Func(variable) {
    //first letter is UpperCase
    //use this set variable
    this.variable = variable;
}

//understand own properties
function Bird(name) {
    this.name = name;
    this.numLegs = 2;
}

let canary = new Bird("Tweety");
let ownProps = [];
// in fact every instance of Bird WILL
//have its own copy of these properties (name, numLegs)

for(let property in canary){
    if(canary.hasOwnProperty(property)){
        ownProps.push(property);
    }
}

//use prototype properties to reduce duplicate code
function Dog(name) {
    this.name = name;
}
// the prototype is an object that is shared among all
// instances of Dog

Dog.prototype.numLegs = 4;


// own properties and prototype
function Dog(name) {
    this.name = name;
}

Dog.prototype.numLegs = 4;

let beagle = new Dog("Snoopy");

let ownProps = [];
let prototypeProps = [];

// Add your code below this line
for(let property in beagle){
    if(beagle.hasOwnProperty(property)){
        ownProps.push(property);
    }else{
        prototypeProps.push(property);
    }
}


//a more effcient way to set the prototype to a new object
function Dog(name) {
    this.name = name;
}

Dog.prototype = {
    // Add your code below this line
    numLegs: 4,
    eat: function(){
        console.log("haha");
    },
    describe: function(){
        console.log('My name IS' + this.name);
    }
};


//set constructor property when changing the prototype
//because it erased the constructor property
function Dog(name) {
    this.name = name;
}

// Modify the code below this line
Dog.prototype = {
    constructor: Dog,
    numLegs: 2,
    eat: function() {
        console.log("nom nom nom");
    },
    describe: function() {
        console.log("My name is " + this.name);
    }
};

//use isprototypeof to inherits their parents prototype
function Dog(name) {
    this.name = name;
}

let beagle = new Dog("Snoopy");

// Add your code below this line
Dog.prototype.isPrototypeOf(beagle);



//understand the prototype chain
function Dog(name) {
    this.name = name;
}

let beagle = new Dog("Snoopy");

Dog.prototype.isPrototypeOf(beagle);  // => true

//prototype is a object
//a prototype can have its own prototype
// Object prototype is supertype of all obj
Object.prototype.isPrototypeOf(Dog.prototype);


//use inheritance to reduce repeat code
function Cat(name) {
    this.name = name;
}

Cat.prototype = {
    constructor: Cat,

};

function Bear(name) {
    this.name = name;
}

Bear.prototype = {
    constructor: Bear,

};

function Animal() { }

Animal.prototype = {
    constructor: Animal,
    eat: function() {
        console.log("nom nom nom");
    }
};


//use Object.create effectively giving any instance
function Animal() { }

Animal.prototype = {
    constructor: Animal,
    eat: function() {
        console.log("nom nom nom");
    }
};

// Add your code below this line

let duck = Object.create(Animal.prototype); // Change this line
let beagle = Object.create(Animal.prototype); // Change this line

duck.eat(); // Should print "nom nom nom"
beagle.eat(); // Should print "nom nom nom"


//use Object.create to inherit parents's prototype
function Animal() { }

Animal.prototype = {
    constructor: Animal,
    eat: function() {
        console.log("nom nom nom");
    }
};

function Dog() { }

// Add your code below this line

Dog.prototype = Object.create(Animal.prototype);
let beagle = new Dog();
beagle.eat();  // Should print "nom nom nom"





// Add methods after inheritance
function Animal() { }
Animal.prototype.eat = function() { console.log("nom nom nom"); };

function Dog() { }

// Add your code below this line
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

Dog.prototype.bark = function(){
    console.log("Woof!");
}


let beagle = new Dog();

beagle.eat(); // Should print "nom nom nom"
beagle.bark(); // Should print "Woof!"



// override inherited methods
function Bird() { }

Bird.prototype.fly = function() { return "I am flying!"; };

function Penguin() { }
Penguin.prototype = Object.create(Bird.prototype);
Penguin.prototype.constructor = Penguin;

// Add your code below this line
Penguin.prototype.fly = function() { return "Alas, this is a flightless bird.";}


// Add your code above this line

let penguin = new Penguin();
console.log(penguin.fly());




//use a mixin to add common behavior between unrelated objects
let bird = {
    name: "Donald",
    numLegs: 2
};

let boat = {
    name: "Warrior",
    type: "race-boat"
};

// Add your code below this line
let glideMixin = function(obj){
    obj.glide = function() {
        console.log("haha");
    }
}


glideMixin(bird);
glideMixin(boat);





//use closure to protect properties
//closure: a function always has access to the context in
// which is was created
function Bird() {
    let weight = 15;

    this.getWeight = function(){
        return weight;
    }
}





//immediately invoked Function Expression(IIFE)
(function() {
    console.log("A cozy nest is ready");
})();



//use an IIFE to create a module
let funModule = (function(){
    return {
        isCuteMixin:function(obj) {
            obj.isCute = function() {
                return true;
            };
        },
        singMixin : function(obj) {
            obj.sing = function() {
                console.log("Singing to an awesome tune");
            };
        }
    }
})();