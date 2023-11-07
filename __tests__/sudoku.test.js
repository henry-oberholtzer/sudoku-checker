import SudokuPuzzle from './../src/sudoku.js';

describe('SudokuPuzzle', () => {

    test('should return object with numbers in set array', () => {
        const row1 = new SudokuPuzzle(1,2,3,4,5,6,7,8,9);
        expect(row1.row1[0]).toEqual(1);
    });
});