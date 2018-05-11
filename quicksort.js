// quicksort sorting algorithm pushing into separate arrays (slower method **not changing in place)

function quickSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }

    let pivot = arr[arr.length - 1];
    let left = [];
    let right = [];

    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i]);
        }
        else {
            right.push(arr[i])
        }
    }

    return [...quickSort(left), pivot, ...quickSort(right)]


}

let a = [2, 4, 23, 345, 6, 7, 568, 12, 6, 9, 4, 35, 8, 8];
quickSort(a);