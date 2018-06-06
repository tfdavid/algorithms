

function rotateImage(a) {
    // Transpose
    for (var i = 0; i < a.length; i++) {
        for (var j = 0; j < i; j++) {
            // Switch a[i][j] and a[j][i] 
            // With XOR swap
            a[i][j] ^= a[j][i]
            a[j][i] ^= a[i][j]
            a[i][j] ^= a[j][i]
        }
    }

    // Reverse columns
    for (var i in a) {
        a[i] = a[i].reverse()
    }

    return a
}

var a = [[1, 9, 6, 3, 7],
[6, 1, 2, 9, 7],
[7, 6, 3, 8, 2],
[8, 9, 7, 9, 9],
[6, 8, 6, 8, 2]]

//         [1,6,7,8,6]
//         [9,1,6,9,8]
//         [6,2,3,7,6]
//         [3,9,8,9,8]
//         [7,7,2,9,2]

//        [[6,8,7,6,1], 
//         [8,9,6,1,9], 
//         [6,7,3,2,6], 
//         [8,9,8,9,3], 
//         [2,9,2,7,7]]

rotateImage(a);