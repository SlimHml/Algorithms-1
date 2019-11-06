// instruction from visualgo.net

// repeat (numOfElements - 1) times
// set the first unsorted element as the minimum
// for each of the unsorted elements
//   if element < currentMinimum
//     set element as new minimum
// swap minimum with first unsorted position

//Code:
let selectionSort = (arr) => {
    let len = arr.length;
    for (let i = 0; i < len; i++) {
        let min = i;
        for (let j = i + 1; j < len; j++) {
            if (arr[min] > arr[j]) {
                min = j;
            }
        }
        if (min !== i) {
            let tmp = arr[i];
            arr[i] = arr[min];
            arr[min] = tmp;
        }
    }
    return arr;
}