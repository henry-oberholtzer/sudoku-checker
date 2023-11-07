import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/styles.css";
import SudokuPuzzle from "./sudoku";

// eslint-disable-next-line no-unused-vars
const newPuzzle = new SudokuPuzzle(document.querySelectorAll(".numInput").value);

