const bookmarkBtn = document.querySelector(".bookmark-btn");
const bookmarkImg = document.querySelector(".bookmark-img");
const bookmarkText = document.querySelector(".bookmark-text");
const modalCheckoutBtn = document.querySelector(".checkout-btn");
const inputsPledge = document.querySelectorAll(".input-pledge");
const backProject = document.querySelectorAll(".back-project");
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const closeModalBtn = document.querySelector(".times");
const gotItBtn = document.querySelector(".got-it");

const pledgeTitles = document.querySelectorAll(".pledge-modal-title");
const pledgeButtons = document.querySelectorAll("[data-active='active']");
const pledgeSections = document.querySelectorAll(".pledge-section");
const submitPledge = document.querySelectorAll(".submit-pledge");
const modal2 = document.querySelector(".modal2");
const main = document.querySelector("main");
const slider = document.querySelector(".slider");
const innerSlider = document.querySelector(".inner-slider");

const burgerNavImg = document.querySelector(".burger-nav img");
const bambooConteiner = document.querySelector(".bamboo-conteiner");
const titleLogo = document.querySelector(".title-section-logo");
const navbar = document.querySelector(".navbar")
const layer2= document.querySelector(".layer2");
const burgerNav = document.querySelector(".burger-nav");


let computedFromCss = window.getComputedStyle(slider).width;

const totalSum = 100000;


//retruns percentage which is includede when calculate inner-slider-width;
function backersPercentage(){
    const totalBacked = document.querySelector(".total-backed-sum");
    let totalValue = totalBacked.textContent.replace(",","");
    let num = parseFloat(totalValue);
    let percentage = (num/totalSum)*100;
    console.log(percentage);
    if(percentage>100) return 100;
    else return percentage;  
}


//seting inner-slider widht depending of percentage form backersPercentage() function
function calcInnerSliderWidth(){
    const sliderWidth = document.querySelector(".slider").offsetWidth;
    const innerSlider = document.querySelector(".inner-slider");
    let rangeWidth = (sliderWidth/100)*backersPercentage();
    innerSlider.style.width = `${rangeWidth}px`;
}

innerSlider.style.width = calcInnerSliderWidth();

window.addEventListener("resize",function(){
    calcInnerSliderWidth();
})

let bookmark = localStorage.getItem("bookmark");

function setTheme() {
  bookmarkImg.setAttribute("src", "./images/icon-bookmarked.svg");
  bookmarkText.style.color = "#3CB3AB";
  bookmarkText.textContent = "Bookmarked";
}

function removeTheme() {
  bookmarkImg.setAttribute("src", "./images/icon-bookmark.svg");
  bookmarkText.style.color = "#7A7A7A";
  bookmarkText.textContent = "Bookmark";
}

function setBookmark() {
  bookmark = localStorage.getItem("bookmark");

  if (bookmark == null) {
    setTheme();
    localStorage.setItem("bookmark", "active");
  } else if (bookmark == "active") {
    removeTheme();
    localStorage.removeItem("bookmark");
  }
}

if (bookmark == "active") setTheme();
if (bookmark == null) removeTheme();

bookmarkBtn.addEventListener("click", setBookmark);
/***************************************************end of local storage*/

function openModal() {
  modal.classList.add("active");
  overlay.classList.add("active");
}

function closeModal() {
  modal.classList.remove("active");
  overlay.classList.remove("active");
  resetModal();
}

//reseting style and input value after closing modal window
function resetModal() {
  pledgeSections.forEach((section) => {
    section.style.borderColor = "rgba(122,122,122,0.5)";
    section.querySelector(".pledge-modal-title").style.color =
      "rgb(122,122,122)";
    section.querySelector(".circle").style.opacity = "0";
    section.querySelector(".enter-pledge").style.display = "none";
    let inputValue = section.querySelector(".input-pledge");
    inputValue.value = "";
    section.querySelector(".error-msg").textContent = "";
  });
}

backProject.forEach((item) => {
  item.addEventListener("click", () => {
    openModal();
  });
});

closeModalBtn.addEventListener("click", () => {
  closeModal();
});

//closing modal when clickin on overlay
overlay.addEventListener("click", closeModal);
//mouse enter event
pledgeTitles.forEach((item) => {
  item.addEventListener("mouseenter", () => {
    item.style.color = "#3CB3AB";
    let btn =
      item.parentElement.parentElement.previousElementSibling.querySelector(
        ".pledge-btn"
      );
    btn.style.borderColor = "#3CB3AB";
  
  });
});

//mouse leave event
pledgeTitles.forEach((item) => {
  item.addEventListener("mouseleave", function () {
    item.style.color = "#7A7A7A";
    let btn =
      item.parentElement.parentElement.previousElementSibling.querySelector(
        ".pledge-btn"
      );
    btn.style.borderColor = "rgba(122,122,122,0.5)";
  });
});

