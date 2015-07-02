describe('Pizza', function(){
  it("initially doesn't cost anything", function(){
    var testPizza = new Pizza()
    expect(testPizza.cost).to.equal(0);
  });
});
