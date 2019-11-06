// do
// swapped = false
// for i = 1 to indexOfLastUnsortedElement-1
//   if leftElement > rightElement
//     swap(leftElement, rightElement)
//     swapped = true
// while swapped

// Code:
let bubbleSort = (inputArr) => {
    let len = inputArr.length;
    let swapped;
    do {
        swapped = false;
        for (let i = 0; i < len; i++) {
            if (inputArr[i] > inputArr[i + 1]) {
                let tmp = inputArr[i];
                inputArr[i] = inputArr[i + 1];
                inputArr[i + 1] = tmp;
                swapped = true;
            }
        }
    } while (swapped);
    return inputArr;
};