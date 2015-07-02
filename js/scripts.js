function Pizza(size, toppings, cost){
  this.size = size
  this.toppings = []
  this.cost = 0
}

Pizza.addTopping = function(topping){
  (this.toppings).push(topping);
}

Pizza.findCost = function(){
  if (this.size == "Small"){
    this.cost += 8;
  } else if (this.size == "Medium"){
    this.cost += 10;
  } else if (this.size == "Large"){
    this.cost += 12;
  }
  this.cost += (this.toppings.length);
  return this.cost;
}
