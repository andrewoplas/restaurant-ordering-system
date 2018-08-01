import { Component, OnInit } from '@angular/core';

import * as $ from 'jquery';

@Component({
  selector: 'app-landing',
  templateUrl: '../html/landing.component.html',
  styleUrls: ['../sass/landing.component.scss']
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

    // Animate big circle container placement
    $(".circle-container-big").animate({
        margin: "-120vh 0 0 -20vw"
    }, 1000, function() {

      // Animate rotation small circle container
      AnimateRotate(".circle-container-sm", 360);

      // Animate small circle container placement
      $(".circle-container-sm").animate({
          margin: "70vh 0 0 21vw"
      }, 1000, function() {
        
        // Animate Featured Photo fade in
        $(".featured-image").animate({
            opacity: "1"
        }, 1000, function() {
          // After animation
        });
      });
    });

    

  }

}
