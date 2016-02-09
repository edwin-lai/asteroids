
// require("./lib/bullet.js");
// window.MovingObject = MovingObject;
// require("./lib/ship.js");
var MovingObject = require("./lib/movingObject.js");
var Asteroid = require("./lib/asteroid.js");
var Game = require("./lib/game.js");
var gameView = require("./lib/gameView.js");
var canvasEl = document.getElementsByTagName("canvas")[0];
canvasEl.height = window.innerHeight;
canvasEl.width = window.innerWidth;
var ctx = canvasEl.getContext("2d");
// var mo = new MovingObject([100,100], [0,0], 50, "#00FF00");
// var as = new Asteroid([500, 500]);
// mo.draw(ctx);
// as.draw(ctx);
var game = new Game();
// game.draw(ctx);

var gv = new gameView(game, ctx);
gv.start();
