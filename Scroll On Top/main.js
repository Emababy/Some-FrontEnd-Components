let spanScroll = document.querySelector(".scroll-to-top");
window.onscroll = function (){
    if (this.scrollY >= 1000){
        spanScroll.classList.add("show");
    } else {
        spanScroll.classList.remove("show");
    }
}

spanScroll.onclick = function (){
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
};