export default SudokuPuzzle;

function SudokuPuzzle(
    a1, a2, a3, a4, a5, a6, a7, a8, a9,
    b1, b2, b3, b4, b5, b6, b7, b8, b9,
    c1, c2, c3, c4, c5, c6, c7, c8, c9,
    d1, d2, d3, d4, d5, d6, d7, d8, d9,
    e1, e2, e3, e4, e5, e6, e7, e8, e9,
    f1, f2, f3, f4, f5, f6, f7, f8, f9,
    g1, g2, g3, g4, g5, g6, g7, g8, g9,
    h1, h2, h3, h4, h5, h6, h7, h8, h9,
    i1, i2, i3, i4, i5, i6, i7, i8, i9,
) {
    this.rows = {
        row1: [a1, a2, a3, a4, a5, a6, a7, a8, a9],
        row2: [b1, b2, b3, b4, b5, b6, b7, b8, b9],
        row3: [c1, c2, c3, c4, c5, c6, c7, c8, c9],
        row4: [d1, d2, d3, d4, d5, d6, d7, d8, d9],
        row5: [e1, e2, e3, e4, e5, e6, e7, e8, e9],
        row6: [f1, f2, f3, f4, f5, f6, f7, f8, f9],
        row7: [g1, g2, g3, g4, g5, g6, g7, g8, g9],
        row8: [h1, h2, h3, h4, h5, h6, h7, h8, h9],
        row9: [i1, i2, i3, i4, i5, i6, i7, i8, i9]
    },
    this.columns = {
        col1: [a1, b1, c1, d1, e1, f1, g1, h1, i1],
        col2: [a2, b2, c2, d2, e2, f2, g2, h2, i2],
        col3: [a3, b3, c3, d3, e3, f3, g3, h3, i3],
        col4: [a4, b4, c4, d4, e4, f4, g4, h4, i4],
        col5: [a5, b5, c5, d5, e5, f5, g5, h5, i5],
        col6: [a6, b6, c6, d6, e6, f6, g6, h6, i6],
        col7: [a7, b7, c7, d7, e7, f7, g7, h7, i7],
        col8: [a8, b8, c8, d8, e8, f8, g8, h8, i8],
        col9: [a9, b9, c9, d9, e9, f9, g9, h9, i9]
    };
    this.grids = {
        grid1: [a1, a2, a3, b1, b2, b3, c1, c2, c3],
        grid2: [a4, a5, a6, b4, b5, b6, c4, c5, c6],
        grid3: [a7, a8, a9, b7, b8, b9, c7, c8, c9],
        grid4: [d1, d2, d3, e1, e2, e3, f1, f2, f3],
        grid5: [d4, d5, d6, e4, e5, e6, f4, f5, f6],
        grid6: [d7, d8, d9, e7, e8, e9, f7, f8, f9],
        grid7: [g1, g2, g3, h1, h2, h3, i1, i2, i3],
        grid8: [g4, g5, g6, h4, h5, h6, i4, i5, i6],
        grid9: [g7, g8, g9, h7, h8, h9, i7, i8, i9],
    }
}

SudokuPuzzle.prototype.checkRow = function () {
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const rowKeys = Object.keys(this.rows);
    for (const key of rowKeys) {
        if (this.rows[key]
            .sort((a, b) => a - b)
            .every((num, i) => num === numbers[i])) { 
            /* empty */
        } else {
            return false;
        }
    }
    return true;
};

SudokuPuzzle.prototype.checkColumn = function () {
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const colKeys = Object.keys(this.columns);
    for (const key of colKeys) {
        if (this.columns[key]
            .sort((a, b) => a - b)
            .every((num, i) => num === numbers[i])) { 
            /* empty */
        } else {
            return false;
        }
    }
    return true;
};