"use strict";

const memory = () => {
  //Daten für die Memory Karten
  const cardData = () => [
    { imgSrc: "./img/drum.png", name: "drum" },
    { imgSrc: "./img/drum.png", name: "drum" },
    { imgSrc: "./img/gitarre.jpg", name: "gitarre" },
    { imgSrc: "./img/gitarre.jpg", name: "gitarre" },
  ];

  //Memory Karten mischen
  const randomize = () => {
    let cardDatas = cardData().sort(() => Math.random() - 0.5);
    return cardDatas;
  };

  //Set aus gemischten Memorykarten erzeugen
  const createCardSet = () => {
    let cards = randomize();

    //Text über dem MemorySpiel anzeigen
    elementsOfWebsite.elZockenParagraph.forEach((element) => {
      element.classList.toggle("hidden");
    });

    //Die Karten erzeugen und auf der Website anzeigen
    cards.forEach((element) => {
      let card = document.createElement("div");
      let front = document.createElement("img");
      let back = document.createElement("div");

      card.classList.add("card");
      front.classList.add("front");
      back.classList.add("back");

      //Der Front Seite das Bild zuweisen
      front.src = element.imgSrc;
      card.setAttribute("name", element.name);

      //Vorder- und Rückseite der Karte hinzufügen und danach die Karte der Website hinzufügen
      card.append(front);
      card.append(back);
      elementsOfWebsite.elDivMemory.append(card);

      //Wenn Karte geklickt wird, die Karte umdrehen
      card.addEventListener("click", (event) => {
        card.classList.toggle("toggleCard");
        checkCards(event);
      });
    });
  };

  //Nach dem dem Ende des Spiel wird das div-Element entfernt
  //Nachdem zwei Karten umgedreht wurden, wird ein weiteres Umdrehen unmöglich gemacht
  const endOfGame = () => {
    setTimeout(() => elementsOfWebsite.elMemoryOuside.remove(), 3000);
    elementsOfWebsite.cardsAll.forEach((element) => {
      element.style.pointerEvents = "none";
    });
  };

  //Checken was umgedreht wurde
  const checkCards = (event) => {
    const clickedCard = event.target;
    clickedCard.classList.add("flipped");
    mapElements();

    if (elementsOfWebsite.flippedCards.length === 2) {
      //Wenn Paar gefunden wurde dann wird der Gesamtbetrag halbiert
      if (
        elementsOfWebsite.flippedCards[0].getAttribute("name") ===
        elementsOfWebsite.flippedCards[1].getAttribute("name")
      ) {
        updateAmountAndSum(sumOfCart / 2, posInCart);
        endOfGame();
        //Wenn kein Paar gefunden wurde dann wird der Gesamtbetrag verdoppelt
      } else {
        elementsOfWebsite.flippedCards.forEach((element) => {
          element.classList.remove("flipped");
          setTimeout(() => element.classList.remove("toggleCard"), 1000);
          updateAmountAndSum(sumOfCart * 2, posInCart);
          endOfGame();
        });
      }
    }
  };

  createCardSet();
};
