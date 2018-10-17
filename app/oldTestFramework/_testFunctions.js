(function(exports) {
  function Assert() {
    this.passingTests = 0;
    this.failingTests = 0;
  }

  Assert.prototype.isArray = function(ary) {
    if (typeof ary !== typeof []) {
      // [][0] == undefined && Array.isArray([])
      this.failingTests += 1;
      throw new Error(
        `Did not return notes array. Expected: [] but received: ${ary}`
      );
    } else {
      this.passingTests += 1;
      console.log(
        `%c Passed the test!!!!!!!!!!!!!!!!!<3 Passed: ${
          this.passingTests
        } tests. %c Failed Tests: ${this.failingTests}`,
        "color:green",
        "color:red"
      );
    }
  };

  Assert.prototype.expect = function(storedValue) {
    this.storedValue = storedValue;
    return this.storedValue;
  };

  Assert.prototype.toEqual = function(solution) {
    if (solution === this.storedValue) {
      this.passingTests += 1;
      console.log(
        `%c Passed the test!!!!!!!!!!!!!!!!!<3 Passed: ${
          this.passingTests
        } tests. %c Failed Tests: ${this.failingTests}`,
        "color:green",
        "color:red"
      );
    } else {
      throw new Error(
        `Expected '${solution}' but received '${this.storedValue}'`
      );
    }
  };

  exports.Assert = Assert;
})(this);
