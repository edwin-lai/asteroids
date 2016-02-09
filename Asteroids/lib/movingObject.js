var Utils = require("./utils.js");


var MovingObject = function (pos, vel, radius, color, game){
  this.pos = pos;
  this.vel = vel;
  this.radius = radius;
  this.color = color;
  this.game = game;
};


MovingObject.prototype.draw = function(ctx) {
  ctx.fillStyle = this.color;
  ctx.beginPath();
  ctx.arc(
    this.pos[0],
    this.pos[1],
    this.radius,
    0,
    2 * Math.PI,
    false
  );

  ctx.fill();
};

MovingObject.prototype.move = function () {
  this.pos[0] += this.vel[0];
  this.pos[1] += this.vel[1];
  this.game.wrap(this.pos);
};

MovingObject.prototype.isCollidedWith = function (otherObject){
  return Utils.distance(this.pos, otherObject.pos) < (this.radius + otherObject.radius);
};





module.exports = MovingObject;
