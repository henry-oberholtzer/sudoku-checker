import SudokuPuzzle from './../src/sudoku.js';

describe('SudokuPuzzle', () => {
    let reusableSudoku;
    let badSudoku;
    beforeEach(() => {
        reusableSudoku = new SudokuPuzzle(
            1,5,2,4,8,9,3,7,6, 
            7,3,9,2,5,6,8,4,1,
            4,6,8,3,7,1,2,9,5,
            3,8,7,1,2,4,6,5,9,
            5,9,1,7,6,3,4,2,8,
            2,4,6,8,9,5,7,1,3,
            9,1,4,6,3,7,5,8,2,
            6,2,5,9,4,8,1,3,7,
            8,7,3,5,1,2,9,6,4);
        badSudoku = new SudokuPuzzle(
                1,5,2,4,8,9,3,7,6, 
                7,1,9,2,5,6,8,4,1,
                4,6,1,3,7,1,2,9,5,
                3,8,7,1,2,4,6,5,9,
                5,9,1,7,6,3,4,2,8,
                2,4,6,7,9,5,7,1,3,
                9,1,4,6,3,7,5,8,2,
                6,2,5,4,4,8,1,3,7,
                8,7,3,5,1,2,2,6,4);
    });

    test('should return object with numbers in set array', () => {
        expect(reusableSudoku.rows.row1[0]).toEqual(1);
    });

    test('should return object with 9 numbers in set array', () => {
        expect(reusableSudoku.rows.row1).toEqual([1,5,2,4,8,9,3,7,6]);
    });

    test('should return an object with 18 numbers in two arrays', () => {
        expect(reusableSudoku.rows.row1).toEqual([1,5,2,4,8,9,3,7,6]);
        expect(reusableSudoku.rows.row2).toEqual([7,3,9,2,5,6,8,4,1]);
    });

    test('should return an object with 9 rows and 9 arrays with nine numbers in each', () => {
        expect(reusableSudoku.rows.row1).toEqual([1,5,2,4,8,9,3,7,6]);
        expect(reusableSudoku.rows.row2).toEqual([7,3,9,2,5,6,8,4,1]);
        expect(reusableSudoku.rows.row3).toEqual([4,6,8,3,7,1,2,9,5]);
        expect(reusableSudoku.rows.row4).toEqual([3,8,7,1,2,4,6,5,9]);
        expect(reusableSudoku.rows.row5).toEqual([5,9,1,7,6,3,4,2,8]);
        expect(reusableSudoku.rows.row6).toEqual([2,4,6,8,9,5,7,1,3]);
        expect(reusableSudoku.rows.row7).toEqual([9,1,4,6,3,7,5,8,2]);
        expect(reusableSudoku.rows.row8).toEqual([6,2,5,9,4,8,1,3,7]);
        expect(reusableSudoku.rows.row9).toEqual([8,7,3,5,1,2,9,6,4]);
    });

    test('should check if the first row array contains the numbers 1-9', () => {
        expect(reusableSudoku.checkRow()).toEqual(true);
    });

    test('should return false when a number is duplicated in a row', () => {
        expect(badSudoku.checkRow()).toEqual(false);
    });

    test('checks if all rows pass containing 1-9', () => {
        expect(reusableSudoku.checkRow()).toEqual(true);
    });

    test('should check all rows for duplicate numbers per row', () => {
        expect(badSudoku.checkRow()).toEqual(false);
    });

    test('should if first column array contains 1-9', () => {
        expect(reusableSudoku.columns.col1).toEqual([1,7,4,3,5,2,9,6,8]);
    });

    test('should check if the first column array contains the numbers 1-9', () => {
        expect(reusableSudoku.checkColumn()).toEqual(true);
    });

    test('should return false when a number is duplicated in a column', () => {
        expect(badSudoku.checkColumn()).toEqual(false);
    });

    test('should return true when passed a solved sudoku', () => {
        expect(reusableSudoku.checkPuzzle()).toEqual(true);
        expect(badSudoku.checkPuzzle()).toEqual(false);
    });

    test('will return a string of the numbers that are missing', () => {
        expect(badSudoku.checkMissing()).toEqual("row2: 3,row3: 8,row6: 8,row8: 9,row9: 9")
    })
});