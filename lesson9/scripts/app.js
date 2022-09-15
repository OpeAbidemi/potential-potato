// // Classes

// class Person {
//     name;
//     age = 0;

//     eat() {
//         console.log("Eating");
//     }

//     constructor(fName, sName, age) {
//         this.name = `${fName} ${sName}`;
//         this.age = age;
//     }

//     changeName(newName) {
//         this.name = newName;
//     }

//     sleep() {
//         console.log(`${this.name} is sleeping`);
//     }

//     visit(person) {
//         console.log(`${this.name} is visiting ${person.name}`);
//     }
// }

// const person1 = new Person("James", "Bond", 25);
// const person2 = new Person("Emmanuel", "McPherson", 16);

// // console.log(person1.name);

// // person1.changeName("June Bond")

// // console.log(person1.name);

// // person1.visit(person2);


// Inheritance

class Herbivore {
    plant;
    eatPlants() {
        console.log(`Eating ${this.plant}`);
    }

    constructor(food) {
        this.plant = food
    }
}

// "".to

class Carnivore {
    meat;
    eatMeat() {
        console.log(`Eating ${this.meat}`);
    }   

    constructor(food, age) {
        this.meat = food
    }
}

class Lion extends Carnivore {
    name;
    roar() {

    }

    constructor(name) {
        super("Antelope")
        this.name = name
    }
}

class Goat extends Herbivore {
    bleat() {

    }
}

const goat1 = new Goat();
goat1.eatPlants();

const lion = new Lion("Simba");
lion.eatMeat()

const carnivore = new Carnivore("Cow Meat");
carnivore.eatMeat()

