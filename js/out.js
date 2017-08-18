/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {



function Game() { //Creating contrsuctor "Game"

    this.board = document.querySelectorAll("#board div"); //Object board of type "Game" containing all the divs in the element of id=board, to create 10x10 game board
    this.furry = new Furry, //Object "furry" for the animated furry
    this.coin = new Coin, //Object "coin" for the animated coin
    this.score = 0; //Object "score" holiding scores
    self = this; //variable self equals this, not to use "this" outside of the constructor Game()
    this.startGame = function(){ //function start game with the setinterval to automaticly move "furry" when the game starts
      this.idSetInterval = setInterval(function() {
      alert("hello"); //just to check if the setInterval works
      }, 250);

    }

}


function Furry(x, y, direction) { //Creating an object constructor function "Furry"

  this.x = 0; //Object x of type "Furry" to specify furry position on the horizontal axis "x"
  this.y = 0; //Object y of type "Furry" to specify furry position on the vertical axis "y"
  this.direction = "right"; //Object direction of type "Furry" to specify furry initial direction
};


function Coin(x, y) { //Creating an object constructor "Coin"

  this.x = Math.floor(Math.random() * 10), //Object x of type "Coin" + math function to randomly calculate coin position on the horicontal axis
  this.y = Math.floor(Math.random() * 10); //Object y of type "Coin" + math function to randomly calculate coin position on the vertical axis

};


Game.prototype.state = function(x, y) { //game prototype calculating coin&furry position on the 10x10 game board

    return x + (y * 10);

};

Game.prototype.showCoin = function(){ //calculating coin position to show coin in the specific position on the board

    var c =  this.board[this.state(this.coin.x, this.coin.y)].classList.add("coin");

};

Game.prototype.showFurry = function(){ //calculating furry position to show furry in the specific position on the board

    var f =  this.board[this.state(this.furry.x, this.furry.y)].classList.add("furry");

};

var k = new Game(); //new Game object to call out the function showFurry and showCoin
k.showFurry();
k.showCoin();



//I don't know what I'm doing

//Object furry should be moving outomatically so adding setInterval inside of the Game() constructor [line 10-13]

Game.startGame()// calling method startGame on object Game? console error: is not a function



var self;
Game.prototype.moveFurry = function() {

    if (self.furry.direction === "up") {
      self.furry.y -= 1;
        } else if (self.furry.direction === "right") {
          self.furry.x += 1;
        } else if (self.furry.direction === "down"){
          self.furry.y += 1;
        } else if (self.furry.direction === "left") {
          self.furry.x -=1;
    }


    self.showFurry();

}

var game = new Game()
game.showFurry();
game.showCoin();
game.startGame();


/***/ })
/******/ ]);