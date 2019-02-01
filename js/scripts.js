function Pizza() {
  this.toppings = 0;
  this.size = 0;
}

Pizza.prototype.topIt = function(demToppings) {
    var splitToppings = demToppings.split(",");
    if (splitToppings.includes("Cheese")) {
      this.toppings += 1;
    }
    if (splitToppings.includes("Pepperoni")) {
      this.toppings += 2;
    }
    if (splitToppings.includes("Mushroom")) {
      this.toppings += 3;
    }
  }

Pizza.prototype.sizeIt = function(datSize) {
  if (datSize === "Personal") {
    this.size = 8;
  } else if (datSize === "Medium") {
    this.size = 12;
  } else if (datSize === "Large") {
    this.size = 16;
  } else {
    alert("Please choose a size!")
  }
}

Pizza.prototype.totalIt = function() {
  return this.toppings + this.size;
}


$(document).ready(function() {
  var newPizza = new Pizza();
  var demToppings = [];
  $("#totalingButton").click(function(event) {
    $(".jumbotron").slideUp(1000);
    $("#displayTotal").show();
    var datSize = ($("input[name='size']:checked").val());
    $("input:checkbox[name=toppings]:checked").each(function() {
      demToppings += ($(this).val()) + ",";
    });
    newPizza.topIt(demToppings);
    newPizza.sizeIt(datSize);
    $("#pizzaResults").text(newPizza.toppings + newPizza.size);
    event.preventDefault();
  });
})
