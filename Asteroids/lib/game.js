var Asteroid = require("./asteroid.js");

function Game () {
  this.DIM_X = window.innerWidth;
  this.DIM_Y = window.innerHeight;
  this.NUM_ASTEROIDS = 10;
  this.addAsteroids();
}

Game.prototype.addAsteroids = function () {
  this.asteroids = [];
  while(this.asteroids.length < this.NUM_ASTEROIDS){
    this.asteroids.push(
      new Asteroid([Math.random()*this.DIM_X, Math.random()*this.DIM_Y], this)
    );
  }
};

Game.prototype.draw = function (ctx) {
  ctx.clearRect(0, 0, this.DIM_X, this.DIM_Y);

  for(var i = 0; i < this.asteroids.length; i++){
    this.asteroids[i].draw(ctx);
  }
};

Game.prototype.moveObjects = function(){

  for(var i = 0; i < this.asteroids.length; i++){
    this.asteroids[i].move();
  }
};

Game.prototype.wrap = function (pos) {
  if(pos[0] < 0){
    pos[0] = this.DIM_X;
  } else if(pos[0] > this.DIM_X){
    pos[0] = 0;
  }

  if(pos[1] < 0 ){
    pos[1] = this.DIM_Y;
  } else if(pos[1] > this.DIM_Y){
    pos[1] = 0;
  }

  return pos;
};



module.exports = Game;
