// Main Test App: Using Barracuda's expect and toBe
(function(exports) {
  Barracuda = {
    expect: function(a) {
      this.a = a;
      this.falsey = false;
      return this;
    },

    not: function() {
      this.falsey = true;
      return this;
    },

    toBe: function(b) {
      if (this.a === b || (this.a !== b && this.falsey === true)) {
        this.falsey = false;
        return console.log(
          "%c passed the test",
          "color: green; font-size: 20px;"
        );
      }
      console.log("%c Failure!", "color: red");
    },

    isArray: function() {
      if (
        typeof this.a === "object" ||
        (this.a !== "object" && this.falsey === true)
      ) {
        this.falsey = false;
        return console.log(
          "%c passed the test",
          "color: green; font-size: 20px;"
        );
      }
      console.log("%c Failure!", "color: red");
    },

    describe: function(message, callback) {
      console.log(`That test was for: ${message}`);
    }
  };
  exports.Barracuda = Barracuda;
})(this);

// Creating the 'Describe' block:
