"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// interface Human {
//     name: string;
//     age: number;
//     gender: string;
// };
class Human {
    constructor(name, age, gender) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
}
const gyeong = new Human("Gyeong", 21, "female");
const SayHi = (person) => {
    return `hello ${person.name}, you are ${person.age}!, you are ${person.gender}!`;
};
console.log(SayHi(gyeong));
//# sourceMappingURL=index.js.map