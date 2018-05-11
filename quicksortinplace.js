// this function will sort the array within the given range relative to the pivot(pivot will be 'end') and return the index of the item swapped with our pivot

// i choose to use a temporary variable to swap as I believe it is the quickest method(array destructuring and XOR swap are alternative more concise methods to view)
function partition(arr, start, end) {
    let index = start;
    let current = start;
    let pivot = arr[end];

    while (current < end) {
        if (arr[current] < pivot) {
            let temp = arr[index];
            arr[index] = arr[current];
            arr[current] = temp;
            index++;
        }
        current++;
    }
    let temp = arr[index];
    arr[index] = pivot;
    arr[end] = temp;

    return index;

}


// this function determines whether or not we need to continue to update our index and continue sorting the array. we return arr so that on the initial call when the recursive sorting is complete we can have our sorted array given back to us. 
function quickSortInPlace(arr, start = 0, end = arr.length - 1) {
    if (start < end) {
        let index = partition(arr, start, end);
        quickSortInPlace(arr, start, index - 1);
        quickSortInPlace(arr, index + 1, end);
    }
    return arr

}




let a = [12, 4, 11, 32, 18, 5, 23, 8, 500, 32, 1];

quickSortInPlace(a);