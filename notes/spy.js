function expect(fn) {
  function toHaveBeenCalled() {
    if (fn.calls < 1) throw "function was not called";
  }

  return toHaveBeenCalled;
}

function Spy() {
  let spyCount = 0;
  return function() {
    if (spyCount) {
      spyCount++;
    } else {
      spyCount = 1;
    }
  };
}

function test() {
  //arrange
  let databaseService = {
    count: Spy()
  };
  var counter = new counter(databaseService);

  // act
  counter.incrementCount();

  //assert
  expect(databaseService).toHaveBeenCalled();
}

function Counter(databaseService) {
  this.count = 0;
  this.databaseService = databaseService;
}

Counter.prototype.incrementCount = function() {
  this.count++;
  this.databaseService.count(this.count);
};
