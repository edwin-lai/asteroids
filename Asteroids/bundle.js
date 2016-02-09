/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	
	// require("./lib/bullet.js");
	// window.MovingObject = MovingObject;
	// require("./lib/ship.js");
	var MovingObject = __webpack_require__(1);
	var Asteroid = __webpack_require__(3);
	var Game = __webpack_require__(4);
	var gameView = __webpack_require__(5);
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


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	var Utils = __webpack_require__(2);


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


/***/ },
/* 2 */
/***/ function(module, exports) {

	var Utils = {
	  inherits: function (subclass, superClass) {
	    function Surrogate () {}
	    Surrogate.prototype = superClass.prototype;
	    subclass.prototype = new Surrogate();
	    subclass.prototype.constructor = subclass;
	  },

	  distance: function(pos1, pos2){
	    Math.sqrt(Math.pow(pos1[0] - pos2[0], 2) + Math.pow(pos1[1] - pos2[1], 2 ));
	  }
	};



	module.exports = Utils;


/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	var Utils = __webpack_require__(2);
	var MovingObject = __webpack_require__(1);



	var Asteroid = function(pos, game) {
	  var radius = 50;
	  var color =  "#404040";
	  var vel = [(Math.random() - 0.5) * 10, (Math.random() - 0.5) * 10];
	  MovingObject.call(this, pos, vel, radius, color, game);
	};

	Utils.inherits(Asteroid, MovingObject);

	module.exports = Asteroid;


/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	var Asteroid = __webpack_require__(3);

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


/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	var Game = __webpack_require__(4);

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


/***/ }
/******/ ]);