// given a chessboard location return all possibile moves a knight could make if it were at that position

function chessKnight(cell) {
    let x = cell[0].charCodeAt() - 97;
    let y = +cell[1]

    return [[x - 2, y - 1], [x - 1, y - 2], [x - 2, y + 1], [x - 1, y + 2], [x + 2, y - 1], [x + 1, y - 2], [x + 2, y + 1], [x + 1, y + 2]].filter((v, i) => {
        return v[0] >= 0 && v[1] >= 1 && v[0] < 8 && v[1] < 9
    }).length
}

chessKnight('a3')