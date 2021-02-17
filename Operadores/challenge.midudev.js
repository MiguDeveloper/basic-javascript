const numbers = [1, [2, 3, [4, 5]], 6];
const copyNumbers = [...numbers];
const jsonNumber = JSON.parse(JSON.stringify(numbers));

numbers[1][0] = 5;
console.log(numbers[1][0]);
console.log(copyNumbers[1][0]);
console.log(jsonNumber[1][0]);

numbers[1][2][0] = 9;
console.log(numbers[1][2][0]);
console.log(copyNumbers[1][2][0]);
console.log(jsonNumber[1][2][0]);

copyNumbers[0] = 8;
console.log(numbers[0]);
console.log(copyNumbers[0]);
