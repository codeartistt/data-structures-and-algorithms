function selectionSort(arr) {
    let left = 0;
    let right = arr.length - 1;

    while (left < right) {
        let minIdx = left;
        let maxIdx = right;

        // Find the minimum and maximum elements in the unsorted portion
        for (let i = left; i <= right; i++) {
            if (arr[i] < arr[minIdx]) {
                minIdx = i;
            }
            if (arr[i] > arr[maxIdx]) {
                maxIdx = i;
            }
        }

        // Swap the minimum element with the leftmost element
        if (minIdx !== left) {
            [arr[minIdx], arr[left]] = [arr[left], arr[minIdx]];
        }

        // If the maximum element was at the left, its index is now minIdx
        if (maxIdx === left) {
            maxIdx = minIdx;
        }

        // Swap the maximum element with the rightmost element
        if (maxIdx !== right) {
            [arr[maxIdx], arr[right]] = [arr[right], arr[maxIdx]];
        }

        left++;
        right--;
    }
}

function printArray(arr) {
    let result = arr.join(' ');
    console.log(result);
}

let arr = [0, 23, 14, 12, 9];
console.log("Original array:");
printArray(arr);

selectionSort(arr);
console.log("\nSorted array in Ascending order:");
printArray(arr);
