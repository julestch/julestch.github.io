'use strict';

$(document).ready( function(){

	console.log($('navigation__close').fadeIn(2000));

 
	// // $( '#jardin_carousel' ).carousel({
		
	// // 	interval:5000,
	// // 	cycle:true

	// // });

 //  $('#flyer_menu').find('a').colorbox({

 //    'rel':'gal',
 //    'maxWidth':'90%',
 //    'opacity':.7,
 //    'transition':'fade',
 //    'scalePhotos':trues

 //  });
  
	// // $('a').colorbox({
	// //     href: function() { return $(this).attr('href') + ' #somediv'; }
	// // });

 //  } );

	  // End manage rwd css


	  

   

		var repere_menu = 140;

	$("a[href^='#']").click(function(e){  
		
		var pos = $(this.hash).offset().top - repere_menu;
		var refmenu = $(this).parent().parent().parent();
		var ref_navigation_nav = $(refmenu).parent();


		$(refmenu).find('a').removeClass('selected');
	  
		$(this).addClass('selected');

		//console.log($(refmenu).parent().fadeOut(1000));
		

		$('body, html').stop().animate({ scrollTop:pos }, 1500);
			e.preventDefault();

		// console.log($(refmenu).parent().fadeIn(8000));  
	})
			
} );













// $( function(){

//   var mnEcran = $( window );

//   if( (mnEcran.scrollTop()) === '300'){
//       // jQuery('#ges_footer').find('.go_to').css(display:visible);
//       console.log($('#ges_footer').find('.go_to'));
//     };
// });








/* =============   LAZYLOAD ========= */


document.addEventListener("DOMContentLoaded", function() {

	var ll = new LazyLoad({
					elements_selector: ".lazy"
				});

  var lazyBackgrounds = [].slice.call(document.querySelectorAll(".lazy-background"));

  // console.log(lazyBackgrounds);

  if ("IntersectionObserver" in window && "IntersectionObserverEntry" in window && "intersectionRatio" in window.IntersectionObserverEntry.prototype) {
    let lazyBackgroundObserver = new IntersectionObserver(function(entries, observer) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          lazyBackgroundObserver.unobserve(entry.target);
        }
      });
    });

    lazyBackgrounds.forEach(function(lazyBackground) {
      lazyBackgroundObserver.observe(lazyBackground);
    });
  }
});



