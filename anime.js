$('#sec1_h1').toggleClass('animated bounceInDown');
$('#sec1_h2').toggleClass('animated bounceInLeft');

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
async function sec1() {
  $('#sec1_butt').toggleClass('animated bounceInLeft');
  await sleep(1000);
  $('#sec1_butt').toggleClass('animated bounceInLeft');
  $('#sec1_butt').toggleClass('animated pulse infinite');
}
sec1();
$("#sec1_butt").click(function() {
  $('html,body').animate({
      scrollTop: $(".section2").offset().top
    },
    'slow');
});

$(document).ready(function() {
	var oldId = null;

	$('.tabs-controls__link').click(function(e) {
		e.preventDefault();

		if ($(this).hasClass('tabs-controls__link--active')) {
			return false;
		}

		var currentId = parseInt($(this).data('id'), 10);
		$('.tabs-controls__link--active').removeClass('tabs-controls__link--active');
		$(this).addClass('tabs-controls__link--active');

		if (currentId < oldId) { // item is hidden
			var timing = $('.board.hidden').length * 100;
			$('.board').each(function(index) {
				if (index > (currentId - 1 ) || index == (currentId - 1)) {
					window.setTimeout(function() {
						$('.board').eq(index).removeClass('hidden');
					}, timing - (index * 100));
				}
			});
		} else {
			$('.board').each(function(index) {
				if (index < (currentId - 1)) {
					window.setTimeout(function() {
						$('.board').eq(index).addClass('hidden');
					}, index * 100);
				}
			});
		}

		oldId = currentId;
	});
});



//session keeper so animation happen once for import fields
var sec2_p1 = 1;
var sec2_vid1 = 1;

$('.overlay').click(function(){
  $('#sec2_vid1').removeClass('animated pulse infinite');
  $('#sec2_vid1div1').removeClass('overlay');
  sec2_vid1 = 0;

});

$(window).scroll(function() {
  if (isScrolledIntoView("#section2")) {
    $('#sec2_h1').addClass('animated bounceInLeft');

    $('#sec3_h1').removeClass('animated bounceInLeft');
    $('#sec4_h1').removeClass('animated bounceInLeft');
    $('#sec5_h1').removeClass('animated bounceInLeft');
    $('#sec6_h1').removeClass('animated bounceInLeft');
    $('#sec7_h1').removeClass('animated bounceInLeft');
    $('#sec8_h1').removeClass('animated bounceInLeft');
    if (sec2_p1 === 1) {
      $('#sec2_p1').textFx({
        type: 'fadeIn',
        iChar: 10,
        iAnim: '150'
        //Fades in
      });
      sec2_p1 = 0;
    }
    if (sec2_vid1 === 1) {
      $('#sec2_vid1').addClass('animated pulse infinite');
    }

    return;
  } else if (isScrolledIntoView("#section3")) {
    $('#sec2_h1').removeClass('animated bounceInLeft');
    $('#sec3_h1').addClass('animated bounceInLeft');
    $('#sec4_h1').removeClass('animated bounceInLeft');
    $('#sec5_h1').removeClass('animated bounceInLeft');
    $('#sec6_h1').removeClass('animated bounceInLeft');
    $('#sec7_h1').removeClass('animated bounceInLeft');
    $('#sec8_h1').removeClass('animated bounceInLeft');
    return;
  } else if (isScrolledIntoView("#section4")) {
    $('#sec2_h1').removeClass('animated bounceInLeft');
    $('#sec3_h1').removeClass('animated bounceInLeft');
    $('#sec4_h1').addClass('animated bounceInLeft');
    $('#sec5_h1').removeClass('animated bounceInLeft');
    $('#sec6_h1').removeClass('animated bounceInLeft');
    $('#sec7_h1').removeClass('animated bounceInLeft');
    $('#sec8_h1').removeClass('animated bounceInLeft');
    return;
  } else if (isScrolledIntoView("#section5")) {
    $('#sec2_h1').removeClass('animated bounceInLeft');
    $('#sec3_h1').removeClass('animated bounceInLeft');
    $('#sec4_h1').removeClass('animated bounceInLeft');
    $('#sec5_h1').addClass('animated bounceInLeft');
    $('#sec6_h1').removeClass('animated bounceInLeft');
    $('#sec7_h1').removeClass('animated bounceInLeft');
    $('#sec8_h1').removeClass('animated bounceInLeft');
    return;
  } else if (isScrolledIntoView("#section6")) {
    $('#sec2_h1').removeClass('animated bounceInLeft');
    $('#sec3_h1').removeClass('animated bounceInLeft');
    $('#sec4_h1').removeClass('animated bounceInLeft');
    $('#sec5_h1').removeClass('animated bounceInLeft');
    $('#sec6_h1').addClass('animated bounceInLeft');
    $('#sec7_h1').removeClass('animated bounceInLeft');
    $('#sec8_h1').removeClass('animated bounceInLeft');
    return;
  } else if (isScrolledIntoView("#section7")) {
    $('#sec2_h1').removeClass('animated bounceInLeft');
    $('#sec3_h1').removeClass('animated bounceInLeft');
    $('#sec4_h1').removeClass('animated bounceInLeft');
    $('#sec5_h1').removeClass('animated bounceInLeft');
    $('#sec6_h1').removeClass('animated bounceInLeft');
    $('#sec7_h1').addClass('animated bounceInLeft');
    $('#sec8_h1').removeClass('animated bounceInLeft');
    return;
  } else if (isScrolledIntoView("#section8")) {
    $('#sec2_h1').removeClass('animated bounceInLeft');
    $('#sec3_h1').removeClass('animated bounceInLeft');
    $('#sec4_h1').removeClass('animated bounceInLeft');
    $('#sec5_h1').removeClass('animated bounceInLeft');
    $('#sec6_h1').removeClass('animated bounceInLeft');
    $('#sec7_h1').removeClass('animated bounceInLeft');
    $('#sec8_h1').addClass('animated bounceInLeft');
    return;
  }else {
    $('#sec2_h1').removeClass('animated bounceInLeft');
    $('#sec3_h1').removeClass('animated bounceInLeft');
    $('#sec4_h1').removeClass('animated bounceInLeft');
    $('#sec5_h1').removeClass('animated bounceInLeft');
    $('#sec6_h1').removeClass('animated bounceInLeft');
    $('#sec7_h1').removeClass('animated bounceInLeft');
    $('#sec8_h1').removeClass('animated bounceInLeft');
  }


});
