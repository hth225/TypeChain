interface Human {
    name: string;
    age: number;
    gender: string;
};

const person = {
    name: "jason",
    age: 20,
    gender: "male"
};

const SayHi = (person: Human): string => {
    return `hello ${person.name}, you are ${person.age}!, you are ${person.gender}!`;
};

console.log(SayHi(person));

export{};