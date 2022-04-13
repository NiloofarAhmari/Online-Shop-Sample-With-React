
//sticky-nav
$(window).scroll(function () {
  if ($(window).scrollTop()) {
    $("#navbar").addClass("nav-sticky");
  } else {
    $("#navbar").removeClass("nav-sticky");
  }
});
//wow
new WOW().init();
//collection carousel

$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})

$(function () {
  $(".openbtn").click(function () {
    $("#mySidenav").css("width", "250px");
    $(".overlay").addClass("active");
  });
  $(".closebtn , .overlay").click(function () {
    $("#mySidenav").css("width", "0");
    $(".overlay").removeClass("active");
  });
});



$('.owl-carousel').owlCarousel({


  autoplay: true,
  dots: false,
  rtl: true,
  loop: true,
  nav: true,
  navText: [
    '<i class="fa fa-angle-right" aria-hidden="true"></i>',
    '<i class="fa fa-angle-left" aria-hidden="true"></i>'
  ],
  responsive: {
    0: {
      items: 1
    },
    576: {
      items: 2
    },
    768: {
      items: 2
    },
    992: {
      items: 3
    }
  }

});

// Back to top button
$(window).scroll(function () {
  if ($(this).scrollTop() > 200) {
    $('.back-to-top').fadeIn('slow');
  } else {
    $('.back-to-top').fadeOut('slow');
  }
});
$('.back-to-top').each(function () {
  $(this).click(function () {
    $('html').animate({ scrollTop: 0 }, 'slow'); return true;
  });
});


