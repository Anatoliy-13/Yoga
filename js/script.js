window.addEventListener("DOMContentLoaded", function () {
  "use strict";
  let tab = document.querySelectorAll(".info-header-tab"),
    info = document.querySelector(".info-header"),
    tabContent = document.querySelectorAll(".info-tabcontent");

  function hideTabContent(a) {
    for (let i = a; i < tabContent.length; i++) {
      tabContent[i].classList.remove("show");
      tabContent[i].classList.add("hide");
    }
  } //функция которая скрывает не используемые табы(лечение, отдых, природа)//

  hideTabContent(1); //запускаем 1 таб - лечение//

  function showTabContent(b) {
    if (tabContent[b].classList.contains("hide")) {
      tabContent[b].classList.remove("hide");
      tabContent[b].classList.add("show");
    }
  } //функция которая показывает только один определенный таб или лечение или отдых или ...//

  info.addEventListener("click", function (event) {
    // способ делегирование событий, при нажатиии на таб(лечение, отдых, природа) будет отображаться только принадлежащее табу элемент//
    let target = event.target;
    if (target && target.classList.contains("info-header-tab")) {
      for (let i = 0; i < tab.length; i++) {
        if (target == tab[i]) {
          hideTabContent(0);
          showTabContent(i);
          break;
        }
      }
    }
  });
});
