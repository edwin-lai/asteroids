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
