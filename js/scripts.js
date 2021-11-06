console.log("Hey There! Welcome to My Portfolio Site")

let currentPage = window.location.href;

function menuToggle() {
  var x = document.getElementById('myNavtoggle');
  if (x.className === 'navtoggle') {
    x.className += ' responsive';
  } else {
    x.className = 'navtoggle';
  }
  getPage();
}

function getPage() {
  currentPage = window.location.href;
  $('#work-tab').removeClass("underline-tab")
  $('#about-tab').removeClass("underline-tab")
  $('#contact-tab').addClass("underline-tab")
}

$(document).ready(function() {
  let pageArray = currentPage.split("/");
  let pageArrayLength = pageArray.length;
  let targetPage = pageArray[pageArrayLength - 1];

  if (targetPage === "index.html") {
    $('#work-tab').addClass("underline-tab")
  }
  if (targetPage === "about.html") {
    $('#about-tab').addClass("underline-tab")
  }

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
