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


// function User(monies) {
//   this.monies = monies
// }
//
// function PizzaOrder(toppings, size) {
//   this.toppings = toppings;
//   this.size = size;
// }
//
// PizzaOrder.prototype.calculate = function(moneyArr) {
//   function getTotal(total, num) {
//     return total + num;
//   }
//   var total = moneyArr.reduce(getTotal);
//   this.monies = total + this.monies;
// }

$(document).ready(function() {


  $("#totalingButton").click(function(event) {
    var superTotal = Pizza.totalIt;
    $("#displayTotal").show();
    $("#pizzaResults").append(superTotal);
    event.preventDefault();



  })
})
