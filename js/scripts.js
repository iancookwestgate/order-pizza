function Pizza() {
  this.toppings = [];
  this.size = [];
}

Pizza.prototype.topIt = function(this.toppings) {
  debugger;
  var topTotal = [];
  if (this.toppings === "Cheese") {
    topTotal += 1;
  } else if (this.toppings === "Pepperoni") {
    topTotal += 2;
  } else if (this.toppings === "Mushroom") {
    topTotal += 3;
  } else {
    alert("Don't order a naked pizza!");
  }
  return topTotal;
  console.log(topTotal);
}

Pizza.prototype.sizeIt = function() {
  var sizeTotal = [];
  if (this.size === "Personal") {
    sizeTotal = 8;
  } else if (this.size === "Medium") {
    sizeTotal = 12;
  } else if (this.size === "Large") {
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
    newPizza.toppings.push(demToppings);
    newPizza.size.push(datSize);

    newPizza.topIt();
    newPizza.sizeIt();


    // $(demToppings).topIt(function() {
    //   return parseInt($(this).val());
    // })

    console.log(newPizza);

    totalIt = (datSize + demToppings);
    $("#pizzaResults").text(totalIt);

    event.preventDefault();



  })
})
