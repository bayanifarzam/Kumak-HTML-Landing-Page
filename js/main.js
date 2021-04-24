//------------------------------------//
//------------------------------------//
//                                    //
// Custom Javascript                  //
// Kumak - HTML5 landing page         // 
// Version- 1.0                       //
// Author: Codejow                    //
//                                    //
//....................................//


$(document).ready(function() {

      'use strict';

      $('.preloader').fadeOut(1000); // set duration in brackets    

  /*----------------------------------------------
   home slideshow section
   CSS file is in css/style.css
  -----------------------------------------------*/

    $('#home').backstretch([
       "images/home-bg-slideshow1.jpg", 
       "images/home-bg-slideshow2.jpg",
       "images/home-bg-slideshow3.jpg",
        ],  {duration: 2000, fade: 750});

  /*-------------------------------------------------
   Parallax section
    -----------------------------------------------*/
  function initParallax() {
    $('#about').parallax("100%", 0.1);
    $('#feature').parallax("100%", 0.3);
    $('#about').parallax("100%", 0.1);
    $('#video').parallax("100%", 0.2);
    $('#menu').parallax("100%", 0.3);
    $('#team').parallax("100%", 0.3);
    $('#gallery').parallax("100%", 0.1);
    $('#contact').parallax("100%", 0.2);
  }
  initParallax();

  /*-------------------------------- 
  wow
  -------------------------------*/
  new WOW({ mobile: false }).init();

 /*----------------------------------------------
   Hide mobile menu after clicking on a link
    -----------------------------------------------*/
    $('.navbar-collapse a').on('bind',function(){
        $(".navbar-collapse").collapse('hide');
    });

 /*------------------------------------------------
Flexslider
-----------------------------------------------*/
$('.flexslider').flexslider({
         animation: "slide"
      });

  });

