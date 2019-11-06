// instruction from visualgo.net

// create 10 buckets (queues) for each digit (0 to 9)
// for each digit placing
//   for each element in list
//     move element into respective bucket
//   for each bucket, starting from smallest digit
//     while bucket is non-empty
//       restore element to list

//Code:
function radixSort(arr) {
    // Find the max number and multiply it by 10 to get a number
    // with no. of digits of max + 1
    const maxNum = Math.max(...arr) * 10;
    let divisor = 10;
    while (divisor < maxNum) {
        // Create bucket arrays for each of 0-9
        let buckets = [...Array(10)].map(() => []);
        // For each number, get the current significant digit and put it in the respective bucket
        for (let num of arr) {
            buckets[Math.floor((num % divisor) / (divisor / 10))].push(num);
        }
        // Reconstruct the array by concatinating all sub arrays
        arr = [].concat.apply([], buckets);
        // Move to the next significant digit
        divisor *= 10;
    }
    return arr;
}