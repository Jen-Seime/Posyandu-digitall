const checkbtn = document.getElementById("checkbtn");
const nav = document.querySelector(".nav-links");

checkbtn.addEventListener("click", function() {
    console.log("halo")
    nav.classList.toggle("togle")
})