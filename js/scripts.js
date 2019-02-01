function Pizza() {
  this.toppings = 0;
  this.size = 0;
}

Pizza.prototype.topIt = function(splitToppings) {
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

  $("#totalingButton").click(function(event) {
    $("#displayTotal").show();
    var newPizza = new Pizza();
    var demToppings = [];
    $("input:checkbox[name=toppings]:checked").each(function() {
      demToppings += ($(this).val()) + ",";
    });
    var datSize = ($("input[name='size']:checked").val());
    var splitToppings = demToppings.split(",");
    newPizza.topIt(splitToppings);
    newPizza.sizeIt(datSize);


    // $(demToppings).topIt(function() {
    //   return parseInt($(this).val());
    // })

    console.log(newPizza);

    totalIt = newPizza.toppings + newPizza.size;
    $("#pizzaResults").text(totalIt);

    event.preventDefault();



  })
})
