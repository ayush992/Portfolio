const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const navLink = document.querySelector(".nav-ele");
const button = document.querySelectorAll(".panelbtn");
const callbtn = document.querySelectorAll(".insidepanel");

hamburger.addEventListener("click", mobileMenu);
// navLink.forEach((n) => {n.addEventListener("click", closeMenu)});
function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
    navLink.classList.toggle("active");
}

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}




let buttons = document.querySelectorAll(".panelbtn");

buttons.forEach((btn, index) => {
    btn.addEventListener("click", function (element) {
        element.target.classList.toggle("active");
        if (index === 0) {
            document.querySelector("#insidepanel1").classList.toggle("active");
            document.querySelector("#insidepanel2").classList.remove("active");
            // document.querySelector('#insidepanel3').classList.remove('active');
        } else if (index === 1) {
            document.querySelector("#insidepanel2").classList.toggle("active");
            document.querySelector("#insidepanel1").classList.remove("active");
            // document.querySelector('#insidepanel3').classList.remove('active');
        }
        // else{
        //   document.querySelector('#insidepanel3').classList.toggle('active');
        //   document.querySelector('#insidepanel2').classList.remove('active');
        //   document.querySelector('#insidepanel1').classList.remove('active');
        // }
        for (let idx in buttons) {
            if (idx != index) {
                buttons[idx].classList.remove("active");
            }
        }
    });
});


let alterbtn = document.querySelectorAll('.insidepanel');

alterbtn.forEach((btn,idx) => {
    btn.addEventListener('click', function(elem){
        buttons[idx].click() ;
    });
});




function copyText() {
    let copyTxt = document.getElementById("copyemail").lastChild.innerHTML;
    navigator.clipboard.writeText(copyTxt);
    popup();
    return false;
}

function popup() {
    let pop = document.querySelector(".popup");
    pop.style.opacity = "1";
    setTimeout(() => {
        pop.style.opacity = "0";
    }, 1500);
}

let box = document.querySelectorAll(".projectInfo");

box.forEach((ctr, idx) => {
    var add = document.querySelectorAll('.popupInfo');
    ctr.addEventListener("focus", function (element) {
            add[idx].style.opacity = '1';
            add[idx].style.zIndex = '300';
            console.log("focus") ;
    },true);
    
    ctr.addEventListener("blur", function (element) {
            add[idx].style.opacity = '0';
            add[idx].style.zIndex = '-1';
            console.log("blur") ;
    },true);
});
