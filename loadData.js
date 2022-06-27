"use strict";

const renderData = (data) => {
  data = JSON.parse(data);

  //Jeden einzelnen Datensatz auf Website ausgeben
  //mit Hilfe von createElement aus newElement.js
  data.forEach((element) => {
    createElement(
      element.img,
      element.headline,
      element.description,
      element.price,
      elementsOfWebsite.elMain
    );
  });
};

//Prüfen ob status gleich 200 ist oder nicht
const processData = (xhr) => {
  if (xhr.status == 200) {
    return xhr.responseText;
  } else {
    console.warn(`Fehler ${xhr.status}`);
    return false;
  }
};

const loadData = (url, callback) => {
  const xhr = new XMLHttpRequest();
  xhr.open("get", url);
  xhr.addEventListener("load", (evt) => {
    let response = processData(evt.target);
    if (response) callback(response);
  });
  xhr.send();
};
