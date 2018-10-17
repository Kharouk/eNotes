function Promise(awaiter) {
  this.awaiter = awaiter;
}

Promise.prototype.then = function(success, fail) {
  this.awaiter(function(result) {
    if (result.success) {
      success(result);
    } else {
      fail();
    }
  });
};

var promise = new Promise(awaiter).then(success, fail);
