"use strict";

//Erzeugen einer neuen Komponente eines Musikinstruments
const createElement = (img, headline, description, price, parent) => {
  //Neues umschließendes Div Element erzeugen
  const elDiv = document.createElement("div");

  //Dem neuen Element alle seine Werte zuweisen
  //Produktbild erzeugen
  const elImage = document.createElement("img");
  elImage.setAttribute("src", img);

  //Headline erzeugen
  const elHeadline = document.createElement("h3");
  elHeadline.innerText = headline;

  //Beschreibung erzeugen
  const elDescription = document.createElement("p");
  elDescription.innerText = `Beschreibung:\n ${description}`;

  //Preis erzeugen
  const elPrice = document.createElement("p");
  elPrice.innerText = `Preis: ${price} €`;

  //Kaufen Button
  const elBtnBuy = document.createElement("button");
  elBtnBuy.classList.add("buyBtn");
  elBtnBuy.innerText = "Jetzt Kaufen";

  //Button mit Eventlistener versehen. Durch das Klicken wird der Artikel in den Warenkorb gelegt
  elBtnBuy.addEventListener("click", () => {
    toShoppingCart(headline, price);
  });

  //Das Div-Element der Komponente bekommt eine Klasse zugewiesen fürs Styling
  elDiv.classList.add("product");

  //Die Unterelemente dem Hauptelement zuordenen
  elDiv.append(elImage, elHeadline, elDescription, elPrice, elBtnBuy);
  //Komponente ins Elternelement hinzufügen
  parent.append(elDiv);
};
