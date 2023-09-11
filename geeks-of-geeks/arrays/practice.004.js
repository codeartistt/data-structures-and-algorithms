
// Find subarray with given sum | Set 1 (Non-negative Numbers)

function subArraySum(arr, n, sum) {

    for (let i = 0; i < n; i++) {
        let inner_sum = arr[i];

        for(let j = i + 1; j < n; j++) {

            inner_sum = inner_sum + arr[j];

            if(inner_sum === sum) {
                console.log(`Sum between ${i} and ${j} matches`)
                return;
            }
        }

    }
    console.log('No subarray found');
    
}


let arr = [15, 2, 4, 8, 9, 5, 10, 23];
let n = arr.length;
let sum = 0;
subArraySum(arr, n, sum);