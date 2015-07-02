describe('Pizza', function(){
  it("initially doesn't cost anything", function(){
    var testPizza = new Pizza()
    expect(testPizza.cost).to.equal(0);
  });

  it("starts with no toppings", function(){
    var testPizza = new Pizza()
    expect(testPizza.toppings).to.eql([]);
  });

  it("lets the user select a size", function(){
    var testPizza = new Pizza("large")
    expect(testPizza.size).to.equal("large");
  });

  it("Can have additional toppings added to it", function(){
    var testPizza = new Pizza("medium")
    testPizza.addTopping("spinach");
    expect(testPizza.toppings).to.eql(["spinach"]);
  });

  it("costs an additional dollar for each topping", function(){
    var testPizza = new Pizza("Large")
    testPizza.addTopping("spinach");
    expect(testPizza.findCost()).to.equal(16);
  });
});
