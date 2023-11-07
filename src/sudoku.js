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
        // col3: [a3, b2, c2, d2, e2, f2, g2, h2, i2],
        // col4:
        // col5:
        // col6:
        // col7:
        // col8:
        // col9: 
    };
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
    // empty
};