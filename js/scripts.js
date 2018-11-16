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

function openCity(evt, cityName) {
  // Declare all variables
  var i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the link that opened the tab
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}

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
  var nine_top = $('#section9').position().top;
  var demo_top = $('#sectionDemo').position().top;

	if (scroll_top > one_top - 100 && scroll_top < two_top - 100) {
		$('a[href="#section1"]').addClass('active');
		$('a[href="#section2"]').removeClass('active');
		$('a[href="#section3"]').removeClass('active');
		$('a[href="#section4"]').removeClass('active');
		$('a[href="#section5"]').removeClass('active');
		$('a[href="#section6"]').removeClass('active');
		$('a[href="#section7"]').removeClass('active');
		$('a[href="#section8"]').removeClass('active');
    $('a[href="#sectionDemo"]').removeClass('active');
		$('a[href="#section9"]').removeClass('active');
	} else if (scroll_top > two_top - 100 && scroll_top < three_top - 100) {
		$('a[href="#section1"]').removeClass('active');
		$('a[href="#section2"]').addClass('active');
		$('a[href="#section3"]').removeClass('active');
		$('a[href="#section4"]').removeClass('active');
		$('a[href="#section5"]').removeClass('active');
		$('a[href="#section6"]').removeClass('active');
		$('a[href="#section7"]').removeClass('active');
		$('a[href="#section8"]').removeClass('active');
    $('a[href="#sectionDemo"]').removeClass('active');
		$('a[href="#section9"]').removeClass('active');
    scrollSection2Animation();
	} else if (scroll_top > three_top - 100 && scroll_top < four_top - 100) {
		$('a[href="#section1"]').removeClass('active');
		$('a[href="#section2"]').removeClass('active');
		$('a[href="#section3"]').addClass('active');
		$('a[href="#section4"]').removeClass('active');
		$('a[href="#section5"]').removeClass('active');
		$('a[href="#section6"]').removeClass('active');
		$('a[href="#section7"]').removeClass('active');
		$('a[href="#section8"]').removeClass('active');
    $('a[href="#sectionDemo"]').removeClass('active');
		$('a[href="#section9"]').removeClass('active');
    scrollSection3Animation();
	} else if (scroll_top > four_top - 100 && scroll_top < five_top - 100) {
		$('a[href="#section1"]').removeClass('active');
		$('a[href="#section2"]').removeClass('active');
		$('a[href="#section3"]').removeClass('active');
		$('a[href="#section4"]').addClass('active');
		$('a[href="#section5"]').removeClass('active');
		$('a[href="#section6"]').removeClass('active');
		$('a[href="#section7"]').removeClass('active');
		$('a[href="#section8"]').removeClass('active');
    $('a[href="#sectionDemo"]').removeClass('active');
		$('a[href="#section9"]').removeClass('active');
    scrollSection4Animation();
	} else if (scroll_top > five_top - 100 && scroll_top < six_top - 100) {
		$('a[href="#section1"]').removeClass('active');
		$('a[href="#section2"]').removeClass('active');
		$('a[href="#section3"]').removeClass('active');
		$('a[href="#section4"]').removeClass('active');
		$('a[href="#section5"]').addClass('active');
		$('a[href="#section6"]').removeClass('active');
		$('a[href="#section7"]').removeClass('active');
		$('a[href="#section8"]').removeClass('active');
    $('a[href="#sectionDemo"]').removeClass('active');
		$('a[href="#section9"]').removeClass('active');
    scrollSection5Animation();
	} else if (scroll_top > six_top - 100 && scroll_top < seven_top - 100) {
		$('a[href="#section1"]').removeClass('active');
		$('a[href="#section2"]').removeClass('active');
		$('a[href="#section3"]').removeClass('active');
		$('a[href="#section4"]').removeClass('active');
		$('a[href="#section5"]').removeClass('active');
		$('a[href="#section6"]').addClass('active');
		$('a[href="#section7"]').removeClass('active');
		$('a[href="#section8"]').removeClass('active');
    $('a[href="#sectionDemo"]').removeClass('active');
		$('a[href="#section9"]').removeClass('active');
    scrollSection6Animation();
	} else if (scroll_top > seven_top - 100 && scroll_top < eight_top - 100) {
		$('a[href="#section1"]').removeClass('active');
		$('a[href="#section2"]').removeClass('active');
		$('a[href="#section3"]').removeClass('active');
		$('a[href="#section4"]').removeClass('active');
		$('a[href="#section5"]').removeClass('active');
		$('a[href="#section6"]').removeClass('active');
		$('a[href="#section7"]').addClass('active');
		$('a[href="#section8"]').removeClass('active');
    $('a[href="#sectionDemo"]').removeClass('active');
		$('a[href="#section9"]').removeClass('active');
    scrollSection7Animation();
	} else if (scroll_top > eight_top - 100 && scroll_top < nine_top - 100) {
		$('a[href="#section1"]').removeClass('active');
		$('a[href="#section2"]').removeClass('active');
		$('a[href="#section3"]').removeClass('active');
		$('a[href="#section4"]').removeClass('active');
		$('a[href="#section5"]').removeClass('active');
		$('a[href="#section6"]').removeClass('active');
		$('a[href="#section7"]').removeClass('active');
		$('a[href="#section8"]').addClass('active');
    $('a[href="#sectionDemo"]').removeClass('active');
		$('a[href="#section9"]').removeClass('active');
    scrollSection8Animation();
	} else if (scroll_top > nine_top - 100 && scroll_top < demo_top - 100) {
		$('a[href="#section1"]').removeClass('active');
		$('a[href="#section2"]').removeClass('active');
		$('a[href="#section3"]').removeClass('active');
		$('a[href="#section4"]').removeClass('active');
		$('a[href="#section5"]').removeClass('active');
		$('a[href="#section6"]').removeClass('active');
		$('a[href="#section7"]').removeClass('active');
		$('a[href="#section8"]').removeClass('active');
    $('a[href="#sectionDemo"]').addClass('active');
		$('a[href="#section9"]').removeClass('active');
	} else if (scroll_top > demo_top - 100) {
		$('a[href="#section1"]').removeClass('active');
		$('a[href="#section2"]').removeClass('active');
		$('a[href="#section3"]').removeClass('active');
		$('a[href="#section4"]').removeClass('active');
		$('a[href="#section5"]').removeClass('active');
		$('a[href="#section6"]').removeClass('active');
		$('a[href="#section7"]').removeClass('active');
		$('a[href="#section8"]').removeClass('active');
    $('a[href="#sectionDemo"]').removeClass('active');
		$('a[href="#section9"]').addClass('active');
    scrollSection9Animation();
	}

});


