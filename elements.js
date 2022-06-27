"use strict";

//Elemente der Webseite
const elementsOfWebsite = {};

//Elemente der Seite besorgen
const mapElements = () => {
  elementsOfWebsite.elMain = document.querySelector("main");
  elementsOfWebsite.elShoppingCart = document.querySelector("table");
  elementsOfWebsite.elFooter = document.querySelector("footer");
  elementsOfWebsite.elSum = document.querySelector(".sum");
  elementsOfWebsite.elCart = document.querySelector(".cart");
  elementsOfWebsite.elFinalBuyBtn = document.querySelector(".finalBuyBtn");
  elementsOfWebsite.elImgSlides = Array.from(document.querySelectorAll(".img"));
  elementsOfWebsite.elLeftArrow = document.querySelector(".left");
  elementsOfWebsite.elRightArrow = document.querySelector(".right");
  elementsOfWebsite.elBannerHeadlines = Array.from(document.querySelectorAll(".slide-ueberschrift"));
  elementsOfWebsite.elArrows = Array.from(document.querySelectorAll(".arrow"));
  elementsOfWebsite.elListItems = Array.from(document.querySelectorAll("li"));
  elementsOfWebsite.elCartAmount = document.querySelector(".cartAmount");
  elementsOfWebsite.elZockenBtn = document.querySelector(".zocken");
  elementsOfWebsite.elZockenParagraph = Array.from(document.querySelectorAll(".zockenParagraph"));
  elementsOfWebsite.elDivMemory = document.querySelector(".memory");
  elementsOfWebsite.elMemoryOuside = document.querySelector(".memoryOutside");
  elementsOfWebsite.cardsAll = Array.from(document.querySelectorAll(".card"));
  elementsOfWebsite.flippedCards = Array.from(document.querySelectorAll(".flipped"));
  elementsOfWebsite.elNachname = document.querySelector(".nachname");
  elementsOfWebsite.elEmail = document.querySelector(".email");
  elementsOfWebsite.elPlz = document.querySelector(".plz");
  elementsOfWebsite.elNachnameParagraph = document.querySelector(".nachnameParagraph");
  elementsOfWebsite.elEmailParagraph = document.querySelector(".emailParagraph");
  elementsOfWebsite.elPlzParagraph = document.querySelector(".plzParagraph");
  elementsOfWebsite.elForm = document.querySelector(".form");

};
