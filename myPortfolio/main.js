
window.onscroll = function() {
  navscroll();
  reveal();

};





function navscroll() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    document.querySelector("header").style.position = "fixed";
    document.querySelector("header").style.background="#111111d0";
  }
  else{
    document.querySelector("header").style.background="transparent";
  }
}

function reveal() {
  var reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;

    if (elementTop < windowHeight-200) {
      reveals[i].classList.add("anim");
    } else {
      reveals[i].classList.remove("anim");
    }
  }
}


