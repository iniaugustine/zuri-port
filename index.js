const toggle = document.querySelector(".toggle");
const menu = document.querySelector(".menu");
/*Toggle Mobile Menu*/
function toggleMenu() {
    if (menu.classList.contains("active")) {
        menu.classList.remove("active");
        //adds the menu (hamburger) icon
        toggle.querySelector("a").innerHTML = "<i class='fas fa-bars'></i>";
    } else {
        menu.classList.add("active");
        //add the x close icon
        toggle.querySelector("a").innerHTML = "<i class='fas fa-times'></i>";
    }
}
toggle.addEventListener("click", toggleMenu, false);

