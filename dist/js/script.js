$(document).ready(function(){


	var hideToggle = function(targetClick,toggleEl) {
		$(targetClick).click(function(event){
				event.stopPropagation();
				$(toggleEl).slideToggle("fast");
		});
		$(toggleEl).on("click", function (event) {
			event.stopPropagation();
		});
		$(document).on("click", function () {
				$(toggleEl).hide();
		});
	}
	hideToggle('.head-menu__toggle','.head-menu__wrap');

	//slide header
	var shrinkHeader = 250;
	var heightHeader=$('.head-menu').height();
	$(window).scroll(function() {
		var scroll = $(this).scrollTop();
		if ( scroll >= shrinkHeader ) {
				$('.head-menu').addClass('shrink');
				$('body').css('paddingTop',heightHeader);
			}
			else {
					$('.head-menu').removeClass('shrink');
					$('body').css('paddingTop',0);
			}
	});

	$(window).resize(function(){
		heightHeader=$('.head-menu').height();
	});

	//smooth scroll
	$("a[rel='m_PageScroll2id']").mPageScroll2id({
	scrollSpeed:1600,
	scrollingEasing: "easeOutQuint"
	});

	//main-slider
	$(".main-slider").owlCarousel({
		 items : 1,
		 autoplaySpeed:4000,
		autoplayTimeout: 4000,
		 animateOut: 'fadeOut',
		 autoHeight : true,
		 dots: true,
		 autoplay : true,
		 singleItem:true,
		 nav:false,
		 loop:true
	 }
	);
	var owl = $(".main-slider");
	$(window).on("blur focus", function(e) {
    var prevType = $(this).data("prevType");

    if (prevType != e.type) {   //  reduce double fire issues
        switch (e.type) {
            case "blur":
                // do work
                owl.trigger('stop.owl.autoplay');
                break;
            case "focus":
                // do work
                owl.trigger('play.owl.autoplay', [1000]);
                break;
        }
    }

    $(this).data("prevType", e.type);
	});

	/* ###### For only ies  ######*/
	//if(/MSIE \d|Trident.*rv:/.test(navigator.userAgent)){
	//	//code
	//}

	//message for old IE
	function isIE () {
	  var myNav = navigator.userAgent.toLowerCase();
	  return (myNav.indexOf('msie') != -1) ? parseInt(myNav.split('msie')[1]) : false;
	}

	if (isIE() < 10 &&  isIE()) {
		$('body').empty();
		$('body').prepend('<div class="old-browser"><div class="old-browser-text"> Браузер не поддерживается =(</div></div>');
	}

	//for init SVG 
	svg4everybody();
	// ==== clear storage =====
	localStorage.clear();
	sessionStorage.clear();
		$(window).unload(function(){
	  localStorage.clear();
	});
	// ==== clear storage end =====

	
	/* ###### For SlideToggle Elements  ######*/
	/*var hideToggle = function(targetClick,toggleEl) {
		$(targetClick).click(function(event){
				event.stopPropagation();
				$(toggleEl).slideToggle("fast");
		});
		$(toggleEl).on("click", function (event) {
			event.stopPropagation();
		});
		$(document).on("click", function () {
				$(toggleEl).hide();
		});
	}
	hideToggle('.icon-bars','.top-menu_link');*/



	
})

//cash SVG

;( function( window, document )
{
	'use strict';

	var file  = 'img/pack.html',
		revision = 1;

	if( !document.createElementNS || !document.createElementNS( 'http://www.w3.org/2000/svg', 'svg' ).createSVGRect )
		return true;

	var isLocalStorage = 'localStorage' in window && window[ 'localStorage' ] !== null,
		request,
		data,
		insertIT = function()
		{
			document.body.insertAdjacentHTML( 'afterbegin', data );
		},
		insert = function()
		{
			if( document.body ) insertIT();
			else document.addEventListener( 'DOMContentLoaded', insertIT );
		};

	if( isLocalStorage && localStorage.getItem( 'inlineSVGrev' ) == revision )
	{
		data = localStorage.getItem( 'inlineSVGdata' );
		if( data )
		{
			insert();
			return true;
		}
	}

	try
	{
		request = new XMLHttpRequest();
		request.open( 'GET', file, true );
		request.onload = function()
		{
			if( request.status >= 200 && request.status < 400 )
			{
				data = request.responseText;
				insert();
				if( isLocalStorage )
				{
					localStorage.setItem( 'inlineSVGdata',  data );
					localStorage.setItem( 'inlineSVGrev',   revision );
				}
			}
		}
		request.send();
	}
	catch( e ){}

}( window, document ) );