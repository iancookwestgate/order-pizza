function Pizza() {
  this.toppings = [];
  this.size = [];
}

Pizza.prototype.topIt = function() {
  var chosenTopping = this.toppings;
  var topTotal = 0;
  if (chosenTopping === "Cheese") {
    topTotal += 1;
  } else if (chosenTopping === "Pepperoni") {
    topTotal += 2;
  } else if (chosenTopping === "Mushroom") {
    topTotal += 3;
  } else {
    alert("Don't order a naked pizza!");
  }
  return topTotal;
}

Pizza.prototype.sizeIt = function() {
  var chosenSize = this.size;
  var sizeTotal = 0;
  if (chosenSize === "Personal") {
    sizeTotal = 8;
  } else if (chosenSize === "Medium") {
    sizeTotal = 12;
  } else if (chosenSize === "Large") {
    sizeTotal = 16;
  } else {
    alert("Please choose a size!")
  }
  return sizeTotal;
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
