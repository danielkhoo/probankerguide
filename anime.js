$(window).scroll(function() {

  	if (isScrolledIntoView("#section2")) {

      anime({
        targets: document.getElementById('section2'),
        easing: 'easeOutExpo',
        loop: false
      });

       return;
     }

});
