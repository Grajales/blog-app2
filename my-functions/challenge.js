/*
 * PART 1: `while` loops
 */

/*
 * Prompt:
 *
 * Use a while loop to count from 0 to 10. Log each number to the console.
 */
console.log("prompt 1")
let num= 0;
while (num <10) {
  console.log (num);
  num += 1;
}
/*
 * Prompt:
 *
 * Use a while loop to count from 10 to 0. Log each number to the console.
 */
console.log("prompt 2")
let num2= 10;
while (num2 > 0) {
  console.log (num2);
  num2 += -1;
}
/*
 * Prompt:
 *
 * Use `prompt()` to write a while loop that will continue to ask the
 * user for the magic number until they enter the value "7".
 */
console.log("prompt 3")
let magicNum= 0;
while (magicNum !== 7) {
  console.log("Enter the magic number");
  magicNum ++;
}

/*
 * PART 2: `for` loops
 */

/*
 * Prompt:
 *
 * Write a for loop that counts from 0 to 5.
 */
console.log("prompt 4")
for (let i=0; i<=5; i++) {
  console.log(i);
}
/*
 * Prompt:
 *
 * Write a for loop that counts down from 5 to 0.
 */
console.log("prompt 5")
for (let i=5; i>=0; i--) {
  console.log(i);
}
/*
 * Prompt:
 *
 * Write a for loop that counts from 0 to 10 in increments of 2.
 */
console.log("prompt 6")
for (let i=0; i<=8; i++) {
  console.log(i +2 );
}
/*
 * Prompt:
 *
 * Write a for loop that counts from -5 to 5, printing each number to the
 * console.
 */
console.log("prompt 7")
for (let i=-5; i<=5; i++) {
  console.log(i);
}
/*
 * Prompt:
 *
 * Create a variable called sum (make sure sum is defined outside of your loop).
 * Create a loop that counts from 1 to 10, incrementing by 1. This time, rather
 * than printing i to the console, add i to sum. After your loop, print the
 * value of sum to the console.
 *
 * Reflect: What did we just do here?
 */
console.log("prompt 8")
let sum = 0; 
for (let i=1; i<=10; i++) {
  sum = sum + i;
}
console.log(sum);
/*
 * Prompt:
 *
 * We can write any valid JavaScript inside the block of our loop (the part
 * between the curly braces). Let's put a conditional in there!
 *
 * Create a loop that counts from 0 to 10. Inside your loop, write a conditional
 * that matches these requirements:
 *
 *    - if the value of i is even, print out "i is event"
 *    - otherwise, print out "i is odd"
 */
console.log("prompt 9")
for (let i=0; i<=10; i++) {
 if (((i*3) % 2)==0) {
   console.log("i is even " + i);
 } else {console.log("i is odd " + i)};
}


/*
 * PART 3: Iterating through Arrays
 */

/*
 * Prompt:
 *
 * Write a for loop that prints out each item in the below array.
 */
console.log("prompt 10")
const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];
for (i=0; i < letters.length; i++) {
  console.log (letters[i]);
}
/*
 * Prompt:
 *
 * Write a for loop that sums the values in the below array.
 */
console.log("prompt 11")
const numbers = [23, 19, 23, 52, 12];
let sum2 = numbers[0]; 
for (i=1; i < numbers.length; i++) {
  sum2 = sum2 + numbers[i];
  }
  console.log (sum2);

/*
 * Prompt:
 *
 * Write a for loop that doubles each value in the following array.
 */
console.log("prompt 12 doubles array number")
const moreNumbers = [12, 23, 34, 45];
for (i=0; i < moreNumbers.length; i++) {
  console.log(moreNumbers[i]*2);
}
/*
 * Prompt:
 *
 * Write a for loop that sets a variable to the largest number in the following array
 */
console.log("prompt 13")
const moreNumbers2 = [12, 45, 23, 999, 7];
let maxInit = moreNumbers2[0]; 
for (i=0; i < moreNumbers2.length; i++) {
  if (moreNumbers2[i] > maxInit){
    maxInit = moreNumbers2[i]
  }
}
console.log("Max Array Number is " + maxInit);