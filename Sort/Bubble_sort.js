
// instruction from visualgo.net

// do
// swapped = false
// for i = 1 to indexOfLastUnsortedElement-1
//   if leftElement > rightElement
//     swap(leftElement, rightElement)
//     swapped = true
// while swapped

const inputArr = [3, 45, 67, 98, 78, 25, 17];

// Code(1):
// let bubbleSort = (inputArr) => {
//     let len = inputArr.length;
//     let swapped;
//     do {
//         swapped = false;
//         for (let i = 0; i < len; i++) {
//             if (inputArr[i] > inputArr[i + 1]) {
//                 let tmp = inputArr[i];
//                 inputArr[i] = inputArr[i + 1];
//                 inputArr[i + 1] = tmp;
//                 swapped = true;
//             }
//         }
//     } while (swapped);
//     return inputArr;
// };


//Code(2):
let bubbleSort = inputArr => {
    for (let i = 0; i < inputArr.length - 1; i++) {
        let change = false;
        for (let j = 0; j < inputArr.length - (i + 1); j++) {
            if (inputArr[j] > inputArr[j + 1]) {
                change = true;
                [inputArr[j], inputArr[j + 1]] = [inputArr[j + 1], inputArr[j]];
            }
        }
        if (!change) break;
    }
    return inputArr
};

bubbleSort(inputArr);
console.log(inputArr);