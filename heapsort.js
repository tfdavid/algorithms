function heapSort(arr) {
    makeFirstHeap(arr);
    let size = arr.length;
    let temp;
    while (size > 1) {
        temp = arr[size - 1];
        arr[size - 1] = arr[0];
        arr[0] = temp;
        makeHeap(arr, 0, --size);
    }
    return arr;
}


function makeFirstHeap(arr) {
    let start = ~~(arr.length / 2)
    for (let i = start; i >= 0; i--) {
        makeHeap(arr, i, arr.length);
    }
}

function makeHeap(arr, index, length) {
    let left = (index * 2) + 1;
    let right = (index * 2) + 2;

    let largestNum = index;

    if (length > left && arr[left] > arr[largestNum]) {
        largestNum = left;
    }
    if (length > right && arr[right] > arr[largestNum]) {
        largestNum = right;
    }

    if (largestNum !== index) {
        let temp = arr[index];
        arr[index] = arr[largestNum];
        arr[largestNum] = temp;
        makeHeap(arr, largestNum, length)
    }
}



let a = [3, 56, 2, 8, 76, 456, 4, 2];
heapSort(a);