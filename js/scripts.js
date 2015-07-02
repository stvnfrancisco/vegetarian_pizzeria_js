function Pizza(size, toppings, cost){
  this.size = size
  this.toppings = []
  this.cost = 0
}

Pizza.prototype.addTopping = function(topping){
  (this.toppings).push(topping);
}

Pizza.prototype.findCost = function(){
  if (this.size == "Small"){
    this.cost += 10;
  } else if (this.size == "Medium"){
    this.cost += 12;
  } else if (this.size == "Large"){
    this.cost += 15;
  }
  this.cost += (this.toppings.length);
  return this.cost;
}

function Topping(name, cost){
  this.name = name
  this.cost = 1
}

function Order(name, pizzas, total){
  this.pizzas = [];
  this.total = 0;
  this.name = name;
}

Order.prototype.add = function(pizza){
  (this.pizzas).push(pizza);
}

Order.prototype.checkout = function(){
  var totalCost = this.total;
  (this.pizzas).forEach(function(pizza){
    totalCost = totalCost + (pizza.cost);
  });
  return totalCost;
}

$(document).ready(function(){

  $("form#begin-order").submit(function(event){
    event.preventDefault();
    var orderName = $("input#customer").val();
    var newOrder = new Order(orderName);
    $(".begin-order").hide();
    $(".order-form").show();
    $("span#customer").text(orderName);

  $("form#new-pizza").submit(function(event){
    event.preventDefault();
    var size = $("input[name=size]:checked").val();
    var newPizza = new Pizza(size);
    $("input:checkbox[name=toppings]:checked").each(function(){
      var topping = $(this).val();
      newPizza.addTopping(topping);
    });

    newOrder.add(newPizza);

    $(".order-form").hide();
    $(".summary").show();
    $("span#username").text(orderName + "'s Order:");
    $("ul#orderlist").append("<li>" + newPizza.size + " pizza with: Cheese, " + newPizza.toppings.join(', ') + "  -  $" + newPizza.findCost() + "</li>");
  });

  $("#checkout").click(function(){
    $(".checkout-screen").show();
    $(".prompt").hide();
    $(".order").show();
    $("span#cost").text(newOrder.checkout());
  });

  $("#submit").click(function(){
    $(".final").show();
    $(".checkout-screen").hide();
    $(".order").hide();
    $(".finalprompt").hide();
    $(".checkout-screen").hide();
  });
  });
});
