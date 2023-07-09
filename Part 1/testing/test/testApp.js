const assert = require("chai").assert;
const app = require("../app");

describe("Pow", function () {
  describe("Raises x to power n", function () {
    it("returns 1 to power 3", function () {
      assert.equal(app(1, 3), 1);
    });
    it("returns 2 to power 4", function () {
      assert.equal(app(2, 4), 16);
    });
    it("returns 3 to power 3", function () {
      assert.equal(app(3, 3), 27);
    });
  });
  describe("for negative and non-integer powers", function () {
    it("should return NaN for negative n", () => {
      assert.isNaN(app(2, -1));
    });
    it("should return NaN for non-integer n", () => {
      assert.isNaN(app(2, 1.5));
    });
  });
});
