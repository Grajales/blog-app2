
let student1 = "Mark";
let student2 = "Liliana";
let student3 = "Joe";
// this will be put inside an array
let students = [ "Troy", "Yoge", "Todd", "Liliana"];
students;
students[3];
// Array inside arrays
let foods =[["Dill", "Sweet"], 
            ["Whole Wheat", "Multigrain","White",["Power Seed","9 grain"]]]
foods[1][3][1];
let todoList = [{ task:"Buy Bread company", done: false},
               {task: "Sell bread company", done: true},
               ]

todoList[1].done

let mixed = [ "Hello", 
             12, 
             function(){console.log("Hello World")},
             undefined,
             []];
mixed.length;
mixed[2]();      
// Array methods

// Add an item
let letters = ["A", "B", "C"];
letters.push("D");
letters
console.log(Object.keys(letters)) 
//Change an item
letters[0] = "a";
//Remove an item
letters.splice(2, 1);
//splice removes (location, number of items to remove starting from location)
letters
//Change an item

//Below defines what we can do with an array instance
Array.prototype.push
Array.prototype.sort
Array.prototype.splice
let x =[1,2,3];
//Calculator add
//
let calculator = {
   add: function(a,b){
    return a+b
  }
}
calculator.add(2,3)
let calculator2 = {
  sum: 0,
  add: function(a,b){
    this.sum += a+b
    return this.sum 
  }
}
calculator2.add(2,3)
calculator2.add(2,1)

// Example of the calculator with memory Wk1 Day5 homework
let sum2 = (...numbers)=>{
  let total = 0
  for(let number of numbers){
    total = number + total
  }
  return total
}
//Class Exercise
sum2(1,2,3,4)
let countArray = [3 ,4, 60, 10, 40]
countArray.sort(); //sorts based on string name
//ans [ 10, 3, 4, 40, 60 ]
countArray.shift() ;// removes first item
//10
countArray
//[ 3, 4, 40, 60 ]
countArray.unshift(1) //adds item at the begining
//[ 1, 3, 4, 40, 60 ]
countArray
countArray.push(100)
//[ 1, 3, 4, 40, 60, 100 ]
countArray
let pos = countArray.indexOf(100)
pos
let joinNumb = countArray.join()
//'1,3,4,40,60,100'
joinNumb
let joinNumbCol = countArray.join('\n')
joinNumbCol
/*
'1
3
4
40
60
100'
*/
//Class exercise
let studentsGA1 = [ "Troy", "Yoge", "Todd", "Liliana"];
studentsGA1.indexOf('Liliana');
//3
studentsGA1.push("BingCheng");
// 5 (gives new length of the array)
studentsGA1
//[ 'Troy', 'Yoge', 'Todd', 'Liliana', 'BingCheng' ]
studentsGA1.reverse();
//[ 'BingCheng', 'Liliana', 'Todd', 'Yoge', 'Troy' ]
let studentsGA2 =["Mark","Gary","John"];
//How to concatenate two arrays
let studentsGA = studentsGA1.concat(studentsGA2)
studentsGA
/*
[
  'BingCheng', 'Liliana',
  'Todd',      'Yoge',
  'Troy',      'Mark',
  'Gary',      'John'
]
*/
// Removing the last element in the array
let a=studentsGA.pop();
//'John'
studentsGA
//[ 'BingCheng', 'Liliana', 'Todd', 'Yoge', 'Troy', 'Mark', 'Gary' ]

//Spread operator
let dimensions = [10, 5, 2]
console.log(...dimensions)
// Function factorial
function factorial(x) {
  if(x<0) return;
  if(x==0) return 1;
  return x*factorial(x-1);
}
factorial(3)






