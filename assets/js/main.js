(function ($) {
    "use strict";

jQuery(document).ready(function($){
	
	$(".easy-customize-carousel").owlCarousel({
		items:1,
		loop:true,
		nav:false,
		dots:true,
		autoplay:true,
		//animateOut: 'fadeOut',
        //animateIn: 'fadeIn'
		//navText:['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>']
		
	});
	
	
	
	//counterUp
	
	$(".counter-number").counterUp({
			delay: 10,
            time: 1000
			
		});
	//barfiller
		
	$('#bar1').barfiller({
		barColor:'#dd374d'
	});
	$('#bar2').barfiller({
		barColor:'#dd374d'
	});
	$('#bar3').barfiller({
		barColor:'#dd374d'
	});
	$('#bar4').barfiller({
		barColor:'#dd374d'
	});
	//barfiller end
	$(".portfolio-list li").on('click', function(){
			$(".portfolio-list li").removeClass("active");
			$(this).addClass("active");
			
			var selector = $(this).attr('data-filter');
			$(".project-list").isotope({
				filter: selector
				
			});
		});
	//tab	
		$(".what-we-do-tab .nav-tabs a").click(function(){
        $(this).tab('show');
    });
	//scrollTop	
			 $(window).on('scroll',function(){
				 if($(window).scrollTop()){
					 $('.hero-menu-area').addClass('black');
				 }
				 else{
					 $('.hero-menu-area').removeClass('black');
				 }
			 });
	//menu-icon			 
			 $(".menu").on("click",function(){ 
				 $(".main-menu ul").slideToggle('active');
				 
			 });
	
});



			jQuery(window).load(function($){
				
					jQuery(".project-list").isotope();
					document.getElementById("loading").style.display = "none"; 
				
			});
			
			
}(jQuery));	


