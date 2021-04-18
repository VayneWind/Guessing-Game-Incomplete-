const PUZZLE_DIFFICULTY = 4;
const PUZZLE_HOVER_TINT = '#009900';

var _canvas;
var _stage;

var _img;
var _pieces;
var _puzzleWidth;
var _puzzleHeight;
var _pieceWidth;
var _pieceHeight;
var _currentPiece;
var _currentDropPiece;
 
var _mouse;

function init(){
    _img = new Image();
    _img.addEventListener('load',onImage,false);
    _img.src = "aqua.png";
}
function onImage(e){
    _pieceWidth = Math.floor(_img.width / PUZZLE_DIFFICULTY)
    _pieceHeight = Math.floor(_img.height / PUZZLE_DIFFICULTY)
    _puzzleWidth = _pieceWidth * PUZZLE_DIFFICULTY;
    _puzzleHeight = _pieceHeight * PUZZLE_DIFFICULTY;
    setCanvas();
    initPuzzle();
}
