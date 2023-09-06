
// JavaScript code for the approach
 
// Function to find minimum and maximum values in an array
function findMinMax(arr) {
    let min = arr[0];
    let max = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if(arr[i] < min) {
            min = arr[i];
        } else if(arr[i] > max) {
            max = arr[i];
        }
    }

    return { min, max };
}

