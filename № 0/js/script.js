$(function() {
	$("#js-home").on("click", function(e) {

	/*===== скрол 1 блока =====*/

	e.preventDefault();

	var plansOffset = $("#js-top").offset().top;

	$("html, body").animate({
		scrollTop: plansOffset
	}, 0);
	
	
	});

	$("#js-features").on("click", function(e) {

	/*===== скрол 2 блока =====*/

	e.preventDefault();

	var plansOffset = $("#js-agency-block").offset().top;

	$("html, body").animate({
		scrollTop: plansOffset
	}, 100);
	
	
	});

	/*===== появление меню навигации =====*/
   
  var headH = $("#js-header").height(),
  	   navH = $("#js-nav").height();


  $(document).on("scroll", function() {

  	var documentScroll = $(this).scrollTop();

  	if(documentScroll > headH) {

  		$("#js-nav").addClass("fixed");

  		$("#js-header").css("paddingBottom", navH);

  	} else{

  		$("#js-nav").removeClass("fixed");

  		$("#js-header").removeAttr("style");

  	}
  });

  $("#js-exestions").on("click", function(e) {

	/*===== скрол 2 блока =====*/

	e.preventDefault();

	var plansOffset = $("#js-news-block").offset().top;

	$("html, body").animate({
		scrollTop: plansOffset
	}, 100);
	
	
	});

  $("#js-tutorial").on("click", function(e) {

	/*===== скрол 3 блока =====*/

	e.preventDefault();

	var plansOffset = $("#js-key-feature").offset().top;

	$("html, body").animate({
		scrollTop: plansOffset
	}, 100);
	
	
	});


  $("#js-contact").on("click", function(e) {

	/*===== скрол 4 блока =====*/

	e.preventDefault();

	var plansOffset = $("#js-contact-block").offset().top;

	$("html, body").animate({
		scrollTop: plansOffset
	}, 100);

	});
  /*===== скрол из шапки в форму =====*/

  	$("#js-scroll-btn").on("click", function(e) {

	e.preventDefault();

	var plansOffset = $("#js-map").offset().top;

	$("html, body").animate({
		scrollTop: plansOffset
	}, 100);

	});

  /*===== открывание мобильного меню =====*/


  $("#js-moby-btn").on("click",function(e) {

  	e.preventDefault();

  	$("#js-navigation-moby-menu, #js-header-social-moby").slideToggle(0);
  });


  /*====== Появление кнопки прокрутки======*/
  
	$(document).on("scroll", function(){

		$("#js-up").removeClass("opacity");

	});

  /*====== кнопка вверх======*/

  $("#js-up").on("click",function(e){
  	e.preventDefault();

  	var plansOffset = $("#js-top").offset().top;

	$("html, body").animate({
		scrollTop: plansOffset
	}, 100);
	});

  	/*=======мобильный слайдер======*/

  	$(".next").on("click",function(e){
  		e.preventDefault();

  		var activImage = $(".team-foto-item.active");
  		var activImageIndex = $(".team-foto-item.active").index();
  		var nextImageIndex = activImageIndex + 1;
  		var nextImage = $(".team-foto-item").eq(nextImageIndex);
  		activImage.fadeIn(100);
  		activImage.removeClass("active");
  		$(".team-foto-item").removeAttr("style");

  		if(nextImageIndex == ($(".team-foto-item:last").index() + 1)){
  			$(".team-foto-item").eq(0).fadeIn(100);
  			$(".team-foto-item").eq(0).addClass("active");
  		} else {
  			nextImage.fadeIn(100);
  			nextImage.addClass("active");
  			$(".team-foto-item").removeAttr("style");
  		}
  	});

  	$(".prew").on("click",function(e){
  		e.preventDefault();

  		var activImage = $(".team-foto-item.active");
  		var activImageIndex = $(".team-foto-item.active").index();
  		var prewImageIndex = activImageIndex - 1;
  		var prewImage = $(".team-foto-item").eq(prewImageIndex);

  		activImage.fadeOut(0);
  		activImage.removeClass("active");
  		prewImage.fadeIn(100);
  		prewImage.addClass("active");
  		$(".team-foto-item").removeAttr("style");

  	});
  	
});