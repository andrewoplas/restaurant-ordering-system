import { Component, OnInit } from '@angular/core';

import * as $ from 'jquery';

@Component({
  selector: 'app-landing',
  templateUrl: '../html/landing.component.html',
  styleUrls: ['../scss/landing.component.scss']
})
export class LandingComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    function AnimateRotate(elem, angle) {
      // caching the object for performance reasons
      var $elem = $(elem);
  
      // we use a pseudo object for the animation
      // (starts from `0` to `angle`), you can name it as you want
      $({deg: 0}).animate({deg: angle}, {
          duration: 2000,
          step: function(now) {
              // in the step-callback (that is fired each step of the animation),
              // you can use the `now` paramter which contains the current
              // animation-position (`0` up to `angle`)
              $elem.css({
                  transform: 'rotate(' + now + 'deg)'
              });
          }
      });
    }

    // Animate rotation big circle container
    AnimateRotate(".circle-container-big", 360);


    // Distance Calculation
    var windowWidth = $(window).width();
    var marg = "0 0 0 0";
    var margSM = "32vw 0 0 21vw";

    if(windowWidth > 1072){
      marg = "-55vw 0 0 -20vw";
    }
    else if(windowWidth <= 1072 && windowWidth > 925){
      marg = "-50vw 0 0 -20vw";
    }
    else if(windowWidth <= 925 && windowWidth > 825){
      marg = "-40vw 0 0 -20vw";
      $("h1").css("font-size", "92px");
      $("a").css("font-size", "42px");
    }
    else if(windowWidth <= 825 && windowWidth > 600){
      marg = "-65vw 0 0 -20vw";
      $(".circle-container-sm").css("box-shadow", "none");
      $(".featured-image").css("width", "75vh");
      $(".featured-image").css("height", "60vh");
      $(".circle-container-big").css("display", "flex");
      $(".circle-container-big").css("justify-content", "center");
      $(".right-container").css("margin", "40vh auto 0 auto");
      $(".right-container").css("right", "auto");
      $(".right-container").css("width", "auto");
      $("h1").css("font-size", "55px");
      $("a").css("font-size", "28px");
    }
    else if(windowWidth <= 600) {
      marg = "-40vw 0 0 -20vw";
      $(".circle-container-sm").css("box-shadow", "none");
      $(".circle-container-big").css("display", "flex");
      $(".circle-container-big").css("justify-content", "center");
      $(".right-container").css("margin", "40vh auto 0 auto");
      $(".right-container").css("right", "auto");
      $(".right-container").css("width", "auto");
      $("h1").css("font-size", "55px");
      $("a").css("font-size", "28px");

      margSM = "32vw 0 0 0";
      $(".featured-image").css("width", "100%");
      $(".featured-image").css("height", "100%");
      $(".featured-image").css("right", "0px");
      $(".featured-image").css("margin-bottom", "-40px");
    }

    // Featured Image distance from right
    if(windowWidth <= 925 && windowWidth > 600){
      $(".featured-image").css("right", "8vw");
    }

    // Animate big circle container placement
    $(".circle-container-big").animate({
        margin: marg
    }, 1000, function() {

      // Animate rotation small circle container
      AnimateRotate(".circle-container-sm", 360);

      // Animate small circle container placement
      $(".circle-container-sm").animate({
          margin: margSM
      }, 1000, function() {
        
        // Animate Featured Photo fade in
        $(".featured-image").animate({
            opacity: "1"
        }, 1000, function() {
          
          // Show Call to Action
          $(".right-call-to-action").animate({
              opacity: "1"
          }, 1000, function() {
            // After Animation
          });
        });
      });
    });

    // Media Query JS

    $(window).resize(function(){

      if($(window).width() > 1072){
        $(".circle-container-big").css("margin-top", "-55vw");
      }
      if ($(window).width() <= 1072 && $(window).width() > 925) {  
        $(".circle-container-big").css("margin-top", "-50vw");
      }
      else if ($(window).width() <= 925 && $(window).width() > 825) {  
        $(".circle-container-big").css("margin-top", "-40vw");
        $(".featured-image").css("right", "8vw")
      }
      else if($(window).width() <= 825 && $(window).width() > 600){
        $(".circle-container-big").css("margin-top", "-65vw");
        $(".circle-container-sm").css("box-shadow", "none");
        $(".circle-container-sm").css("margin", "32vw 0 0 21vw");
        $(".featured-image").css("width", "75vh");
        $(".featured-image").css("height", "60vh");
        $(".circle-container-big").css("display", "flex");
        $(".circle-container-big").css("justify-content", "center");
        $(".right-container").css("margin", "40vh auto 0 auto");
        $(".right-container").css("right", "auto");
        $("h1").css("font-size", "55px");
        $("a").css("font-size", "28px");
        $(".right-container").css("width", "auto");
      }
      else if($(window).width() <= 600) {
        $(".circle-container-big").css("margin-top", "-40vw");
        $(".circle-container-sm").css("margin-left", "0");
        $(".featured-image").css("width", "100%");
        $(".featured-image").css("height", "100%");
        $(".featured-image").css("right", "auto");
      }

    });
    

  }

}
