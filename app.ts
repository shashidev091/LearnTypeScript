console.log('Here we go learning ts once again...')

const number1 = 2.8;
const number2 = 3;

// console.log(number1 + number2);

function add(arg1: number, arg2: number) {
    return arg1 + arg2;
}

const result = add(number1, number2);

console.log(result)

// Objects in TS
// we have a generic type for objects is object.

interface Person {
    name: string;
    age: number;
    hobbies: string[];
    roles: [number, string]; // tuples
}

const person = {
    name: "Shashi Bhagat",
    age: 27
};

console.log(person.name);

const person2: Person = {
    name: "Child",
    age: 7,
    hobbies: ['football', 'cricket'],
    roles: [10, "admin"]
};

console.log(person2);