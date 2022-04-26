// JavaScript Document

$(window).scroll(function() {
var scroll = $(window).scrollTop();

	 //>=, not <=
	if (scroll >= 100) {
			//clearHeader, not clearheader - caps H
			$(".brand-logo").addClass("header-logo");
			$(".navbar-toggler").addClass("header-toggler");
	} else {
		$(".brand-logo").removeClass("header-logo");
		$(".navbar-toggler").removeClass("header-toggler");
	}
}); //missing );

jQuery(document).ready(function($) {
	$(window).load(function(){
		$('#logo-loader').fadeOut('slow',function(){$(this).remove();});
	});
});

/*$(document).ready(function () {
		$(document).on("scroll", onScroll);

		$('a[href^="#"]').on('click', function (e) {
			e.preventDefault();
			$(document).off("scroll");

			$('a').each(function () {
				$(this).removeClass('active-nav');
			})
			$(this).addClass('active-nav');

			var target = this.hash;
			$target = $(target);
			$('html, body').stop().animate({
				'scrollTop': $target.offset().top + - $('.navbar').height()
			}, 500, 'swing', function () {
				window.location.hash = target;
				$(document).on("scroll", onScroll);
			});
		});
	});*/

	function onScroll(event){
		var scrollPosition = $(document).scrollTop();
		$('.navbar-right li a').each(function () {
			var currentLink = $(this);
			var refElement = $(currentLink.attr("href"));
			if (refElement.position().top + - $('.navbar').height() <= scrollPosition && refElement.position().top + refElement.height() > scrollPosition)
			{
				$('.navbar-right li a').removeClass("active-nav");
				currentLink.addClass("active-nav");
			}
			else{
				currentLink.removeClass("active-nav");
			}
		});
	}


//$('.navbar-brand').click(function(){
//	alert ('h');
//    $("html, body").animate({ scrollTop: 0 }, 600);
//    return false;
// });
