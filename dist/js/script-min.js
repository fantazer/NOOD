$(document).ready(function(){function e(){var e=navigator.userAgent.toLowerCase();return e.indexOf("msie")!=-1&&parseInt(e.split("msie")[1])}var t=function(e,t){$(e).click(function(e){e.stopPropagation(),$(t).slideToggle("fast")}),$(t).on("click",function(e){e.stopPropagation()}),$(document).on("click",function(){$(t).hide()})};t(".head-menu__toggle",".head-menu__wrap");var a=250,o=$(".head-menu").height();$(window).scroll(function(){var e=$(this).scrollTop();e>=a?($(".head-menu").addClass("shrink"),$("body").css("paddingTop",o)):($(".head-menu").removeClass("shrink"),$("body").css("paddingTop",0))}),$(window).resize(function(){o=$(".head-menu").height()}),$("a[rel='m_PageScroll2id']").mPageScroll2id({scrollSpeed:1600,scrollingEasing:"easeOutQuint"}),$(".main-slider").owlCarousel({items:1,autoplaySpeed:4e3,autoplayTimeout:4e3,animateOut:"fadeOut",autoHeight:!0,dots:!0,autoplay:!0,singleItem:!0,nav:!1,loop:!0});var n=$(".main-slider");$(window).on("blur focus",function(e){var t=$(this).data("prevType");if(t!=e.type)switch(e.type){case"blur":n.trigger("stop.owl.autoplay");break;case"focus":n.trigger("play.owl.autoplay",[1e3])}$(this).data("prevType",e.type)}),e()<10&&e()&&($("body").empty(),$("body").prepend('<div class="old-browser"><div class="old-browser-text"> Браузер не поддерживается =(</div></div>')),svg4everybody(),localStorage.clear(),sessionStorage.clear(),$(window).unload(function(){localStorage.clear()})}),function(e,t){"use strict";var a="img/pack.html",o=1;if(!t.createElementNS||!t.createElementNS("http://www.w3.org/2000/svg","svg").createSVGRect)return!0;var n,i,r="localStorage"in e&&null!==e.localStorage,l=function(){t.body.insertAdjacentHTML("afterbegin",i)},s=function(){t.body?l():t.addEventListener("DOMContentLoaded",l)};if(r&&localStorage.getItem("inlineSVGrev")==o&&(i=localStorage.getItem("inlineSVGdata")))return s(),!0;try{n=new XMLHttpRequest,n.open("GET",a,!0),n.onload=function(){n.status>=200&&n.status<400&&(i=n.responseText,s(),r&&(localStorage.setItem("inlineSVGdata",i),localStorage.setItem("inlineSVGrev",o)))},n.send()}catch(c){}}(window,document);