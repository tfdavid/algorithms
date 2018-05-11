// given a 2d array filled with either 1 or 0, return the largest square area found

function fun(arr) {
    let n = Math.min(arr.length, arr[0].length);


    while (n) {
        for (let r = 0; r < arr.length; r++) {
            if (r + n > arr.length) {
                break;
            }
            for (let c = 0; c < arr[0].length; c++) {
                if (c + n > arr[0].length) {
                    break;
                }
                checkSquareloop:
                for (let sr = 0; sr < n; sr++) {
                    for (let sc = 0; sc < n; sc++) {
                        let val = arr[r + sr][c + sc];
                        if (!val) {
                            break checkSquareloop;
                        }
                        if (n - sr === 1 && n - sc === 1) {
                            return n * n
                        }
                    }
                }
            }
        }
        n--;
    }
    return n;
}



var a = [[0, 0, 1],
[1, 1, 1],
[1, 1, 1],
[1, 1, 1]];
fun(a);