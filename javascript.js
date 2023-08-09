const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navLink = document.querySelector('.nav-ele');
const insidepanel1 = document.querySelector('#insidepanel1') ;
const button = document.querySelectorAll('.panelbtn') ;

hamburger.addEventListener("click",mobileMenu);
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
buttons.forEach((btn,index) => {
  btn.addEventListener("click", function(e) {
    e.target.classList.toggle('active');
    if(index===0){
      document.querySelector('#insidepanel1').classList.toggle('active');
      document.querySelector('#insidepanel2').classList.remove('active');
      // document.querySelector('#insidepanel3').classList.remove('active');
    }
    else if(index===1){
      document.querySelector('#insidepanel2').classList.toggle('active');
      document.querySelector('#insidepanel1').classList.remove('active');
      // document.querySelector('#insidepanel3').classList.remove('active');
    }
    // else{
    //   document.querySelector('#insidepanel3').classList.toggle('active');
    //   document.querySelector('#insidepanel2').classList.remove('active');
    //   document.querySelector('#insidepanel1').classList.remove('active');
    // }
    for (let idx in buttons) {
      if (idx != index) {
        buttons[idx].classList.remove('active');
      }
    }
  });
}) ;



function copyText(){
  let copyTxt = document.getElementById('copyemail').lastChild.innerHTML;
  navigator.clipboard.writeText(copyTxt);
  popup();
  return false;
}

function popup(){
  console.log('working');
  let pop = document.querySelector('.popup') ;
  pop.style.opacity = "1";
  setTimeout(()=>{pop.style.opacity = "0"}, 1500);
}

