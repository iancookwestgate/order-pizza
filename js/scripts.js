function User(monies) {
  this.monies = monies
}

function PizzaOrder(toppings, size) {
  this.toppings = toppings;
  this.size = size;
}

PizzaOrder.prototype.calculate = function(moneyArr) {
  function getTotal(total, num) {
    return total + num;
  }
  var total = moneyArr.reduce(getTotal);
  this.monies = total + this.monies;
}

$(document).ready(function() {


  $("#totalingButton").click(function(event) {
    $("#displayTotal").show();
    event.preventDefault();



  })
})
