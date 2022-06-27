"use strict";

//Einkaufswagen Icon in Header macht via Click den Warenkorb sichtbar oder lässt diesen wieder verschwinden
const cart = () => {
  elementsOfWebsite.elCart.addEventListener("click", () => {
    elementsOfWebsite.elFooter.classList.toggle("hidden");
    elementsOfWebsite.elForm.classList.toggle("notShown");
  });

  elementsOfWebsite.elZockenBtn.addEventListener("click", () => {
    //Startet das Memory und entfernt den "zocken" Button
    memory();
    elementsOfWebsite.elZockenBtn.remove();
  });
};

//Warenkorb für LocalStorage speichern
const saveData = (amount, headline, price, counter) => {
  let temporaryArray = [amount, headline, price];
  localStorage.setItem(counter, JSON.stringify(temporaryArray));
};

//Daten aus LocalStorage laden
const dataLoad = () => {
  let allKeysOfLocalStorage = [];

  //Über alle Keys vom LocalStorage iterieren
  for (let prop in localStorage) {
    //String in Array parsen
    let dataAsArray = JSON.parse(localStorage.getItem(prop));

    //Nur Zahlen ins das Array hinzufügen
    if (dataAsArray != null) {
      allKeysOfLocalStorage.push(prop);
    }
  }

  //Keys von klein zu groß sortieren
  allKeysOfLocalStorage.sort();

  //Sofern Daten im LocalStorage gefunden werden, werden diese in den Warenkorb geschrieben
  if (allKeysOfLocalStorage.length > 0) {
    //über alle Keys iterieren
    allKeysOfLocalStorage.forEach((element) => {
      //Value vom jeweiligen Key parsen und in ein Array umformen
      let dataAsArray = JSON.parse(localStorage.getItem(element));

      //Alten localStorage Eintrag entfernen
      localStorage.removeItem(element);
      //Artikel zum Warenkorb hinzufügen und neuen LocalStorage Eintrag setzen
      toShoppingCart(dataAsArray[1], dataAsArray[2], Number(dataAsArray[0]));
    });
  }
};

//Wenn der Kaufen Button gedrückt wird geprüft ob das Formular korrekt ausgefüllt ist.
// Wenn ja dann wir der Kauf ausgeführt und das Local Storage gelöscht
//Wenn nein wird der Kunde aufgefprdert das Formular korrekt auszufüllen
const buy = () => {
  elementsOfWebsite.elFinalBuyBtn.addEventListener("click", () => {
    if (nachname && email && plz) {
      if (localStorage.length > 0) {
        localStorage.clear();
        dataLoad();
        elementsOfWebsite.elForm.classList.add("notShown");
        document.location.reload();
        alert("Wir haben Ihre Bestellung erhalten!");
      } else alert("Es liegen keine Artikel im Warenkorb!");
    } else {
      alert("Bitte erst das Formular ausfüllen");
    }
  });
};

//Variablen
//Gesamtsumme im Warenkorb
let sumOfCart = 0;
//Anzhal aller Artikel im Warenkorb
let posInCart = 0;
let counter = 0;

//Kunde wählt ein Instrument zum Kauf aus und legt es in den Warenkorb
const toShoppingCart = (headline, price, pieces = 1) => {
  let internCounter = counter;
  counter++;
  //Elemente erzeugen
  const cartInput = document.createElement("input");
  const cartHeadline = document.createElement("td");
  const cartPrice = document.createElement("td");
  const cartBtn = document.createElement("button");
  const cartTableRow = document.createElement("tr");

  //Input Feld mit eins initialisieren
  cartInput.setAttribute("value", pieces);

  //Aktuelle Anzahl eines Artikels im Warenkorb speichern
  let inputValue = cartInput.value;

  //Listener der darauf horscht wann eine Eingabe im Inputfeld getätigt wird
  cartInput.addEventListener("change", () => {
    //Gesamtzahl und -Preis um die alten Werte reduzieren
    //Abfangen von Eingaben die keine Zahl darstellt
    if (Number(cartInput.value) >= 0) {
      let oldPrice = inputValue * price;
      sumOfCart = sumOfCart - Number(oldPrice);
      posInCart = posInCart - Number(inputValue);

      //Die Anzahl eines Artikels im Warenkorb aktualisieren
      inputValue = cartInput.value;

      //Gesamtzahl und -Preis um die neuen Werte erhöhen
      let newPrice = cartInput.value * price;
      sumOfCart = sumOfCart + Number(newPrice);
      posInCart = posInCart + Number(cartInput.value);

      //Ausgabe der Gesamtanzahl und der Gesamtsumme auf Website
      updateAmountAndSum(sumOfCart, posInCart);

      saveData(inputValue, headline, price, internCounter);
    }
  });

  //Inhalt in den Warenkorb schreiben
  cartHeadline.innerText = `${headline}`;
  cartPrice.innerText = `${price} €`;
  cartBtn.innerText = "Löschen";
  cartBtn.classList.add("abstand");

  //Zeile im Warenkorb entfernen
  cartBtn.addEventListener("click", () => {
    //Zeile aus Warenkorb entfernen
    cartTableRow.remove();
    localStorage.removeItem(internCounter);

    //Anpassen der Gesamtzahl und des Gesamtbetrags
    sumOfCart = sumOfCart - Number(cartInput.value) * Number(price);
    posInCart = posInCart - Number(cartInput.value);

    //Ausgabe der Gesamtanzahl und der Gesamtsumme auf Website
    updateAmountAndSum(sumOfCart, posInCart);

    //Sofern alle Positionen gelöscht werden wird der Warenkorb ausgeblendet
    if (sumOfCart == 0) {
      elementsOfWebsite.elFooter.classList.add("hidden");
      elementsOfWebsite.elForm.classList.add("notShown");
    }
  });

  //Inhalte eines Kaufs in eine Zeile eintragen
  cartTableRow.append(cartInput, cartHeadline, cartPrice, cartBtn);

  //Warenkorb anzeigen lassen
  elementsOfWebsite.elFooter.classList.remove("hidden");
  //Die Zeile mit allen Informationen auf der Seite anzeigen lassen
  elementsOfWebsite.elShoppingCart.append(cartTableRow);

  //Gesamtsumme und Gesamtanzahl um eins erhöhen
  sumOfCart += Number(price);
  posInCart++;

  //Gesamtanzahl- und Gesamtsumme auf Website ausgeben
  updateAmountAndSum(sumOfCart, posInCart);
  elementsOfWebsite.elForm.classList.remove("notShown");
  saveData(inputValue, headline, price, internCounter);
};

//Gesamtanzahl- und Gesamtsumme auf Website ausgeben
const updateAmountAndSum = (sum, pos) => {
  elementsOfWebsite.elSum.innerText = `Gesamtzahl: ${pos}
  Gesamtsumme: ${sum} €`;

  //Anpassen der Anzahl neben dem Cart Icon in der Kopfzeile
  if (pos == 0) elementsOfWebsite.elCartAmount.innerText = ``;
  else elementsOfWebsite.elCartAmount.innerText = pos;
};
