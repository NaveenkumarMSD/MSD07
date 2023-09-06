// Create an array
const mainArray = [1, 2, 3, 4, 5, [6, 7, 8], 9, 10];

// Access elements in the main array
console.log("Element at index 0:", mainArray[0]); 
console.log("Element at index 5:", mainArray[5]); 

// Access elements in a subarray
const subArray = mainArray[5]; 
console.log("Element in subarray at index 0:", subArray[0]); 
console.log("Element in subarray at index 2:", subArray[2]); 

// Modify elements in the main array
mainArray[3] = 99;
console.log("Modified element at index 3:", mainArray[3]);

// Add elements to the end of the main array
mainArray.push(11);
console.log("Updated mainArray:", mainArray); 

// Remove elements from the end of the main array
mainArray.pop();
console.log("Updated mainArray after pop:", mainArray); 

// Find the length of the main array
console.log("Length of mainArray:", mainArray.length);