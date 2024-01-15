// 1. Create an empty array and fill it with different elements using the push-method. Log it to the console.
// let myArray = [];
// myArray.push(1, 2, 3, 4, 5, 6);
// console.log(myArray);


// 2. Create an array containing arbitrary numbers. Loop throught that array and multiply each element with 3 and log that to the console.
// let myArray = [5, 10, 15, 20, 25, 30, 35, 40];
// for(let i = 0; i < myArray.length; i++){
//     let result = myArray[i] * 3;
//     console.log(result);
// }


// 3. Create an array with numbers, and one empty array. Loop through the array with numbers and do an if check in each iteration. If that number is bigger then a specific number, 5 for example, add that number to the empty array. Log the new array to the console in the end. Remember to use the indexes to get the elements from the array with numbers.
// let myArray = [2, 3, 4, 5, 6, 7, 8, 9];
// let newArray = [];
// let i = 0;
// while(i < myArray.length){
//     if (myArray[i] > 5){
//         newArray.push(myArray[i]);
//     }
//     i++;
// }
// console.log(newArray);


// 4. Create an array with random numbers. Loop through the array and add them all together. Log the total sum of all the elements to the console. `hint` - You will need a variable here that store the sum as you iterate over the array.
// let myArray = [2, 3, 4, 5, 6, 7, 8, 9];
// let i = 0;
// do {
//     let sum = myArray.reduce((a, b) => a + b, 0);
//     console.log(sum);
//     i++;
// } while (i < myArray.length)


// 5. Create an array with some elements. Now search for a specific element while you are looping through the array. If you find the element you are searching for, log it to the console.
// let myArray = [2, 3, 4, 5, 6, 7, 8, 9];
// myArray.forEach(item => {
//     if (item === 5){
//         console.log(item);
//     }
// })


// 6. Create an array with some elements, remove the last element **WITHOUT** using `pop()`.
// let myArray = [2, 3, 4, 5, 6, 7, 8, 9];
// myArray = myArray.slice(0, -1);
// console.log(myArray);


// 7. Create an array with 10 different numbers. Find the biggest number in the array and log it to the console. `hint` - You will need a variable that holds the current biggest number.
// let myArray = [17, 2, 67, 4, 25, 6, 81, 8, 30, 10];
// let biggestNumber = Math.max(...myArray);
// console.log(biggestNumber);


// 8. Create an array with some elements and an empty array. Using a loop, copy the content of the first array to the empty array.
// let myArray = [17, 2, 67, 4, 25, 6, 81, 8, 30, 10];
// let newArray = [];
// let i = 0;
// while (i < myArray.length){
//     newArray.push(myArray[i]);
//     i++;
// }
// console.log(newArray);


// 9. Create an array with some elements. Use a loop to empty the entire array so there are no elements left in the end.
// let myArray = [17, 2, 67, 4, 25, 6, 81, 8, 30, 10];
// while (myArray.length > 0){
//     myArray.pop();
// }
// console.log(myArray);