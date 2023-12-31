function binarySearch(arr, toSearch) {
    try {
        let left = 0;
        let right = arr.length - 1;
        let mid;

        // evaluate this condition like if statement
        while (right >= left) {

            // The Math.floor() static method always rounds down and returns the largest integer less than or equal to a given number.
            mid = left + Math.floor((right - left) / 2);

            if (arr[mid] == toSearch) {
                return mid;
            }

            if (arr[mid] > toSearch) {
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        }

        return -1;

    } catch(err) {
        console.error(err);
    }
}

let arr = [10, 20, 30, 40, 50];
let toSearch = 0;

let result = binarySearch(arr, toSearch);
if(result === -1) {
    console.log("Element is not present in array")
} else {
    console.log ("Element is present at index " + result);
} 
 