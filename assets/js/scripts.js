
jQuery(document).ready(function() {
	
    /*
        Fullscreen background
    
    $.backstretch("assets/img/backgrounds/babypink.png");
    */
    /*
        Wow
    */
    new WOW().init();
    
    /*
	    Countdown initializer
	*/
	var now = new Date();
	  $('.timer').countdown('2020-12-13 15:00', function(event) { 	  
		$(this).find('.days').text(event.strftime('%D'));
		$(this).find('.hours').text(event.strftime('%H'));
		$(this).find('.minutes').text(event.strftime('%M'));
		$(this).find('.seconds').text(event.strftime('%S')); 
  }); 
	
	/*
	    Subscription form
	*/
	$('.success-message').hide();
	$('.error-message').hide();
	
	$('.subscribe form').submit(function(e) {
		e.preventDefault();
	    var postdata = $('.subscribe form').serialize();
	    $.ajax({
	        type: 'POST',
	        url: 'assets/subscribe.php',
	        data: postdata,
	        dataType: 'json',
	        success: function(json) {
	            if(json.valid == 0) {
	                $('.success-message').hide();
	                $('.error-message').hide();
	                $('.error-message').html(json.message);
	                $('.error-message').fadeIn();
	            }
	            else {
	                $('.error-message').hide();
	                $('.success-message').hide();
	                $('.subscribe form').hide();
	                $('.success-message').html(json.message);
	                $('.success-message').fadeIn();
	            }
	        }
	    });
	});
    
});

