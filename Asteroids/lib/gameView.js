var Game = require("./game.js");

function gameView(game, ctx){
  this.game = game;
  this.ctx = ctx;
}

gameView.prototype.moveDraw = function () {
  this.game.moveObjects();
  this.game.draw(this.ctx);
};

gameView.prototype.start = function() {
  var gv = this;
  setInterval(this.moveDraw.bind(gv), 20);
};


module.exports = gameView;
