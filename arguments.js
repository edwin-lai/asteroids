var sum = function () {
  var total = 0;
  for (var i = 0; i < arguments.length; i++) {
    total += arguments[i];
  }
  return total;
};

Function.prototype.myBind = function () {
  var thisArg = arguments[0];
  var args = [].slice.apply(arguments);
  args = args.slice(1);
  // debugger;
  var fn = this;
  return function () {
    var otherArgs = args.concat([].slice.apply(arguments));
    return fn.apply(thisArg, otherArgs);
  };
};


var curriedSum = function (numArgs) {
  var numbers = [];
  var _curriedSum = function (num) {
    numbers.push(num);
    if (numbers.length === numArgs) {
      var total = 0;
      for (var i = 0; i < numArgs; i++) {
        total += numbers[i];
      }
      return total;
    } else {
      return _curriedSum;
    }
  };
  return _curriedSum;
};

Function.prototype.curry = function(numArgs){
  var fn = this;
  var numbers = [];
  var curried = function(num){
    numbers.push(num);
    if(numbers.length < numArgs){
      return curried;
    } else {
      return fn.apply(Window, numbers);
    }
  };
  return curried;
};

Function.prototype.inherits = function (SuperClass) {
  function Surrogate () {}
  Surrogate.prototype = SuperClass.prototype;
  this.prototype = new Surrogate();
  this.prototype.constructor = this;
};
