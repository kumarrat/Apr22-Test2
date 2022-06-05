// Write a program to display the n terms of odd natural number and their sum.

let n = parseInt(prompt('Enter a number'));
var sum = 0;
function sumOfOddNumber(n) {
for (var i = 1; i <= n; i++) {
if(i%2 !==0) {
    console.log(i);
    sum = sum + i;
}
}

console.log("Sum of odd number : " +sum);

}
sumOfOddNumber(n);