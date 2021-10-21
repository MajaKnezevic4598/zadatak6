const bookmarkBtn = document.querySelector(".bookmark-btn");
const bookmarkImg = document.querySelector(".bookmark-img");
const bookmarkText = document.querySelector(".bookmark-text");
// const modalSectionTitles = document.querySelectorAll(".pledge-modal-title");
const modalCheckoutBtn = document.querySelector(".checkout-btn");
const inputsPledge = document.querySelectorAll(".input-pledge");

const backProject = document.querySelectorAll(".back-project");
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const closeModalBtn = document.querySelector(".times");
const gotItBtn = document.querySelector(".got-it");

const pledgeTitles = document.querySelectorAll(".pledge-modal-title");
const pledgeButtons = document.querySelectorAll("[data-active='active']")
  
console.log(pledgeButtons);
const pledgeSections = document.querySelectorAll(".pledge-section");
const submitPledge = document.querySelectorAll(".submit-pledge");

const modal2 = document.querySelector(".modal2");
const main = document.querySelector("main");
console.log(modal2);


let bookmark = localStorage.getItem("bookmark");

function setTheme() {
  bookmarkImg.setAttribute("src", "./images/icon-bookmarked.svg");
  bookmarkText.style.color = "#3CB3AB";
  bookmarkText.textContent = "Bookmarked"
  
}

function removeTheme() {
  bookmarkImg.setAttribute("src", "./images/icon-bookmark.svg");
  bookmarkText.style.color = "#7A7A7A";
  bookmarkText.textContent = "Bookmark";
}

function setBookmark(){
    bookmark = localStorage.getItem("bookmark");

    if( bookmark == null){
        setTheme();
        localStorage.setItem("bookmark","active")
    } else if(bookmark == "active"){
        removeTheme();
        localStorage.removeItem("bookmark");
    }
}

if(bookmark == "active") setTheme();
if(bookmark == null) removeTheme();

bookmarkBtn.addEventListener("click",setBookmark);
/***************************************************end of local storage*/ 
inputsPledge.forEach(function(item){
  item.addEventListener("click",function(){
      item.previousElementSibling.style.opacity = "0"
  })
  
})


function openModal(){
  
    modal.classList.add("active");
    overlay.classList.add("active")
}

function closeModal(){
  modal.classList.remove("active");
  overlay.classList.remove("active");
  resetModal();
}



backProject.forEach(item=>{
  item.addEventListener("click",()=>{
    openModal();
  })
})

closeModalBtn.addEventListener("click",()=>{
  closeModal()
});

overlay.addEventListener("click",closeModal);

pledgeTitles.forEach(item=>{
  item.addEventListener("mouseenter",()=>{
    item.style.color = "#3CB3AB";
    let btn = item.parentElement.parentElement.previousElementSibling.querySelector(".pledge-btn");
    btn.style.borderColor = "#3CB3AB"
    // let circle = btn.querySelector(".circle")
    // btn.style.borderColor = "#3CB3AB";
    // circle.style.opacity = "1"
  })

  
})

pledgeTitles.forEach(item=>{
  item.addEventListener("mouseleave",function(){
    item.style.color = "#7A7A7A";
    let btn = item.parentElement.parentElement.previousElementSibling.querySelector(".pledge-btn");
    btn.style.borderColor = "rgba(122,122,122,0.5)";
  })
})

function test(item){

    const btn =
      item.parentElement.parentElement.previousElementSibling.querySelector(
        ".pledge-btn"
      );
    const circle = btn.querySelector(".circle");
    circle.style.opacity = "1";
    const parent = btn.closest(".pledge-section");
    parent.style.borderColor = "#3CB3AB";
    console.log(parent);
    const pledgeSection = parent.querySelector(".enter-pledge");
  console.log(pledgeSection);
  pledgeSection.style.display = "flex"


}

pledgeTitles.forEach(item=>{
  item.addEventListener("click",function(){
    const btn =
      item.parentElement.parentElement.previousElementSibling.querySelector(
        ".pledge-btn"
      );
    const circle = btn.querySelector(".circle");
    circle.style.opacity = "1";
    const parent = btn.closest(".pledge-section");
    parent.style.borderColor = "#3CB3AB";
    console.log(parent);
    const pledgeSection = parent.querySelector(".enter-pledge");
  console.log(pledgeSection);
  pledgeSection.style.display = "flex"

  })
})

//adding event listeners to modal conteiner circules
pledgeButtons.forEach((button) => {
  const circle = button.querySelector(".circle");
  button.addEventListener("click", function () {
    if(circle.style.opacity = "0") {
        
        circle.style.opacity = "1";
        const parent = button.closest(".pledge-section");
        parent.style.borderColor = "#3CB3AB";
        const pledgeSection = parent.querySelector(".enter-pledge");
        pledgeSection.style.display = "flex";
    }
   

  });
});

function resetModal(){
    pledgeSections.forEach(section=>{
        section.style.borderColor = "rgba(122,122,122,0.5)";
        section.querySelector(".pledge-modal-title").style.color = "rgb(122,122,122)";
        section.querySelector(".circle").style.opacity = "0";
        section.querySelector(".enter-pledge").style.display = "none";
    })
}

submitPledge.forEach(pledge=>{
  pledge.addEventListener("click",function(){
  modal2.classList.add("active");
  overlay.style.zIndex = "35";
  overlay.removeEventListener("click", closeModal);

  })
})

gotItBtn.addEventListener("click",function(){
  closeModal();
  modal2.classList.remove("active");
   overlay.style.zIndex = "25";
  window.scrollTo(0,0);
})





pledgeButtons.forEach(button=>{
  button.addEventListener("click",function(){

  })
})










