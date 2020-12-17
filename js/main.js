//load
$(window).on('load', function () {
	$('#preloader').delay(700).fadeToggle(500);
	$('.header__text').attr('data-aos', 'fade-up');
	
});
$(window).on('load', function () {
	function anims() {
	  $('.start-anim').addClass('anim');
	  
	}
	setTimeout(anims, 1000);

});
$(window).on('load', function () {
	function el1() {
	  $('.header__text').addClass('aos-animate');
	}
	setTimeout(el1, 1200);

});



$(document).scroll(function () {
	var WinTop = $(window).scrollTop();
	var docHeight = $(window).height();

	$('.fadeEl').each(function () {
		var topIn = $(this).offset().top -docHeight * 0.80 ; 
		if (WinTop > topIn) {
			$(this).addClass('anim');
		}
	});
	
	$('.animation').each(function () {
		var topIn = $(this).offset().top -docHeight * 0.80 ; 
		if (WinTop > topIn) {
			$(this).addClass('start-animation');
		}
	});
	
});






AOS.init({
	easing: 'ease-out-back',
	duration: 1000,
	disable: function () {
    var maxWidth = 1100;
    return window.innerWidth < maxWidth;
  }
	
});





// adaptive
$(document).on("ready", function () {
	
	if( window.innerWidth > 1250 ){	
		//fix header
		$("document").ready(function($){
			var nav = $('.header');
			$(window).scroll(function () {
				if ($(this).scrollTop() > 500) {
					nav.addClass("header__scroll");
				} else {
					nav.removeClass("header__scroll");
				}
			});
		});
		
		
		//anchor
		var lastId,
			topMenu = $(".menu"),
			topMenuHeight = topMenu.outerHeight(),
			menuItems = topMenu.find("a"),
			scrollItems = menuItems.map(function(){
			  var item = $($(this).attr("href"));
			  if (item.length) { return item; }
			});
		
		menuItems.click(function(e){
		  var href = $(this).attr("href"),
			  offsetTop = href === "#" ? 0 : $(href).offset().top-topMenuHeight+1;
		  $('html, body').stop().animate({ 
			  scrollTop: offsetTop
		  }, 300);
		  e.preventDefault();
		});
		
		$(window).scroll(function(){
		   var fromTop = $(this).scrollTop()+topMenuHeight;
		   var cur = scrollItems.map(function(){
			 if ($(this).offset().top < fromTop)
			   return this;
		   });
		   cur = cur[cur.length-1];
		   var id = cur && cur.length ? cur[0].id : "";
		   
		   if (lastId !== id) {
			   lastId = id;
			   menuItems
				 .parent().removeClass("active")
				 .end().filter("[href='#"+id+"']").parent().addClass("active");
		   }                   
		});
		
		
	}
	
	
	
	if( window.innerWidth <= 1250 ){
		
		// slider
		$(".services__slider").addClass('swiper-container');
		$(".services__slider .swiper-wrapper").removeClass('row');
		$(".services__slider .swiper-wrapper").removeClass('services__row');
		

		var ps_swiper = new Swiper(".services__slider.swiper-container", {
			slidesPerView: 2,
			spaceBetween: 50,
			loop:true,
			autoplay: {
				delay: 2500,
				disableOnInteraction: false,
			},
			
			breakpoints: {
				500: {
				  slidesPerView: 1,
				  spaceBetween: 20,
				}
			  }
		});
		
		// slider
		$(".advantages__slider").addClass('swiper-container');
		$(".advantages__slider .swiper-wrapper").removeClass('row');
		$(".advantages__slider .swiper-wrapper").removeClass('advantages__row');
		

		var ps_swiper = new Swiper(".advantages__slider.swiper-container", {
			slidesPerView: 3,
			spaceBetween: 50,
			loop:true,
			autoplay: {
				delay: 2000,
				disableOnInteraction: false,
			},
			
			breakpoints: {
				900: {
				  slidesPerView: 2,
				  spaceBetween: 40,
				},
				500: {
				  slidesPerView: 1,
				  spaceBetween: 20,
				}
			  }
		});
		
		
		
		window.addEventListener("orientationchange", function() {
			tariff_swiper.update();
			ps_swiper.update();
		}, false);
  
	} 
		

	if(( window.innerWidth <= 1400 ) && ( window.innerWidth > 1000 )){
		window.addEventListener("orientationchange", function() {
			window.location.reload();
		}, false);

	}  
	
	
	
});



// Menu
$(document).on("ready", function () {
    $(".header__nav .trigger-menu").click(function () {
        $(this).toggleClass('op');
		$(".header__nav").toggleClass("menu-open");
		$('.header__nav .hamburger-menu__bar').toggleClass('animate');
    });
});
