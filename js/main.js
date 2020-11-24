$(document).ready(function(){


    $(window).scroll(function(){
        if($(this).scrollTop()>300){
            document.querySelector('.gototop').style.visibility = "visible";
            $('.gototop').fadeIn();
        }else{
            $('.gototop').fadeOut(); 
        }
    });

    $('.gototop').click(function(){
        $('html, body').animate({scrollTop:0}, 1000)
    })

    // Smooth scroll for the navigation menu and links with .scrollto classes
		 // Select all links with hashes
		$('a[href*="#"]')
		// Remove links that don't actually link to anything
		.not('[href="#"]')
		.not('[href="#0"]')
		.click(function(event) {
		  // On-page links
		  if (
			location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
			&& 
			location.hostname == this.hostname
		  ) {
			// Figure out element to scroll to
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
			// Does a scroll target exist?
			if (target.length) {
			  // Only prevent default if animation is actually gonna happen
			  event.preventDefault();
			  $('html, body').animate({
				scrollTop: target.offset().top
			  }, 1600, function() {
				// Callback after animation
				// Must change focus!
				var $target = $(target);
				$target.focus();
				if ($target.is(":focus")) { // Checking if the target was focused
				  return false;
				} else {
				  $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
				  $target.focus(); // Set focus again
				};
			  });
			}
		  }
        });

      
        

        // owl carousel function call
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        dots:true,
        responsive:{
            0:{
                items:1,
            },
            700:{
                items:1,
            },
            1024:{
                items:1,
            }
        }
    });



    // data filter for portfolio
    $(".portfolio-btn").click(function(){
        var value = $(this).attr('data-filter');

        if( value == "all"){
            $('.filter').fadeIn(1000);
        }else{
            $('.filter').not('.'+value).hide(700);
            $('.filter').filter('.'+value).show(700);
        }
    });

    $('.port-btn-all').addClass('activePort');
    $('.portfolio-btn').on('click', function() {
        $(".portfolio-btn").removeClass('activePort');
        $(this).addClass('activePort');
      });

      // skills circular proggrass bar
      $('.test').circleProgress({ 
        value: 0.6,
        fill: "#643a79"
      }).on('circle-animation-progress', function(event, progress) {
        $(this).find('strong').html(Math.round(60 * progress) + '<i>%</i>');
      });
    $('.html').circleProgress({
        value: 0.95,
        fill: "darkred"
      }).on('circle-animation-progress', function(event, progress) {
        $(this).find('strong').html(Math.round(95 * progress) + '<i>%</i>');
      });
    $('.gd').circleProgress({
        value: 0.75,
        fill: "darkorange"
      }).on('circle-animation-progress', function(event, progress) {
        $(this).find('strong').html(Math.round(75 * progress) + '<i>%</i>');
      });
    $('.ui').circleProgress({
        value: 0.63,
        fill: "green"
      }).on('circle-animation-progress', function(event, progress) {
        $(this).find('strong').html(Math.round(63 * progress) + '<i>%</i>');
      });

      
    

});
