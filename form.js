"use strict";

//Alle Formular Variablen werden mir false initialisiert
let nachname = false;
let email = false;
let plz = false;

//Hier werden die drei Eingabefelder "Nachname", "Email" und Postleitzahl auf eine korrekte Eingabe hin geprüft
const form = () => {
  //Input Feld "Nachname" wird geprüft
  elementsOfWebsite.elNachname.addEventListener("input", () => {
    if (elementsOfWebsite.elNachname.value.length == 0) {
      elementsOfWebsite.elNachnameParagraph.style.display = "";
      elementsOfWebsite.elNachname.style.background = "yellow";
      elementsOfWebsite.elNachnameParagraph.innerText =
        "Bitte einen Nachnamen eintragen";
      nachname = false;
    } else {
      elementsOfWebsite.elNachname.style.background = "";
      elementsOfWebsite.elNachnameParagraph.style.display = "none";

      if (
        isNaN(elementsOfWebsite.elNachname.value) &&
        elementsOfWebsite.elNachname.value.length >= 3
      ) {
        elementsOfWebsite.elNachname.style.background = "green";
        nachname = true;
      } else if (
        isNaN(elementsOfWebsite.elNachname.value) &&
        elementsOfWebsite.elNachname.value.length < 3
      ) {
        elementsOfWebsite.elNachnameParagraph.style.display = "";
        elementsOfWebsite.elNachname.style.background = "yellow";
        elementsOfWebsite.elNachnameParagraph.innerText =
          "Der Nachname muss mindestens 3 Zeichen lang sein";
        nachname = false;
      } else {
        elementsOfWebsite.elNachnameParagraph.style.display = "";
        elementsOfWebsite.elNachname.style.background = "yellow";
        elementsOfWebsite.elNachnameParagraph.innerText =
          "Bitte keine Zahlen eintragen";
        nachname = false;
      }
    }
  });

  //Input Feld "Email" wird geprüft
  elementsOfWebsite.elEmail.addEventListener("input", () => {
    if (elementsOfWebsite.elEmail.value.length == 0) {
      elementsOfWebsite.elEmailParagraph.style.display = "";
      elementsOfWebsite.elEmail.style.background = "yellow";
      elementsOfWebsite.elEmailParagraph.innerText =
        "Bitte eine Email eintragen";
      email = false;
    } else if (
      elementsOfWebsite.elEmail.value.length > 0 &&
      elementsOfWebsite.elEmail.value.indexOf("@") > 0 &&
      elementsOfWebsite.elEmail.value.indexOf(".") > 0
    ) {
      elementsOfWebsite.elEmailParagraph.style.display = "none";
      elementsOfWebsite.elEmail.style.background = "green";
      email = true;
    } else {
      elementsOfWebsite.elEmail.style.background = "yellow";
      email = false;
    }
  });

  //Input Feld "Postleitzahl" wird geprüft
  elementsOfWebsite.elPlz.addEventListener("input", () => {
    if (elementsOfWebsite.elPlz.value.length != 5) {
      elementsOfWebsite.elPlzParagraph.style.display = "";
      elementsOfWebsite.elPlz.style.background = "yellow";
      elementsOfWebsite.elPlzParagraph.innerText =
        "Bitte eine gültige Postleitzahl eintragen";
      plz = false;
    } else if (
      elementsOfWebsite.elPlz.value.length == 5 &&
      !isNaN(elementsOfWebsite.elPlz.value)
    ) {
      elementsOfWebsite.elPlzParagraph.style.display = "none";
      elementsOfWebsite.elPlz.style.background = "green";
      plz = true;
    } else if (isNaN(elementsOfWebsite.elPlz.value)) {
      elementsOfWebsite.elPlzParagraph.style.display = "";
      elementsOfWebsite.elPlz.style.background = "yellow";
      elementsOfWebsite.elPlzParagraph.innerText =
        "Bitte eine gültige Postleitzahl eintragen";
    }
  });
};
