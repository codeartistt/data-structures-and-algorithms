// // // // // // // // // // // // // // // // // // // // // // // // 
// // my first solution

function longestCommonPrefix(strings) {
    try {

        let commons = new Map();

        for (let string of strings) {
            let firstTwoLetters = string.slice(0, 2);

            if (commons.has(firstTwoLetters)) {
                commons.set(firstTwoLetters, Number(commons.get(firstTwoLetters)) + 1);
            } else {
                commons.set(firstTwoLetters, 1);
            }
        }

        // https://bobbyhadz.com/blog/javascript-get-min-max-values-in-map
        const max = [...commons.entries()].reduce((accumulator, element) => {
            return element[1] > accumulator[1] ? element : accumulator;
        });

        if (max[1] == 1) {
            return "";
        }

        return max[0];

    } catch (err) {
        console.error(err);
    }
}

// answer by chat gpt

/*

The provided answer is not correct because it 
doesn't accurately find the longest common prefix 
among an array of strings. It seems to be attempting
to find the most common starting two letters, which 
is not the correct approach for solving the problem. 
The logic and usage of the map and reduce functions are 
incorrect for this problem.

*/

// // // // // // // // // // // // // // // // // // // // // // // // 
// // solution by chatgpt


function longestCommonPrefix_Version2(strings) {
    if (strings.length === 0) {
        return "";
    }

    let prefix = strings[0];

    for (let i = 1; i < strings.length; i++) {
        while (strings[i].indexOf(prefix) !== 0) {
            prefix = prefix.slice(0, prefix.length - 1);
            if (prefix === "") {
                return "";
            }
        }
    }

    return prefix;
}



// // // // // // // // // // // // // // // // // // // // // // // // 

