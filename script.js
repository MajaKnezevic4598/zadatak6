const bookmarkBtn = document.querySelector(".bookmark-btn");
const bookmarkImg = document.querySelector(".bookmark-img");
const bookmarkText = document.querySelector(".bookmark-text");
console.log(bookmarkText);
const modalSectionTitle = document.querySelector(".no-reward h4");
const modalCheckoutBtn = document.querySelector(".checkout-btn");
const inputsPledge = document.querySelectorAll(".input-pledge");
console.log(inputsPledge)



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

inputsPledge.forEach(function(item){
  item.addEventListener("click",function(){
      item.previousElementSibling.style.opacity = "0"
  })
  
})

//mouse enter and mouse leave

// modalSectionTitle.addEventListener("mouseenter",()=>{
//   modalSectionTitle.style.color = "#3CB3AB";
//   modalCheckoutBtn.style.borderColor = "#3CB3AB";
// })
// modalSectionTitle.addEventListener("mouseleave",()=>{
//   modalSectionTitle.style.color = "#7A7A7A";
//   modalCheckoutBtn.style.borderColor = "#7A7A7A";
// })










