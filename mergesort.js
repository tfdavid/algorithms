function merge_sort(arr) {
    if (arr.length === 1) {
        return arr;
    }
    else {
        let mid = ~~(arr.length / 2);
        let left = arr.slice(0, mid);
        let right = arr.slice(mid);
        return merge(merge_sort(left), merge_sort(right));
    }

}

function merge(left, right) {
    let result = [];
    let i = 0;
    let j = 0;
    while (i < left.length && j < right.length) {
        if (left[i] < right[j]) {
            result.push(left[i]);
            i++;
        }
        else {
            result.push(right[j]);
            j++;
        }
    }
    if (left.length === i) {
        let remainder = right.slice(j);
        return [...result, ...remainder];

    }
    else {
        let remainder = left.slice(i);
        return [...result, ...remainder]
    }

}

let a = [2, 7, 6, 1];
merge_sort(a);











// atrocious refactor + more inefficient array shifting

function mergeSort(arr, mid = ~~(arr.length / 2)) {
    return arr.length === 1 ? arr : sort(mergeSort(arr.slice(0, mid)), mergeSort(arr.slice(mid)));
}

function sort(left, right, result = []) {
    while (left.length && right.length) {
        left[0] < right[0] ? result.push(left.shift()) : result.push(right.shift());
    }
    return result.concat(left, right);
}


var b = [3, 24, 2, 7, 8, 34, 8, 8, 5, 9];

mergeSort(b)