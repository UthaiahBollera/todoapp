const { expect } = require('chai');

describe("A suite is just a function", function () {
  let a;
  it("and so is a spec", function () {
    a = true;
    expect(a).to.be.true;
  });
});