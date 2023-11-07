//to sort an array in descending order
function sortDescending(arr) {
     return arr.sort((a, b) => b - a);
 }
 
 //to take input from the user
 function takeUserInput() {
     const size = parseInt(prompt("Enter the size of the array: "));
 
     if (isNaN(size)) {
         console.log("Invalid input for array size. Please enter a valid number.");
         return;
     }
     
 
     const inputArray = [];
     for (let i = 0; i < size; i++) {
         const element = parseFloat(prompt(`Enter element ${i + 1}: `));
         if (!isNaN(element)) {
             inputArray.push(element);
         } else {
             console.log(`Invalid input for element`);
         }
     }
 
     return inputArray;
 }
 
 const inputArray = takeUserInput();
 
 if (inputArray.length > 0) {
     console.log("Array before sorting: ", inputArray);
    const sortedArray = sortDescending(inputArray.slice()); 
     console.log("Array in Descending Order:", sortedArray);
}
