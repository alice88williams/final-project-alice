$(document).ready(function(){

	$('#icons li').on('click', function(event){

		var currentItem = $(this);
		var target = currentItem.find('a').attr('href');

		//stop page jumping to the id of icons
		event.preventDefault();

		//check the presence of the active class
		if ( !$(currentItem).hasClass('active') ) {

			//add the active state to the current item
			$(currentItem).addClass('active').siblings().removeClass('active');
	
			//show just the target section
			$(target).show().siblings().hide();
			
			// reveal the section of articles
			$('#pop-up').slideDown( 2000 );

			//hide the welcome
			$('#site-welcome').hide();

		} else {

			// slide up the section of articles
			$('#pop-up').slideDown( 1000, function() {
			
				//remove the active state when sliding is finished
				$('#icons li').removeClass('active');

			} );

		}

	});

	$('#site-nav li').on('click', function(event){

		var currentItem = $(this);
		var target = currentItem.find('a').attr('href');

		//stop page jumping to the id of icons
		event.preventDefault();

		//check the presence of the active class
		if ( !$(currentItem).hasClass('active') ) {

			//add the active state to the current item
			$(currentItem).addClass('active').siblings().removeClass('active');
	
			//show just the target section
			$(target).show().siblings().hide();
			
			// reveal the section of articles
			$('#pop-up').slideDown( 2000 );

			//hide the welcome
			$('#site-welcome').hide();

		} else {

			// slide up the section of articles
			$('#pop-up').slideDown( 1000, function() {
			
				//remove the active state when sliding is finished
				$('#icons li').removeClass('active');

			} );

		}

	});

	// activate skills bar

	$(document).on("scroll", function () {
		$('.skillbar').each(function(){

			$(this).find('.skillbar-bar').animate({
				width:$(this).attr('data-percent')

			},8000);

		});
	});

	// open hamburger menu

	$('.menu').on('click', function(){

	  $(this).toggleClass('open');

	});

	// open navigation

	$('.menu').on('click', function(){

		$('.site-nav').slideToggle();

	});

	// remove and show logo

	$('.menu').on('click', function(){

		if ( $('#site-logo').hasClass("visible")) {

            	$('#site-logo').removeClass("visible").fadeOut("slow").addClass("hidden");

          	} else {

            	$('#site-logo').removeClass("hidden").fadeIn("slow").addClass("visible");
        }

    });

});






