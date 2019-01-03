
$(function(){
      $(".typed").typed({
        strings: ["motivate yourself.", "stop wasting money.", "visualize your progress.", "keep your health on an upper level.", "get suppport from others."],
        typeSpeed: 1,
        loop: true,
        backDelay: 1000
      });
  });

  
  $('a.page-scroll').bind('click', function(event) {
    var $anchor = $(this);
    $('html, body').stop().animate({
        scrollTop:  ($($anchor.attr('href')).offset().top - 50)
    }, 1250, 'easeInOutExpo');
    event.preventDefault();
});