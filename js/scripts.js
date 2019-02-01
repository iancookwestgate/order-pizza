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

Pizza.prototype.totalIt = function() {
  return this.toppings + this.size;
}


$(document).ready(function() {

  $("#totalingButton").click(function(event) {
    $("#displayTotal").show();
    var demToppings = [];
    $("input:checkbox[name=toppings]:checked").each(function() {
      demToppings += ($(this).val());
    });
    var datSize = ($("input[name='size']:checked").val());



    console.log(datSize);
    console.log(demToppings);
    var newPizza = new Pizza();
    topIt = demToppings;
    sizeIt = datSize;
    totalIt = (datSize + demToppings);
    $("#pizzaResults").text(totalIt);

    event.preventDefault();



  })
})
