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

function assetsLable(){
  $("#section_assetarrow").attr("src", "img/greenup.png");
  $("#section_liabilityarrow").attr("src", "img/greendown.png");
}

function liabilityLable(){
  $("#section_assetarrow").attr("src", "img/reddown.png");
  $("#section_liabilityarrow").attr("src", "img/redup.png");
}


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
