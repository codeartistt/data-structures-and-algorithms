// JavaScript code for the approach
// Write a program to reverse an array or string



function reverseAnArray(arr) {
    let i;
    let n = arr.length;
    let temp;
    // console.log('arr.length / 2', arr.length / 2); // 2.5
    for (i = 0; i < arr.length / 2; i++) {
        console.log('temp'); // consoles 3 times
        temp = arr[i];
        arr[i] = arr[n - 1];
        arr[n - 1] = temp;
        n = n - 1;
    }
    return arr;
}

// console.log(reverseAnArray([1, 2, 3, 4, 5]));
/*
temp
temp
temp
[ 5, 4, 3, 2, 1 ]
*/

/* 
# question: 
    arr.length / 2 is 2.5 so why loop runs 3 times?

# answers:
    arr.length / 2 is 2.5, but in JavaScript, when you use a for loop
     with i as an integer variable, it will automatically truncate the 
     decimal part when evaluating the loop condition.

    So, even though arr.length / 2 is 2.5, the loop condition 
    i < arr.length / 2 will be evaluated as i < 2 because the decimal
     part is truncated. Therefore, the loop will run three times
      with i taking on the values 0, 1, and 2.

    Here's the breakdown again:

    i = 0
    i = 1
    i = 2
    So, the loop runs three times because arr.length / 2 is
     effectively rounded down to 2 in this context.
*/