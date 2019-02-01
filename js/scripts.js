function Pizza() {
  this.toppings = [];
  this.size = [];
  this.price = 0;
}

Pizza.prototype.topIt = function(topping) {
  if (topping === "Cheese") {
    this.toppings += 1;
  } else if (topping === "Pepperoni") {
    this.toppings += 2;
  } else if (topping === "Mushroom") {
    this.toppings += 3;
  } else {
    alert("Don't order a naked pizza!");
  }
}

Pizza.prototype.sizeIt = function(size) {
  if (size === "Personal") {
    this.size = 8;
  } else if (size === "Medium") {
    this.size = 12;
  } else if (size === "Large") {
    this.size = 16;
  } else {
    alert("Please choose a size!")
  }
}

Pizza.prototype.totalIt = function(total) {
  Pizza.topIt();
  Pizza.sizeIt();
  total = Pizza.toppings + Pizza.size;
  return total;
}


$(document).ready(function() {
  var newPizza = new Pizza();
  var total = 0;

  $("#totalingButton").click(function(event) {
    total = Pizza.totalIt;
    $("#displayTotal").show();
    $("#pizzaResults").append(total);
    event.preventDefault();



  })
})
