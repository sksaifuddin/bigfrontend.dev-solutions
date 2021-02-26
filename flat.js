// 3.question link - https://bigfrontend.dev/problem/implement-Array-prototype.flat
// working code repl link:- https://repl.it/@sksaifuddin95/flat#index.js - play with the code

const arr = [1, [2], [3, [4]]];

/**
 * recursive approach
 * check if each index element of array is another array
 */
function flat(myArr, depth = 1) {
  const temp = []; // temporary to store all the values
  for(let i = 0; i < myArr.length; i++) {
    // for every element check if its an Array
    // if its an error then it has to be flatten more
    // for every flatten reduce the value of depth
    if(Array.isArray(myArr[i]) && depth > 0) {
      // use spread operator to get previous values also of temp
      // if we dont do this we have to declare temp globally which is not so good practise
      temp.push(...flat(myArr[i], depth-1));
    } else {
      temp.push(myArr[i]);
    }
  }
  return temp;
}

console.log(flat(arr));

/**
 * flattening of array using reduce
 */
function flatUsingReduce(arr, depth=1) {
 return arr.reduce((acc, currVal) => {
    if(Array.isArray(currVal) && depth > 0) {
      acc.push(...flat(currVal, depth-1))
    } else {
      acc.push(currVal);
    }
    return acc;
  }, [])
}

console.log(flatUsingReduce(arr, Infinity));