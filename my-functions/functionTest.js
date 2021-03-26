function sayHello(){
  console.log("Hello")
}
sayHello()
function multiply(x,y){
  let result = x*y;
  console.log(result);
}
multiply (3,2)
function greet(name) {
  console.log("Hello", name)
}
console.log( 1,2,3,10)
console.log(1+2+3+10)
console.log("A", "B", "C")
console.log("A"+"B"+"C")
function double(x){
  return x*2;
}
let answer=double(4);
answer
function add(x,y) {
  return x+y; //output
}
function multiply2(x,y) {
  return x * y; //output
}
console.log(multiply2(add(1,1), add(2,1)))
//side effects example
function subtract(){
  z =x-y // if variables are not defined as inputs and also not defined function with let they will become global, use always return
}
let x=1 //not good to define outside
let y =2
let z =0 // need to define inside if not 
subtract()
console.log(z)

function sayHello2(){
  console.log("Hello");
}
let sayGoodbye =function (){
  console.log("Goodbye")
}
sayGoodbye()
// function in javascript are values
let xx =function(){return x*2}
//Object lesson
let car ={
  make: "Honda",
  model: "Civic",
  year: 1997,
  color: "blue"
}
let otherCar =["Honda", "Civic","1997", "Blue" ];
let seiStudents = {
  name: " James", //name is a key, James is a value
  address: {
    number: 123,
    streetName: " Main Str",
    zip: 123,
  },
  softwareAssets: [ "iterm2", "Firefox"]
}
let carO = new Object(); //Object function call
carO.model = "Ford";
let carA = new Array();
let carA2 = [];
carO
console.log(carO.model);
carA

for( key in seiStudents){
  console.log(key)
}
for( key in seiStudents){
  console.log(seiStudents[key])
}
console.log(seiStudents.address.zip)

//Using Hyphenated keys
let seiStudent2 = {
  gender: "Female",
  'company-name': "JD",
  hardwareAssets: ["monitor", "laptop", "keyboard"] 
}

seiStudent2.['company-name'] = "John Deere";
seiStudent2
delete seiStudent2.['company-name'] 
seiStudent2

let seiStudent3 = {
  gender: "Female",
  'company-name': "JD",
  hardwareAssets: ["monitor", "laptop", "keyboard"],
  doHomework: function (){
    console.log("type")
  },
  haveADrink: function(drink) {
    console.log("I will have a " + drink)
  }
}
seiStudent3.doHomework();
seiStudent3.haveADrink("hot tea")
/*
function reverseString(str) {
    var newString = "";
    for (var i = str.length - 1; i >= 0; i--) {
        newString += str[i];
    }
    return newString;
}
reverseString('hello');
*/

function reverseString2(str) {
    let strArray = str.split(""); 
  let reverseArray =[];
  // var splitString = "hello".split("");
    console.log(strArray.length);
     for (let i=(strArray.length-1); i>=0; i--) {
       console.log(i);
     reverseArray.push(strArray[i]);
      } 
  return reverseArray.join("");
  //reverseArray.shift();
}
reverseString2("emailed");