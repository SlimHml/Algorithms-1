// instruction from visualgo.net

// for each (unsorted) partition
// set first element as pivot
//   storeIndex = pivotIndex + 1
//   for i = pivotIndex + 1 to rightmostIndex
//     if element[i] < element[pivot]
//       swap(i, storeIndex); storeIndex++
//   swap(pivot, storeIndex - 1)

//Code:
let swap = (arr, i, j) => {
    let tmp = arr[i];
    arr[i] = arr[j];
    arr[j] = tmp;
}; let partition = (arr, low, high) => {
    let q = low, i;
    for (i = low; i < high; i++) {
        if (arr[i] < arr[high]) {
            swap(arr, i, q);
            q++;
        }
    }
    swap(arr, i, q);
    return q;
}; let quickSort = (arr, low, high) => {
    if (low < high) {
        let pivot = partition(arr, low, high);
        quickSort(arr, low, pivot - 1);
        quickSort(arr, pivot + 1, high);
        return arr;
    }
};