


const iconItemHotel = document.querySelector(".point__svg");
const crossForIcon = document.querySelector(".popup__icon-cross")
const popupHotel = document.querySelector(".popup")

const tabDomodedovoImg = document.getElementById("domodedovo")
const linkDomodedovo = document.querySelector(".tabs__link-decoration")

function openHotenPopup() {
  popupHotel.classList.add("popup_type_display");
}

function closeHotenPopup() {
  popupHotel.classList.remove("popup_type_display");
}

function changeimage(evt) {
  if (evt.target === linkDomodedovo) {
    tabDomodedovoImg.src = "/image/logo_mini_1.png";
    console.log(tabDomodedovoImg.src);
  } else {
    tabDomodedovoImg.src = "/image/logo_mini_1_1.png";
    console.log(123);
    
  }
  

}

iconItemHotel.addEventListener("click", openHotenPopup);

crossForIcon.addEventListener("click", closeHotenPopup);

linkDomodedovo.addEventListener("click", function (evt) { 
  let oTarget = evt.target;
  if (oTarget === linkDomodedovo) {
    oTarget = "/image/logo_mini_1.png";
    console.log(tabDomodedovoImg.src);
  } else {
    oTarget = "/image/logo_mini_1_1.png";
    console.log(123);
  }
});