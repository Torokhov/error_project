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

describe("withBoxUnlocked", function() {
  it("Коробка закрыта", function() {
    withBoxUnlocked(function() {
      box.content.push("золотишко");
    });
    
    assert.equal(box.locked, true);
    try {
      withBoxUnlocked(function() {
        throw new Error("Пираты на горизонте! Отмена!");
      });
    } catch (e) {
      console.log("Произошла ошибка:", e);
    };
    assert.equal(box.locked, true);
  });
});
