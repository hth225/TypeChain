"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
;
const person = {
    name: "jason",
    age: 20,
    gender: "male"
};
const SayHi = (person) => {
    return `hello ${person.name}, you are ${person.age}!, you are ${person.gender}!`;
};
console.log(SayHi(person));
//# sourceMappingURL=index.js.map