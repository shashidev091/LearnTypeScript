console.log('Here we go learning ts once again...');
var number1 = 2.8;
var number2 = 3;
// console.log(number1 + number2);
function add(arg1, arg2) {
    return arg1 + arg2;
}
var result = add(number1, number2);
console.log(result);
var person = {
    name: "Shashi Bhagat",
    age: 27
};
console.log(person.name);
var person2 = {
    name: "Child",
    age: 7,
    hobbies: ['football', 'cricket'],
    roles: [10, "admin"]
};
console.log(person2);
var large_number = 234242736478926347267834627836478;
console.log(large_number.toString());
// Functions
function concatString(argOne, argTwo) {
    return argOne + argTwo;
}
var stringResult = concatString("This world is full of ", "surprises");
console.log(stringResult);
var combineValues;
function addValues(arg1, arg2) {
    return arg1 + arg2;
}
combineValues = addValues;
console.log(combineValues(23, 54));
// Type of callback
function funWithCallback(arg, callback) {
    var store = callback(arg);
    console.log(store);
}
funWithCallback("Shashi", function (arg) {
    return arg + " Bhagat";
});
console.log('Really');
