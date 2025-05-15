const counter = document.querySelectorAll(".counter");
// convert to array
const array = Array.from(counter);
// select array element
array.map((item) => {
  // data layer
  let counterInnerText = item.textContent;

  let count = 1;
  let speed = item.dataset.speed / counterInnerText;
  function counterUp() {
    item.textContent = count++;
    if (counterInnerText < count) {
      clearInterval(stop);
    }
  }
  const stop = setInterval(() => {
    counterUp();
  }, speed);
});



// let heroCard = document.querySelector(".hero-card");
// let heroAbout = document.querySelector(".about");
// let img = document.querySelector("#medet");
// heroCard.addEventListener("mouseover", function () {
//   heroAbout.style.display = "block";
  
// });
// heroCard.addEventListener("mouseout", function () {
//   heroAbout.style.display = "none";
  
// });

window.addEventListener("scroll", function () {
    var header = document.querySelector(".header");
    if (window.scrollY > 30) {
        header.classList.add("active");
    } else {
        header.classList.remove("active");
    }
});


let videoBox=document.querySelector(".video-box")
let videoBtn=document.querySelector(".vid-btn")
let videoImg=document.querySelector(".video0img")
videoBox.addEventListener("mouseover",function(){
  videoBtn.style.display="block"  
})
videoBox.addEventListener("mouseout",function(){
  videoBtn.style.display="none"
})