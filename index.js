//1. Sort Array in accending order
const sortArray = (arr) => {
  if (arr.length < 1) return arr;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[i] < arr[j]) {
        [arr[i], arr[j]] = [arr[j], arr[i]];
      }
    }
  }
  return arr;
};
console.log(sortArray(['a', 'c', 'b', 'a'])); //["a", "a", "b", "c"]

const sortArrayInbuilt = (arr) => {
  return arr.sort((a, b) => b - a);
};
console.log(sortArrayInbuilt([1, 2, 3, 4, 1, 2]));

//***********************************************************************/
//2. find max number in the array
const findMax = (arr) => {
  return Math.max(...arr);
  // return Math.max.apply(null, arr);
};
console.log('findMax---->', findMax([1, 2, 3, 4, 1, 2]));

//  using for loop----------------------------------------
let arrDup = [1, 2, 3, -4, 1, 2];
const findMaxFor = (arr) => {
  let max = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (max > arr[i]) {
      max = arr[i];
    }
  }
  return max;
};
console.log('findMax for loop- --->', findMaxFor(arrDup));

//***********************************************************************/
//3. find Dublicate number in array
const findDuplicate = (arr) => {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (!newArr.includes(arr[i])) newArr.push(arr[i]);
  }
  return newArr;
};
console.log('removeDuplicat using forloop--->', findDuplicate(arrDup));

// useing new Set
const findDuplicateSet = (arr) => {
  return Array.from(new Set(arr));
  // return [...new Set(arr)];
};
console.log('removeDuplicat using newSet--->', findDuplicateSet(arrDup));

// using the reduce
function removeDuplicates(arr) {
  let unique = arr.reduce(function (acc, curr) {
    if (!acc.includes(curr)) acc.push(curr);
    return acc;
  }, []);
  return unique;
}
console.log('removeDuplicat using reduce--->', removeDuplicates(arrDup));

//***********************************************************************/
