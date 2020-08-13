let stringOne = "I am a string";
let stringTwo = 'I am a string with single quotes';
let stringThree = `I am a string with backticks`;

console.log('before reassignment: ', stringOne);

stringOne = "hey";

//console log can print multiple values
console.log("after reassignment: ", stringOne);
console.log(stringTwo); 
console.log(stringThree);