//session keeper so animation happen once for import fields
var sec2_p1 = 1;
var sec2_vid1 = 1;
var sec4_p1 = 1;
var sec4_vid1 = 1;
var sec7_p1 = 1;
var sec7_vid1 = 1;


$('.sec2_vid1overlay').click(function(){
  $('#sec2_vid1').removeClass('animated pulse infinite');
  $('#sec2_vid1div1').removeClass('sec2_vid1overlay');
  sec2_vid1 = 0;

});
$('.sec4_vid1overlay').click(function(){
  $('#sec4_vid1').removeClass('animated pulse infinite');
  $('#sec4_vid1div1').removeClass('sec4_vid1overlay');
  sec4_vid1 = 0;

});

$('.sec7_vid1overlay').click(function(){
  $('#sec7_vid1').removeClass('animated pulse infinite');
  $('#sec7_vid1div1').removeClass('sec7_vid1overlay');
  sec7_vid1 = 0;

});

function scrollSection2Animation(){
  $('#sec2_h1').addClass('animated bounceInLeft');
  $('#sec3_h1').removeClass('animated bounceInLeft');
  $('#sec4_h1').removeClass('animated bounceInLeft');
  $('#sec5_h1').removeClass('animated bounceInLeft');
  $('#sec6_h1').removeClass('animated bounceInLeft');
  $('#sec7_h1').removeClass('animated bounceInLeft');
  $('#sec8_h1').removeClass('animated bounceInLeft');
  $('#sec9_h1').removeClass('animated bounceInLeft');
  if (sec2_vid1 === 1) {
    $('#sec2_vid1').addClass('animated pulse infinite');
  }
}
function scrollSection3Animation(){
  $('#sec2_h1').removeClass('animated bounceInLeft');
  $('#sec3_h1').addClass('animated bounceInLeft');
  $('#sec4_h1').removeClass('animated bounceInLeft');
  $('#sec5_h1').removeClass('animated bounceInLeft');
  $('#sec6_h1').removeClass('animated bounceInLeft');
  $('#sec7_h1').removeClass('animated bounceInLeft');
  $('#sec8_h1').removeClass('animated bounceInLeft');
  $('#sec9_h1').removeClass('animated bounceInLeft');
}
function scrollSection4Animation(){
  $('#sec2_h1').removeClass('animated bounceInLeft');
  $('#sec3_h1').removeClass('animated bounceInLeft');
  $('#sec4_h1').addClass('animated bounceInLeft');
  $('#sec5_h1').removeClass('animated bounceInLeft');
  $('#sec6_h1').removeClass('animated bounceInLeft');
  $('#sec7_h1').removeClass('animated bounceInLeft');
  $('#sec8_h1').removeClass('animated bounceInLeft');
  $('#sec9_h1').removeClass('animated bounceInLeft');
  if (sec4_vid1 === 1) {
    $('#sec4_vid1').addClass('animated pulse infinite');
  }
}
function scrollSection5Animation(){
  $('#sec2_h1').removeClass('animated bounceInLeft');
  $('#sec3_h1').removeClass('animated bounceInLeft');
  $('#sec4_h1').removeClass('animated bounceInLeft');
  $('#sec5_h1').addClass('animated bounceInLeft');
  $('#sec6_h1').removeClass('animated bounceInLeft');
  $('#sec7_h1').removeClass('animated bounceInLeft');
  $('#sec8_h1').removeClass('animated bounceInLeft');
  $('#sec9_h1').removeClass('animated bounceInLeft');

  $('#sec5_card1').addClass('animated bounce');
  $('#sec5_card2').addClass('animated bounce');
}
function scrollSection6Animation(){
  $('#sec2_h1').removeClass('animated bounceInLeft');
  $('#sec3_h1').removeClass('animated bounceInLeft');
  $('#sec4_h1').removeClass('animated bounceInLeft');
  $('#sec5_h1').removeClass('animated bounceInLeft');
  $('#sec6_h1').addClass('animated bounceInLeft');
  $('#sec7_h1').removeClass('animated bounceInLeft');
  $('#sec8_h1').removeClass('animated bounceInLeft');
  $('#sec9_h1').removeClass('animated bounceInLeft');
}
function scrollSection7Animation(){
  $('#sec2_h1').removeClass('animated bounceInLeft');
  $('#sec3_h1').removeClass('animated bounceInLeft');
  $('#sec4_h1').removeClass('animated bounceInLeft');
  $('#sec5_h1').removeClass('animated bounceInLeft');
  $('#sec6_h1').removeClass('animated bounceInLeft');
  $('#sec7_h1').addClass('animated bounceInLeft');
  $('#sec8_h1').removeClass('animated bounceInLeft');
  $('#sec9_h1').removeClass('animated bounceInLeft');
  if (sec7_vid1 === 1) {
    $('#sec7_vid1').addClass('animated pulse infinite');
  }
}
function scrollSection8Animation(){
  $('#sec2_h1').removeClass('animated bounceInLeft');
  $('#sec3_h1').removeClass('animated bounceInLeft');
  $('#sec4_h1').removeClass('animated bounceInLeft');
  $('#sec5_h1').removeClass('animated bounceInLeft');
  $('#sec6_h1').removeClass('animated bounceInLeft');
  $('#sec7_h1').removeClass('animated bounceInLeft');
  $('#sec8_h1').addClass('animated bounceInLeft');
  $('#sec9_h1').removeClass('animated bounceInLeft');
}
function scrollSection9Animation(){
  $('#sec2_h1').removeClass('animated bounceInLeft');
  $('#sec3_h1').removeClass('animated bounceInLeft');
  $('#sec4_h1').removeClass('animated bounceInLeft');
  $('#sec5_h1').removeClass('animated bounceInLeft');
  $('#sec6_h1').removeClass('animated bounceInLeft');
  $('#sec7_h1').removeClass('animated bounceInLeft');
  $('#sec8_h1').removeClass('animated bounceInLeft');
  $('#sec9_h1').addClass('animated bounceInLeft');
}
