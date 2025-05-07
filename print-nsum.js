
//print sum of number from 0 to n
let n = parseInt(prompt("Enter a number:"));
let sum = 0;

for (let i = 0; i <= n; i++) {
    sum += i;
}

console.log("The sum from 0 to " + n + " is: " + sum);
