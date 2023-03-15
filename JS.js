
window.addEventListener("scroll", function() {
    var header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0)
})






/*
window.onscroll = function() {
    rolagem()
}

function rolagem() {
    if(document.body.scrollTop > 760 || document.documentElement.scrollTop > 760) {
        document.getElementsByTagName("header")[0].style.backgroundColor = "black";
        document.getElementsByTagName("header")[0].style.transition = "1s";
    }
    else {
        document.getElementsByTagName("header")[0].style.backgroundColor = "rgb(10, 10, 10, 0)";
        document.getElementsByTagName("header")[0].style.transition = "1s";
    }
}
*/