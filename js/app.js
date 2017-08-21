
//Game//

function Game() { //Creating contrsuctor "Game"

    this.board = document.querySelectorAll("#board div"); //Object board of type "Game" containing all the divs in the element of id=board, to create 10x10 game board

    this.furry = new Furry(), //Object "furry" for the animated furry
    this.coin = new Coin(), //Object "coin" for the animated coin

    this.score = 0; //Object "score" holiding scores

    self = this; //variable self equals this, not to use "this" outside of the constructor Game()

    this.startGame = function(){ //function start game with the setinterval to automaticly move "furry" when the game starts
      this.showFurry();
      this.showCoin();
      this.idSetInterval = setInterval(function() {
          self.moveFurry();
      }, 250);

    }

}


Game.prototype.state = function(x, y) { //game prototype calculating coin&furry position on the 10x10 game board

    return x + (y * 10);

};

Game.prototype.showCoin = function(){ //calculating coin position to show coin in the specific position on the board

    var c = this.board[this.state(this.coin.x, this.coin.y)].classList.add("coin");

};

Game.prototype.showFurry = function(){ //calculating furry position to show furry in the specific position on the board

    var f = this.board[this.state(this.furry.x, this.furry.y)].classList.add("furry");

};

Game.prototype.moveFurry = function() {
    self.hideVisibleFurry();


    if (self.furry.direction === "up") {
          self.furry.y -= 1;
      } else if (self.furry.direction === "right") {
          self.furry.x += 1;
      } else if (self.furry.direction === "down") {
          self.furry.y += 1;
      } else if (self.furry.direction === "left") {
          self.furry.x -=1;
    }

    self.checkCollision();
    self.showFurry();
    self.gameOver();
}


Game.prototype.hideVisibleFurry = function() {
    document.querySelector(".furry").classList.remove("furry");
}

Game.prototype.turnFurry = function(event){
    var x = event.which //|| event.keyCode
    switch (x) {
        case 37:
        this.furry.direction = "left";
        break;

        case 38:
        this.furry.direction = "up";
        break;

        case 39:
        this.furry.direction = "right";
        break;

        case 40:
        this.furry.direction = "down";
        break;

    }
}

Game.prototype.checkCollision = function() {
    if(self.furry.x === self.coin.x && self.furry.y === self.coin.y){
        document.querySelector(".coin").classList.remove("coin");
        self.score += 1;

        var result = document.querySelector('strong');

        result.textContent = parseInt(result.textContent) + 1;

        self.coin = new Coin();
        self.showCoin();
    }
}


Game.prototype.gameOver = function() {
    if(self.furry.x <0 || self.furry.x >9 || self.furry.y <0 || self.furry.y >9){
        clearInterval(self.idSetInterval);

    var gameover = document.querySelector('#over');
    gameover.classList.remove('invisible');

    self.hideVisibleFurry();
    window.confirm("Your score is" + " " + this.score + " " + "Press ok to try again");
    location.reload();

    }
}





//furry

function Furry() { //Creating an object constructor function "Furry"

  this.x = 0; //Object x of type "Furry" to specify furry position on the horizontal axis "x"
  this.y = 0; //Object y of type "Furry" to specify furry position on the vertical axis "y"
  this.direction = "right"; //Object direction of type "Furry" to specify furry initial direction
};





///coin
function Coin() { //Creating an object constructor "Coin"

  this.x = Math.floor(Math.random() * 10), //Object x of type "Coin" + math function to randomly calculate coin position on the horicontal axis
  this.y = Math.floor(Math.random() * 10); //Object y of type "Coin" + math function to randomly calculate coin position on the vertical axis

};




//inicjalizacja gry

var k = new Game(); //new Game object to call out the function showFurry and showCoin


k.startGame() // calling method startGame on object k/Game?

document.addEventListener("keydown", function(event){
    k.turnFurry(event);
});
