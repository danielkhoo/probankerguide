// When the user scrolls the page, execute myFunction 
window.onscroll = function() {myFunction()};

function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
}

function isScrolledIntoView(elem)
{
    var $elem = $(elem);
    var $window = $(window);

    var docViewTop = $window.scrollTop();
    var docViewBottom = docViewTop + $window.height();

    var elemTop = $elem.offset().top;
    var elemBottom = elemTop + $elem.height();

    return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
}

$(window).scroll(function() {
  	if (isScrolledIntoView("#section1")) { window.history.pushState("state", "title", "#section1"); return;	}
  	if (isScrolledIntoView("#section2")) { window.history.pushState("state", "title", "#section2");	return; }
  	if (isScrolledIntoView("#section3")) { window.history.pushState("state", "title", "#section3");	return; }
  	if (isScrolledIntoView("#section4")) { window.history.pushState("state", "title", "#section4"); return; }
	if (isScrolledIntoView("#section5")) { window.history.pushState("state", "title", "#section5"); return; }
  	if (isScrolledIntoView("#section6")) { window.history.pushState("state", "title", "#section6"); return; }
  	if (isScrolledIntoView("#section7")) { window.history.pushState("state", "title", "#section7"); return; }
  	if (isScrolledIntoView("#section8")) { window.history.pushState("state", "title", "#section8"); return; }
});

$(document).scroll(function () {

    var scroll_top = $(document).scrollTop();
    var one_top = $('#section1').position().top;
    var two_top = $('#section2').position().top;
	var three_top = $('#section3').position().top;
    var four_top = $('#section4').position().top;
	var five_top = $('#section5').position().top;
    var six_top = $('#section6').position().top;
	var seven_top = $('#section7').position().top;
    var eight_top = $('#section8').position().top;

    if (scroll_top > one_top && scroll_top < two_top - 100) {
        $('a[href="#section1"]').addClass('active');
		$('a[href="#section2"]').removeClass('active');
		$('a[href="#section3"]').removeClass('active');
		$('a[href="#section4"]').removeClass('active');
		$('a[href="#section5"]').removeClass('active');
		$('a[href="#section6"]').removeClass('active');
		$('a[href="#section7"]').removeClass('active');
		$('a[href="#section8"]').removeClass('active');
    } else if (scroll_top > two_top - 100 && scroll_top < three_top - 100) {
		$('a[href="#section1"]').removeClass('active');
		$('a[href="#section2"]').addClass('active');
		$('a[href="#section3"]').removeClass('active');
		$('a[href="#section4"]').removeClass('active');
		$('a[href="#section5"]').removeClass('active');
		$('a[href="#section6"]').removeClass('active');
		$('a[href="#section7"]').removeClass('active');
		$('a[href="#section8"]').removeClass('active');
	} else if (scroll_top > three_top - 100 && scroll_top < four_top - 100) {
		$('a[href="#section1"]').removeClass('active');
		$('a[href="#section2"]').removeClass('active');
		$('a[href="#section3"]').addClass('active');
		$('a[href="#section4"]').removeClass('active');
		$('a[href="#section5"]').removeClass('active');
		$('a[href="#section6"]').removeClass('active');
		$('a[href="#section7"]').removeClass('active');
		$('a[href="#section8"]').removeClass('active');
	} else if (scroll_top > four_top - 100 && scroll_top < five_top - 100) {
		$('a[href="#section1"]').removeClass('active');
		$('a[href="#section2"]').removeClass('active');
		$('a[href="#section3"]').removeClass('active');
		$('a[href="#section4"]').addClass('active');
		$('a[href="#section5"]').removeClass('active');
		$('a[href="#section6"]').removeClass('active');
		$('a[href="#section7"]').removeClass('active');
		$('a[href="#section8"]').removeClass('active');
	} else if (scroll_top > five_top - 100 && scroll_top < six_top - 100) {
		$('a[href="#section1"]').removeClass('active');
		$('a[href="#section2"]').removeClass('active');
		$('a[href="#section3"]').removeClass('active');
		$('a[href="#section4"]').removeClass('active');
		$('a[href="#section5"]').addClass('active');
		$('a[href="#section6"]').removeClass('active');
		$('a[href="#section7"]').removeClass('active');
		$('a[href="#section8"]').removeClass('active');
	} else if (scroll_top > six_top - 100 && scroll_top < seven_top - 100) {
		$('a[href="#section1"]').removeClass('active');
		$('a[href="#section2"]').removeClass('active');
		$('a[href="#section3"]').removeClass('active');
		$('a[href="#section4"]').removeClass('active');
		$('a[href="#section5"]').removeClass('active');
		$('a[href="#section6"]').addClass('active');
		$('a[href="#section7"]').removeClass('active');
		$('a[href="#section8"]').removeClass('active');
	} else if (scroll_top > seven_top - 100 && scroll_top < eight_top - 100) {
		$('a[href="#section1"]').removeClass('active');
		$('a[href="#section2"]').removeClass('active');
		$('a[href="#section3"]').removeClass('active');
		$('a[href="#section4"]').removeClass('active');
		$('a[href="#section5"]').removeClass('active');
		$('a[href="#section6"]').removeClass('active');
		$('a[href="#section7"]').addClass('active');
		$('a[href="#section8"]').removeClass('active');
	} else if (scroll_top > eight_top - 100) {
		$('a[href="#section1"]').removeClass('active');
		$('a[href="#section2"]').removeClass('active');
		$('a[href="#section3"]').removeClass('active');
		$('a[href="#section4"]').removeClass('active');
		$('a[href="#section5"]').removeClass('active');
		$('a[href="#section6"]').removeClass('active');
		$('a[href="#section7"]').removeClass('active');
		$('a[href="#section8"]').addClass('active');
	} 

});