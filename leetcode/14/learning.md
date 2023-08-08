indexOf = https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf
javascriptStringAsArrays = https://nullprogram.com/blog/2012/11/15/

Problem
    The thing is I don't know how $indexOf works.
Solution
    Let's learn $indexOf





Official definition
    The indexOf() method returns the first index at which a given element can be found in the array, or -1 if it is not present.



Official Example
    const beasts = ['ant', 'bison', 'camel', 'duck', 'bison'];

    console.log(beasts.indexOf('bison'));
    // Expected output: 1

    // Start from index 2
    console.log(beasts.indexOf('bison', 2));
    // Expected output: 4

    console.log(beasts.indexOf('giraffe'));
    // Expected output: -1



Example
    There is a topic called "JavaScript Strings as Arrays" $javascriptStringAsArrays
    It says, JavaScript strings aren’t quite arrays. They look and act a little bit like arrays, but they’re missing a few of the useful methods.

    console.log('abcde'.indexOf('a'))           // 0
    console.log('abcde'.indexOf('abcde'))       // 0
    console.log('abcde'.indexOf('cde'))         // 2 
    console.log('abcde'.indexOf('acde'))        // -1