//adding event listener on click of modal section titiles
pledgeTitles.forEach((item) => {
  item.addEventListener("click", function () {
    const btn =
      item.parentElement.parentElement.previousElementSibling.querySelector(
        ".pledge-btn"
      );
    const circle = btn.querySelector(".circle");
    const parent = btn.closest(".pledge-section");
    const pledgeSection = parent.querySelector(".enter-pledge");

    if (circle.style.opacity == "0" || circle.style.opacity == "") {
      circle.style.opacity = "1";
      pledgeSection.style.display = "flex";
    
      parent.style.border = "2px solid #3CB3AB"
    } else if (circle.style.opacity == "1") {
      circle.style.opacity = "0";
        parent.style.border = "1px solid #7A7A7A";
    
      pledgeSection.style.display = "none";
    }
  });
});

//adding event listeners to modal conteiner circules
pledgeButtons.forEach((button) => {
  button.addEventListener("click", function () {
      console.log("klinkunot")
    const circle = button.querySelector(".circle");
    const parent = button.closest(".pledge-section");
    const pledgeSection = parent.querySelector(".enter-pledge");
    if (circle.style.opacity == "" || circle.style.opacity == "0") {
      circle.style.opacity = "1";
      parent.style.border = "2px solid #3CB3AB";
      pledgeSection.style.display = "flex";
    } else if (circle.style.opacity == "1") {
      circle.style.opacity = "0";
       parent.style.border = "1px solid #7A7A7A";
      pledgeSection.style.display = "none";
    }
  });
});

//if input field is empty change a color of "enter you pledge"
//if pledge is lower than min pledge output error message
submitPledge.forEach((pledge) => {
  pledge.addEventListener("click", function (e) {
    const input =
      e.target.previousElementSibling.querySelector(".input-pledge");
    const enterPledge = input
      .closest(".enter-pledge")
      .querySelector("p:first-of-type");
    const minPledge = Number(e.target.dataset.minPledge);
    const errorMsg = input.closest(".enter-pledge").querySelector(".error-msg");

    if (!input.value) {
      enterPledge.style.color = "red";
      enterPledge.style.fontWeight = "700";
    } else if (input.value < minPledge) {
      errorMsg.textContent = `min pledge is ${minPledge}$`;
      errorMsg.style.opacity = "1";
    } else {
      updateStatistics(input.value);
      modal2.classList.add("active");
      modal.classList.remove("active");
      calcInnerSliderWidth();
      overlay.removeEventListener("click", closeModal);
    }
  });
});

//on input focus event removes red color of paragraph if there is any
inputsPledge.forEach((input) => {
  input.addEventListener("focus", function () {
    input.previousElementSibling.style.opacity = "0";
    const paraf = input
      .closest(".enter-pledge")
      .querySelector("p:first-of-type");
    if ((paraf.style.color = "red")) {
      paraf.style.color = "#7A7A7A";
      paraf.style.fontWeight = "normal";
    }
  });
});

//when clicking gotIt button event
gotItBtn.addEventListener("click", function () {
  closeModal();
  modal2.classList.remove("active");
  overlay.style.zIndex = "25";
  window.scrollTo(0, 0);
});



pledgeButtons.forEach((button) => {
  button.addEventListener("click", function () {});
});



//updating statisctis
function updateStatistics(input) {
  const currentTotalBacked = document.querySelector(".total-backed-sum");
  const totalBackers = document.querySelector(".backers");
  
  let totalBackersValue = totalBackers.textContent.replace(",", "");
  let updatedTotalBackersValue = parseFloat(totalBackersValue) + 1; 
  let localBackers = updatedTotalBackersValue.toLocaleString();
  totalBackers.textContent = localBackers;

  let totalBackedNumber = currentTotalBacked.textContent.replace(",", "");
  let updatedTotalBacked = parseFloat(totalBackedNumber) + parseFloat(input);
  let localString = updatedTotalBacked.toLocaleString();
  currentTotalBacked.textContent = localString;
}




burgerNav.addEventListener("click",function(){
  
   navbar.classList.add("active-navbar");

   const chechActive = burgerNav.getAttribute("data-burger");
  
  if (chechActive == "active") {
    burgerNav.innerHTML = `<p class="x">&times</p>`;
    navbar.style.display = "block";
    layer2.style.display = "block";
     titleLogo.style.display = "none";
      bambooConteiner.style.zIndex = "auto";

     burgerNav.setAttribute("data-burger","inactive");
  }
  if (chechActive == "inactive") {
    burgerNav.innerHTML = `<img src="./images/icon-hamburger.svg" alt="">`;
    navbar.style.display = "none";
    layer2.style.display = "none";
    titleLogo.style.display = "block";
     bambooConteiner.style.zIndex = "20";
    burgerNav.setAttribute("data-burger", "active");
  }
})






