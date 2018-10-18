// A Spy Add-on to the beautiful barracuda framework
(function(exports) {
  class Shark {
    constructor(className) {
      this.className = className;
    }
  }

  Shark.prototype.eat = function(method) {
    this.method = method;
  };
})(this);
