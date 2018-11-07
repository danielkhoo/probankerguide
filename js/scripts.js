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
	if (isScrolledIntoView("#section1")) { window.history.pushState("state", "title", "#start"); return;	}
	if (isScrolledIntoView("#section2")) { window.history.pushState("state", "title", "#welcome"); return; }
	if (isScrolledIntoView("#section3")) { window.history.pushState("state", "title", "#gameplay"); return; }
	if (isScrolledIntoView("#section4")) { window.history.pushState("state", "title", "#learning"); return; }
	if (isScrolledIntoView("#section5")) { window.history.pushState("state", "title", "#gamemodes"); return; }
	if (isScrolledIntoView("#section6")) { window.history.pushState("state", "title", "#decisions"); return; }
	if (isScrolledIntoView("#section7")) { window.history.pushState("state", "title", "#teamwork"); return; }
	if (isScrolledIntoView("#section8")) { window.history.pushState("state", "title", "#balancesheet"); return; }
	if (isScrolledIntoView("#section9")) { window.history.pushState("state", "title", "#notes"); return; }

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

	if (scroll_top > one_top - 100 && scroll_top < two_top - 100) {
		$('a[href="#section1"]').addClass('active');
		$('a[href="#section2"]').removeClass('active');
		$('a[href="#section3"]').removeClass('active');
		$('a[href="#section4"]').removeClass('active');
		$('a[href="#section5"]').removeClass('active');
		$('a[href="#section6"]').removeClass('active');
		$('a[href="#section7"]').removeClass('active');
		$('a[href="#section8"]').removeClass('active');
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
		$('a[href="#section9"]').removeClass('active');
	} else if (scroll_top > three_top - 100 && scroll_top < four_top - 100) {
		$('a[href="#section1"]').removeClass('active');
		$('a[href="#section2"]').removeClass('active');
		$('a[href="#section3"]').addClass('active');
		$('a[href="#section4"]').removeClass('active');
		$('a[href="#section5"]').removeClass('active');
		$('a[href="#section6"]').removeClass('active');
		$('a[href="#section7"]').removeClass('active');
		$('a[href="#section8"]').removeClass('active');
		$('a[href="#section9"]').removeClass('active');
	} else if (scroll_top > four_top - 100 && scroll_top < five_top - 100) {
		$('a[href="#section1"]').removeClass('active');
		$('a[href="#section2"]').removeClass('active');
		$('a[href="#section3"]').removeClass('active');
		$('a[href="#section4"]').addClass('active');
		$('a[href="#section5"]').removeClass('active');
		$('a[href="#section6"]').removeClass('active');
		$('a[href="#section7"]').removeClass('active');
		$('a[href="#section8"]').removeClass('active');
		$('a[href="#section9"]').removeClass('active');
	} else if (scroll_top > five_top - 100 && scroll_top < six_top - 100) {
		$('a[href="#section1"]').removeClass('active');
		$('a[href="#section2"]').removeClass('active');
		$('a[href="#section3"]').removeClass('active');
		$('a[href="#section4"]').removeClass('active');
		$('a[href="#section5"]').addClass('active');
		$('a[href="#section6"]').removeClass('active');
		$('a[href="#section7"]').removeClass('active');
		$('a[href="#section8"]').removeClass('active');
		$('a[href="#section9"]').removeClass('active');
	} else if (scroll_top > six_top - 100 && scroll_top < seven_top - 100) {
		$('a[href="#section1"]').removeClass('active');
		$('a[href="#section2"]').removeClass('active');
		$('a[href="#section3"]').removeClass('active');
		$('a[href="#section4"]').removeClass('active');
		$('a[href="#section5"]').removeClass('active');
		$('a[href="#section6"]').addClass('active');
		$('a[href="#section7"]').removeClass('active');
		$('a[href="#section8"]').removeClass('active');
		$('a[href="#section9"]').removeClass('active');
	} else if (scroll_top > seven_top - 100 && scroll_top < eight_top - 100) {
		$('a[href="#section1"]').removeClass('active');
		$('a[href="#section2"]').removeClass('active');
		$('a[href="#section3"]').removeClass('active');
		$('a[href="#section4"]').removeClass('active');
		$('a[href="#section5"]').removeClass('active');
		$('a[href="#section6"]').removeClass('active');
		$('a[href="#section7"]').addClass('active');
		$('a[href="#section8"]').removeClass('active');
		$('a[href="#section9"]').removeClass('active');
	} else if (scroll_top > eight_top - 100 && scroll_top < nine_top - 100) {
		$('a[href="#section1"]').removeClass('active');
		$('a[href="#section2"]').removeClass('active');
		$('a[href="#section3"]').removeClass('active');
		$('a[href="#section4"]').removeClass('active');
		$('a[href="#section5"]').removeClass('active');
		$('a[href="#section6"]').removeClass('active');
		$('a[href="#section7"]').removeClass('active');
		$('a[href="#section8"]').addClass('active');
		$('a[href="#section9"]').removeClass('active');
	} else if (scroll_top > nine_top - 100) {
		$('a[href="#section1"]').removeClass('active');
		$('a[href="#section2"]').removeClass('active');
		$('a[href="#section3"]').removeClass('active');
		$('a[href="#section4"]').removeClass('active');
		$('a[href="#section5"]').removeClass('active');
		$('a[href="#section6"]').removeClass('active');
		$('a[href="#section7"]').removeClass('active');
		$('a[href="#section8"]').removeClass('active');
		$('a[href="#section9"]').addClass('active');
	}

});
