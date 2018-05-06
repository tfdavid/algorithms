// inputArr = [3,4,6,3]
// inputDesiredSum = 6
// output = [[3,3], [6]]  is an array containing all combinations of possible numbers in inputArr that can sum to desiredSum

function subsetSums(arr, total, partial = []) {
    let sum = partial.reduce((t, v) => {
        return t + v
    }, 0);
    if (sum === total) {
        console.log('Possible Sum is: ', partial);
        return;
    }
    if (sum > total) {
        return;
    }

    for (let i = 0; i < arr.length; i++) {
        let num = arr[i];
        let newArr = arr.slice(i + 1);
        let newPartial = partial.concat(num);
        subsetSums([...newArr], total, [...partial, num]);
    }

}

let a = [3, 1, 2, 1, 3, 1, 4];
let b = 6;

subsetSums(a, b);
