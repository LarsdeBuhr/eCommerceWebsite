"use strict";

//Initiale Funktion
const init = () => {
  mapElements();
  form();
  banner();
  cart();
  buy();
  dataLoad();
  loadData("data.json", renderData);
};

//Startfunktion
init();
