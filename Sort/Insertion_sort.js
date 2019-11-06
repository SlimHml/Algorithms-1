//  instruction from visualgo.net

// mark first element as sorted
// for each unsorted element X
//   'extract' the element X
//   for j = lastSortedIndex down to 0
//     if current element j > X
//       move sorted element to the right by 1
//     break loop and insert X here

// Code:
let insertionSort = (inputArr) => {
    let length = inputArr.length;
    for (let i = 1; i < length; i++) {
        let key = inputArr[i];
        let j = i - 1;
        while (j >= 0 && inputArr[j] > key) {
            inputArr[j + 1] = inputArr[j];
            j = j - 1;
        }
        inputArr[j + 1] = key;
    }
    return inputArr;
};