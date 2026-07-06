let total = 0;

function addItemToOrder(price, name) {
  total = total + price;
  console.log(price, name, total);
  console.log(" Der gesamtpreis beträgt: " + total + "€");
}
