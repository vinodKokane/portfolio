// header scroll



function changeHeader() {
    let header_fixed = document.querySelector(".header");
    let current = window.scrollY;
    if (current > 0) {
        header_fixed.classList.add("header-fixed");
    }else{
        header_fixed.classList.remove("header-fixed");
    }
}

window.addEventListener("scroll",changeHeader);