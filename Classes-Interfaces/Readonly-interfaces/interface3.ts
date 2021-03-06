interface Details {
    readonly name: string;
    age: number;
    getDetails(): void;
}

class Person implements Details {
    name: string;
    age: number;

    constructor(name: string, age:number) {
        this.name = name;
        this.age = age;
    }

    getDetails() {
        console.log(`Name is ${this.name}, and age is ${this.age}`);
    }
}

const josh = new Person('Josh',22);

//josh.name = 'joshy'; //Not possible as name is readonly 