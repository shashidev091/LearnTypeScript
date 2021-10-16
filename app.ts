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
let large_number = 234242736478926347267834627836478;
console.log(large_number.toString());

// Custom type

type Combinable = number | string;

// type alias with custom literal type

type newType = 'as-number' | 'as-text'

// Functions

function concatString(argOne: string, argTwo: string): string {
    return argOne + argTwo;
}

const stringResult = concatString("This world is full of ", "surprises");

console.log(stringResult);

let combineValues: (a: number, b: number) => number;

function addValues(arg1: number, arg2: number) {
    return arg1 + arg2;
}

combineValues = addValues;

console.log(combineValues(23, 54))

// Type of callback

function funWithCallback(arg: string, callback: (args: string) => string) {
    const store = callback(arg);
    console.log(store);
}

funWithCallback("Shashi", (arg) => {
    return arg + " Bhagat";
})

console.log('Really');