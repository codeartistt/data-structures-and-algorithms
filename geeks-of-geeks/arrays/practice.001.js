// A JavaScript program to find a peak element

// Find the peak element in the array
function findPeak(arr, n) {

    if (n == 1) return arr[0];
    if (arr[0] >= arr[1]) return 0;

    let i;
    for(i = 1; i < n; i++) {
          // arr[i-1]       previous value
          // arr[i]         current value
          // arr[i+1]       agli value
          if((arr[i] > arr[i-1]) && (arr[i] > arr[i+1])) {
                return arr[i];
          }
    }
    return -1;
}

console.log(findPeak([10, 10, 15, 2, 23, 90, 67], 8));