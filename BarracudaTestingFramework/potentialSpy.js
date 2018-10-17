function expect(fn) {

  function toHaveBeenCalled() {
    if (spies[fn.id] && spies[fn.id] >= 1) {
      console.log("Success")
    } else {
      console.log("Error")
    }
  }

  return {
    toHaveBeenCalled: toHaveBeenCalled
  }
}

var spies = {}
var spyIdentity = 0;

function createSpy() {
  var localSpyId = spyIdentity++;
  var spyFunc = function() {
    recordSpyCall(localSpyId);
  }
  spyFunc.id = localSpyId;
  return spyFunc;
}

function recordSpyCall(spyId) {
  if (!spies[spyId]) {
    spies[spyId] = 1
  } else {
    spies[spyId] = spies[spyId] + 1;
  }
}

function passingTest() {

  // arrange
  var databaseService = {
    count: createSpy()
  }
  var counter = new Counter(databaseService);

  // act
  counter.incrementCount();

  // assert
  expect(databaseService.count).toHaveBeenCalled();
}

function failingTest() {

  // arrange
  var databaseService = {
    count: createSpy()
  }
  var counter = new Counter(databaseService);

  // act
  //counter.incrementCount();

  // assert
  var expectation = expect(databaseService.count).toHaveBeenCalled();
}

function Counter(databaseService) {
  this.count = 0;
  this.databaseService = databaseService;
}

Counter.prototype.incrementCount = function() {
  this.count++;
  console.log(this.databaseService);
  this.databaseService.count(this.count);
}

passingTest();
failingTest();