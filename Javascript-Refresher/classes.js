/* class Human {
    constructor(){
        this.gender = 'male';
    }

    printGender() {
        console.log(this.gender);
    }
}

class Person extends Human {
    constructor() {
        super(); // Call the constructor of the parent class
        this.name = 'Max';
    }

    printName() {
        console.log(this.name);
    }
}

const person = new Person();
person.printName();
person.printGender();  */

class Human {
    gender = 'male';
    printGender = () => {
        console.log(this.gender);

    }
}

class Person extends Human {
    name = 'Max';
    printName = () => {
        console.log(this.name);
    }
}

const person = new Person();
person.printName();
person.printGender();