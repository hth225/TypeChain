// interface Human {
//     name: string;
//     age: number;
//     gender: string;
// };
class Human {
    public name : string;
    public age : number;
    public gender : string;
    constructor(name:string, age:number, gender:string){
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
}

const gyeong = new Human("Gyeong", 21, "female");

const SayHi = (person: Human): string => {
    return `hello ${person.name}, you are ${person.age}!, you are ${person.gender}!`;
};

console.log(SayHi(gyeong));

export{};