$( document ).ready( function(){
	$('.slider').jcarousel({
		auto: 5,
		scroll: 1,
		wrap: 'both',
		initCallback: mycarousel_initCallback,
		itemVisibleInCallback: mycarousel_itemVisibleInCallback
	})
	
	/* Left-Right Slide bar scrolling */
	var stopHeight = "98px";
	var sticky_left = $('#sticky_left');
	var sticky_right = $("#sticky_right");
	
	function isScrolledTo(elem) {
		var docViewTop = $(window).scrollTop(); //num of pixels hidden above current screen
		var docViewBottom = docViewTop + $(window).height();
		var elemTop = $(elem).offset().top; //num of pixels above the elem
		var elemBottom = elemTop + $(elem).height();
		return ((elemTop <= docViewTop));
	}
	
	$(window).scroll(function() {
		if(isScrolledTo(sticky_left)) {
			sticky_left.css('position','fixed');
			sticky_left.css('top',stopHeight);
		}
		if(isScrolledTo(sticky_right)) {
			sticky_right.css( {'width': '178px', 'height': '365px'} );
			sticky_right.css('top',stopHeight);
			sticky_right.css('position','fixed');
		}
		if ( stopHeight > sticky_left.offset().top) {
			sticky_left.css('position','absolute');
			sticky_left.css('top',stopHeight);
		}
		if ( stopHeight > sticky_right.offset().top) {
			sticky_right.css('top',stopHeight);
			sticky_right.css('position','absolute');
		}
	});
	
});
function mycarousel_initCallback(carousel) {
	$("#slider-nav ul li a").bind("click", function() {
		var index = $(this).attr("id").split("_");
		carousel.scroll($.jcarousel.intval($(this).text()));
		$("#slider-nav ul li a").removeClass("active"); 
		$(this).addClass("active");
        return false;	
	});
};
function mycarousel_itemVisibleInCallback(carousel, item, index, state) { 
	$('#slider-nav ul li a').removeClass('active');
	$('#slider-nav ul li a').each(function() {
		var rel = $(this).text();
		if (rel == index) {
			$(this).addClass('active');
		};
	})
 }

/* GoogleAnalyticsObject */
(function(i,s,o,g,r,a,m){
	i['GoogleAnalyticsObject']=r;
	i[r]=i[r]||function(){
		(i[r].q=i[r].q||[]).push(arguments)
	},
	i[r].l=1*new Date();a=s.createElement(o),
	m=s.getElementsByTagName(o)[0];
	a.async=1;
	a.src=g;
	m.parentNode.insertBefore(a,m)
})(window,document,'script','/js/analytics.js','ga');

ga('create', 'UA-40620505-1', 'rdintelora.com');
ga('send', 'pageview');

var _gaq = _gaq || [];
_gaq.push(['_setAccount', 'UA-40620505-1']);
_gaq.push(['_setDomainName', 'rdintelora.com']);
_gaq.push(['_trackPageview']);

(function() {
  var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
  ga.src = '/js/ga.js';
  var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
})();

/* Twitter script code */
/*
! function (d, s, id) {
	var js, fjs = d.getElementsByTagName(s)[0];
	if (!d.getElementById(id)) {
		js = d.createElement(s);
		js.id = id;
		js.src = "./widgets.js";
		fjs.parentNode.insertBefore(js, fjs);
	}
}(document, "script", "twitter-wjs");
*/

/* Facebook script code render for Like. */
function renderFbLike() {
	var parent = document.getElementById('fblikediv');
	var child = document.getElementById('fblikeimg');
	parent.removeChild(child);
	var html2 = "<iframe src=\"http://www.facebook.com/plugins/like.php?href=http%3A%2F%2Fwww.facebook.com%2Fpages%2FPeacock-Crest-Technology-Corporation-Pvt-Ltd%2F455317747882823&send=false&layout=box_count&width=150&show_faces=false&action=like&colorscheme=light&font=trebuchet+ms&height=80&appId=258346014244946\" scrolling=\"no\" frameborder=\"0\" style=\"border: medium none; overflow: hidden; width: 60px; height: 62px;\" allowTransparency=\"true\"></iframe>";
	document.getElementById('fblikediv').innerHTML = html2;
}

/* Google + script code render for +1. */
function renderPlusone() {
	gapi.plusone.render("plusone-div", {"size": "tall", "annotation": "bubble", "href": "https://plus.google.com/112870249174969713507" });
}