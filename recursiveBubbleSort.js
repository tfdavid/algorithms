// this works by passing the reference to array around and using a toggle
// to indiciate when the array is fully sorted
function inOrder(arr, toggle) {
    if (toggle === false) {
        return arr;
    }
    return inOrder(arr, iterate(arr, 0, false));

}


function iterate(arr, i, toggle) {
    if (arr.length - 1 === i) {
        return toggle;
    }
    if (arr[i] > arr[i + 1]) {
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
        toggle = true;
    }
    return iterate(arr, ++i, toggle)
}


var a = [4, 34, 2, 5, 1];
inOrder(a, true);
