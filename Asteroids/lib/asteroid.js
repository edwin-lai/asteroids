var Utils = require("./utils.js");
var MovingObject = require("./movingObject.js");



var Asteroid = function(pos, game) {
  var radius = 50;
  var color =  "#404040";
  var vel = [(Math.random() - 0.5) * 10, (Math.random() - 0.5) * 10];
  MovingObject.call(this, pos, vel, radius, color, game);
};

Utils.inherits(Asteroid, MovingObject);

module.exports = Asteroid;
