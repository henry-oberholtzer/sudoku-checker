export default SudokuPuzzle;

function SudokuPuzzle(
    a1, a2, a3, a4, a5, a6, a7, a8, a9, 
    b1, b2, b3, b4, b5, b6, b7, b8, b9) {
    this.rows = {
        row1: [a1, a2, a3, a4, a5, a6, a7, a8, a9],
        row2: [b1, b2, b3, b4, b5, b6, b7, b8, b9]
    };
    
    
}