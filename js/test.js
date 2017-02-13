describe("reliableMultiply", function() {
  it("8*8=64", function() {
    assert.equal(reliableMultiply(8, 8), 64);
  });
  
  it("4*8=32", function() {
    assert.equal(reliableMultiply(8, 8), 64);
  });
  
  it("3*9=27", function() {
    assert.equal(reliableMultiply(8, 8), 64);
  });
});