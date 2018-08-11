//The following is used to keep the nav bar stickied to the top of the page when scrolling
//when the user scrolls run this function
window.onscroll = function(){navSticky()};

//get the navbar
let navbar = document.getElementById('navigation');

//get position of navbar
let sticky = navbar.offsetTop;

//add the sticky class to navbar when scroll position is reached
function navSticky() {
  if(window.pageYOffset >= sticky){
    navbar.classList.add('sticky')
  } else {
    navbar.classList.remove('sticky');
  }
}
