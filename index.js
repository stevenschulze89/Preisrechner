let total = 0;

function addItemToOrder(price, name) {
  total = total + price;
  console.log(price, name, total);
  console.log(" Der gesamtpreis beträgt: " + total + "€");
  const totalElement = document.getElementById("total");
  totalElement.innerHTML = total.toFixed(2) + "€";
  const orderList = document.getElementById("bestell-liste");
  orderList.innerHTML += `<li>${name} - ${price.toFixed(2)}€</li>`;

  const leerElement = document.getElementById("leer");
  if (leerElement) {
    leerElement.style.display = "none";
  }
}

function resetOrder() {
  total = 0;
  const totalElement = document.getElementById("total");
  totalElement.innerHTML = total.toFixed(2) + "€";
  const orderList = document.getElementById("bestell-liste");
  orderList.innerHTML = `<li id="leer">Noch keine Artikel ausgewählt.</li>`;
}

function vorOrt() {
  alert(
    "Bestellung vor Ort abgeschlossen! Gesamtpreis: " + total.toFixed(2) + "€",
  );
  resetOrder();
}

function lieferung() {
  if (total >= 20) {
    alert(
      "Bestellung wird geliefert! " +
        (total + 2.5).toFixed(2) +
        "€" +
        " Inklusive Lieferkosten von 2,50€ ",
    );
  } else if (total < 20) {
    alert(
      "Lieferung nur ab einem Bestellwert von 20€ möglich. Gesamtpreis: " +
        total.toFixed(2) +
        "€",
    );
  }

  resetOrder();
}
