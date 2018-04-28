
$(document).ready(function() {
    setInterval ('cursorAnimation()', 800);
    $(document).on("scroll", onScroll);

    //Scroll annimation
    $('a[href^="#"]').on('click',function(e) {
        e.preventDefault();
        var target = this.hash;
        var $target = $(target);
        $('html, body').animate({
          'scrollTop': $target.offset().top
        }, 500,'swing');
    });
});

$('.nav.navbar-nav > li').on('click', function(e) {
    $('.nav.navbar-nav > li').removeClass('active');
    $(this).addClass('active');
});

// Active navbar section
function onScroll(event){
  var scrollPos = $(document).scrollTop();
  $('#navbarResponsive a').each(function () {
    var currLink = $(this);
    var refElement = $(currLink.attr("href"));
    if (refElement.position().top <= scrollPos + 0) {
      $('#navbarResponsive ul li a').removeClass("active");
      currLink.addClass("active");
    } else{
      currLink.removeClass("active");
    }
  });
}

// Scrolling effect
$(window).on("scroll", function() {
  if($(window).scrollTop() > 20) {
    $('nav').addClass('black');
  } else {
    $('nav').removeClass('black');
  }
})
