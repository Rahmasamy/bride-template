const buttons = document.querySelectorAll("[data-carousel-button]")

buttons.forEach(button => {
  button.addEventListener("click", () => {
    const offset = button.dataset.carouselButton === "next" ? 1 : -1
    const slides = button
      .closest("[data-carousel]")
      .querySelector("[data-slides]")

    const activeSlide = slides.querySelector("[data-active]")
    let newIndex = [...slides.children].indexOf(activeSlide) + offset
    if (newIndex < 0) newIndex = slides.children.length - 1
    if (newIndex >= slides.children.length) newIndex = 0

    slides.children[newIndex].dataset.active = true
    delete activeSlide.dataset.active
  })
})
const tog=document.getElementById("tog");
const vis=document.getElementById("vis");
const overlay=document.getElementById("overlay");
tog.addEventListener('click',()=> {
   overlay.classList.toggle("togoverlay");
   vis.classList.toggle("vis");

})
const ratingsEls=document.querySelectorAll('.emoj');
const btnele = document.getElementById('btn');
const cont =document.getElementById('container');
let selectedata= "";
ratingsEls.forEach((ratingEL) =>{
  ratingEL.addEventListener("click", (event) => {
     removeActive()
     selectedata=event.target.innerText || event.target.parentNode.innerText;
     //console.log(event.target.innerText|| event.target.parentNode.innerText);
     event.target.classList.add("active");
     //console.log(event);==> pointer refers to the img 
     //console.log(event.target); ==> img 
     //console.log(event.target.parentNode); ==> emoj 
     event.target.parentNode.classList.add("active");
  })
});
btnele.addEventListener("click",()=>{
    if (selectedata!= ""){
        cont.innerHTML=`
        <strong> Thank You </strong>
        <br>
        <br>
        <strong> FeedBack is : ${selectedata} </strong>
        <p> we will use your feedback to improve our customer services 
        `
       
    }
})
function removeActive(){
  ratingsEls.forEach((ratingEL)=> {
    ratingEL.classList.remove("active");
  })
}