//#To square(root) or not to square(root)

//Write a method, that will get an integer array as parameter and will process every number from this array.
//Return a new array with processing every number of the input-array like this:

//If the number has an integer square root, take this, otherwise square the number.

//[4,3,9,7,2,1] -> [2,9,3,49,4,1]
//The input array will always contain only positive numbers and will never be empty or null.


// If sqr n = int pass sqr, else square num.

// map?

function squareOrSquareRoot(array) {
    let output = []
    array.forEach(i => {
        if (Number.isInteger(Math.sqrt(i))){
            output.push(Math.sqrt(i));
        } else output.push(i*i) 
    });
    return output
    console.log(output)
}

squareOrSquareRoot([ 4, 3, 9, 7, 2, 1 ])

// turn into ternary

function squareOrSquareRoot(array) {
    let output = []
    array.forEach(i => (Number.isInteger(Math.sqrt(i)) ? output.push(Math.sqrt(i)) : output.push(i*i)));
    return output
    console.log(output)
}

squareOrSquareRoot([ 4, 3, 9, 7, 2, 1 ])