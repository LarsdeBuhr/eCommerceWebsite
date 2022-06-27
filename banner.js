"use strict";

const banner = (oldIn = 0, newIn = 0) => {
  let oldIndex = oldIn;
  let newIndex = newIn;
  elementsOfWebsite.elListItems[newIndex].classList.add("liOn");
  //Logik für die Bannerbewegung. Wenn rechter oder linker Pfeil gedrückt wird.
  //Automatischer Lauf via setInterval nutzt den rechten Pfeil
  const toggleList = (arrow) => {
    if (arrow) {
      newIndex = oldIndex + 1;
      if (oldIndex == -1) {
        oldIndex = 0;
        newIndex = 1;
      }

      if (newIndex < elementsOfWebsite.elImgSlides.length) {
        toggleClasses(elementsOfWebsite.elImgSlides, oldIndex, newIndex);
        toggleClasses(elementsOfWebsite.elBannerHeadlines, oldIndex, newIndex);
        oldIndex++;
      } else {
        newIndex = 0;
        toggleClasses(elementsOfWebsite.elImgSlides, oldIndex, newIndex);
        toggleClasses(elementsOfWebsite.elBannerHeadlines, oldIndex, newIndex);
        oldIndex = 0;
      }
    } else {
      newIndex = oldIndex - 1;

      if (newIndex >= 0) {
        toggleClasses(elementsOfWebsite.elImgSlides, oldIndex, newIndex);
        toggleClasses(elementsOfWebsite.elBannerHeadlines, oldIndex, newIndex);
        oldIndex--;
      } else {
        newIndex = elementsOfWebsite.elImgSlides.length - 1;
        toggleClasses(elementsOfWebsite.elImgSlides, oldIndex, newIndex);
        toggleClasses(elementsOfWebsite.elBannerHeadlines, oldIndex, newIndex);
        oldIndex = elementsOfWebsite.elImgSlides.length - 1;
      }
    }
  };

  //Elemente via der hidden Klasse ausblenden
  const toggleClasses = (element, oldIndex, newIndex) => {
    element[oldIndex].classList.toggle("hidden");
    elementsOfWebsite.elListItems[oldIndex].classList.remove("liOn");
    elementsOfWebsite.elListItems[newIndex].classList.add("liOn");
    element[newIndex].classList.toggle("hidden");
  };

  //Eventlistener für den linken und rechten Pfeil im Banner
  elementsOfWebsite.elLeftArrow.addEventListener("click", () => {
    toggleList(false);
  });
  elementsOfWebsite.elRightArrow.addEventListener("click", () => {
    toggleList(true);
  });

  //Intervall Fürs Banner setzen
  let myInterval;
  const startInterval = () => {
    myInterval = setInterval(toggleList, 2000, true);
  };

  //Banner stoppen wenn auf das Bild, die Pfeile oder die Punktnavigation mit der Maus gefahren wird
  elementsOfWebsite.elImgSlides.forEach((element) => {
    element.addEventListener("mouseenter", () => {
      clearInterval(myInterval);
    });
  });
  elementsOfWebsite.elArrows.forEach((element) => {
    element.addEventListener("mouseenter", () => {
      clearInterval(myInterval);
    });
  });
  elementsOfWebsite.elListItems.forEach((element) => {
    element.addEventListener("mouseenter", () => {
      clearInterval(myInterval);
    });
  });
  //Banner wieder starten wenn die Maus nicht mehr auf dem Bild oder den Pfeilen steht
  elementsOfWebsite.elImgSlides.forEach((element) => {
    element.addEventListener("mouseleave", () => {
      startInterval();
    });
  });

  //Banner Rotation starten
  startInterval();

  //Punktnavigation im Banner
  for (let index = 0; index < elementsOfWebsite.elListItems.length; index++) {
    elementsOfWebsite.elListItems[index].addEventListener("click", () => {
      toggleClasses(elementsOfWebsite.elImgSlides, newIndex, index);
      toggleClasses(elementsOfWebsite.elBannerHeadlines, newIndex, index);

      newIndex = index;
      oldIndex = index;
    });
  }
};
