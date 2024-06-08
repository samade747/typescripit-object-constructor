// // object constructor

// class
class House {
    numberOfDoors: number 
    numberOfWindows: number 
    houseNumber: number  
    ownerName: string 

// constructor
// constructor is a function that is called when an object is created
constructor(numberOfDoors: number, numberOfWindows: number, houseNumber: number, ownerName: string) {
    this.numberOfDoors = numberOfDoors
    this.numberOfWindows = numberOfWindows
    this.houseNumber = houseNumber
    this.ownerName = ownerName
}

}


let house = new House(3, 5, 12, "John")
let house2 = new House(3, 5, 12, "Jsamad")


console.log(house2)




// class Animal {
//     name : string

//     constructor(name: string){
//         this.name = name

//     }
//     walk() {
//         console.log("walking")    
//     }

//     eat(){
//         console.log("eating")    
//     }
    
// }

// class Dog extends Animal {
//     constructor(name: string){
//         super(name)
//     }

// }

// let dl = new Dog("dog")


// class Cat {
//     meow(){
//         console.log("meow meow ")
//     }
// }





class Animal {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    walk() {
        console.log(`${this.name} is walking`);
    }

    eat() {
        console.log(`${this.name} is eating`);
    }
}

class Dog extends Animal {
    constructor(name: string) {
        super(name);
    }

    bark() {
        console.log(`${this.name} is barking`);
    }
}

let dl = new Dog("Dog");
dl.walk(); // Dog is walking
dl.eat();  // Dog is eating
dl.bark(); // Dog is barking

class Cat extends Animal {
    constructor(name: string) {
        super(name);
    }

    meow() {
        console.log(`${this.name} says meow meow`);
    }
}

let cl = new Cat("Cat");
cl.walk(); // Cat is walking
cl.eat();  // Cat is eating
cl.meow(); // Cat says meow meow
