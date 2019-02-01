function Pizza() {
  this.toppings = 0;
  this.size = 0;
}

Pizza.prototype.topIt = function(chosenTopping) {
  if (chosenTopping === "Cheese") {
    this.toppings += 1;
  } else if (chosenTopping === "Pepperoni") {
    this.toppings += 2;
  } else if (chosenTopping === "Mushroom") {
    this.toppings += 3;
  } else {
    alert("Don't order a naked pizza!");
  }
  return(chosenTopping.toppings);
}

Pizza.prototype.sizeIt = function(chosenSize) {
  if (chosenSize === "Personal") {
    this.size = 8;
  } else if (chosenSize === "Medium") {
    this.size = 12;
  } else if (chosenSize === "Large") {
    this.size = 16;
  } else {
    alert("Please choose a size!")
  }
  return(chosenSize.size);
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
      demToppings += ($(this).val());
    });
    var datSize = ($("input[name='size']:checked").val());

    newPizza.topIt(demToppings);
    newPizza.sizeIt(datSize);
    // $(demToppings).topIt(function() {
    //   return parseInt($(this).val());
    // })

    console.log(datSize);
    console.log(demToppings);

    totalIt = (datSize + demToppings);
    $("#pizzaResults").text(totalIt);

    event.preventDefault();



  })
})
