// Classes

const person1 = {
    name: "John",
    age: 23,
    eat() {
        console.log("Eating");
    },
    changeName(newName) {
        this.name = newName;
    },
    sleep() {
        console.log(`${this.name} is sleeping`);
    },
    visit(person) {
        console.log(`${this.name} is visiting ${person.name}`);
    }
}

person1.sleep()

// before
console.log(person1.name);

person1.eat()
person1.changeName("Johnny")

person1.sleep()

// after
console.log(person1.name);

const person2 = {
    name: "James",
    age: 45
}

const person3 = {
    name: "Raheem",
    age: 45
}

person1.visit(person2)
person1.visit(person3)