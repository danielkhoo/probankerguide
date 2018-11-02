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
	if (isScrolledIntoView("#section9")) { window.history.pushState("state", "title", "#section9"); return; }
});