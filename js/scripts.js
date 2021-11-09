console.log("Hey There! Welcome to My Portfolio Site")
/* global $ */
/* eslint {no-undef: "error"} */

function menuToggle() {
  var x = document.getElementById('myNavtoggle');
/* eslint-disable-next-line no-unused-vars */
  if (x.className === 'navtoggle') {
    x.className += ' responsive';
  } else {
    x.className = 'navtoggle';
  }
  setTimeout(() => {getPage()}, 900);
}

function getPage() {
  let currentPage = window.location.href;

  let pageArray = currentPage.split("/");
  let pageArrayLength = pageArray.length;
  let targetPage = pageArray[pageArrayLength - 1];

  if (targetPage === "index.html") {
    $('#work-tab').addClass("underline-tab")
  }
  if (targetPage === "about.html") {
    $('#about-tab').addClass("underline-tab")
  }
  if (targetPage === "about.html#contact") {
    $('#contact-tab').addClass("underline-tab")
    $('#about-tab').removeClass("underline-tab")
    $('#work-tab').removeClass("underline-tab")
  }
  if (targetPage === "index.html#contact") {
    $('#contact-tab').addClass("underline-tab")
    $('#about-tab').removeClass("underline-tab")
    $('#work-tab').removeClass("underline-tab")
  }
  if (targetPage === "letsgo.html#contact") {
    $('#contact-tab').addClass("underline-tab")
    $('#about-tab').removeClass("underline-tab")
    $('#work-tab').removeClass("underline-tab")
  }
  if (targetPage === "jot.html#contact") {
    $('#contact-tab').addClass("underline-tab")
    $('#about-tab').removeClass("underline-tab")
    $('#work-tab').removeClass("underline-tab")
  }
}

$(document).ready(function() {
  getPage();

  $("a").on('click', function(event) {

    if (this.hash !== "") {
      event.preventDefault();

      var hash = this.hash;

      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function() {
        window.location.hash = hash;
      });
    }
  });
});
