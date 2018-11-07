$('#sec1_h1').toggleClass('animated bounceInDown');
$('#sec1_h2').toggleClass('animated bounceInLeft');
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
 async function demo() {
   $('#sec1_butt').toggleClass('animated bounceInLeft');
   await sleep(2000);
   $('#sec1_butt').toggleClass('animated bounceInLeft');
    $('#sec1_butt').toggleClass('animated pulse infinite');
 }
demo();




$(window).scroll(function() {

  if (isScrolledIntoView("#section1")) {



     return;
   }

  	if (isScrolledIntoView("#section2")) {

      anime({
        targets: document.getElementById('section2'),
        easing: 'easeOutExpo',
        loop: false
      });

       return;
     }

});
