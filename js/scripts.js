function Pizza() {
  this.toppings = 0;
  this.size = 0;
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
  return(topping.toppings);
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
  return(size.size);
}

Pizza.prototype.totalIt = function(total) {
  total = Pizza.toppings + Pizza.size;
  return total;
}


$(document).ready(function() {
  var newPizza = new Pizza();

  $("#totalingButton").click(function(event) {
    $("#displayTotal").show();
      var demToppings = Pizza.topIt(topping);
      var datSize = Pizza.sizeIt(size);
      var finalTotal = function(sum) {
        sum = demToppings + datSize;
        return(sum.totalIt);
      }

      // $("input#addToppings").topIt();
      // $("input#addSize").sizeIt();

      console.log(Pizza.totalIt);


      // $("#pizzaResults").append(total);
      event.preventDefault();



  })
})
