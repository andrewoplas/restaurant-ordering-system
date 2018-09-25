import { Component, OnInit } from '@angular/core';

import * as $ from 'jquery';

@Component({
  selector: 'app-feedback',
  templateUrl: '../html/feedback.component.html',
  styleUrls: ['../scss/feedback.component.scss']
})
export class FeedbackComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    
    $(".overall-rate").click(function(){
      // Clear rate before choosing assigning a new one
      clearOverall();
      // Add class to selected rate
      $(this).addClass("choosen");
    });

    $(".foodquality-rate").click(function(){
      // Clear rate before choosing assigning a new one
      clearFoodQuality();
      // Add class to selected rate
      $(this).addClass("choosen");
    });

    // Clears over all choosen rate
    function clearOverall(){
      $(".overall-rate").each(function(index) {
        $(this).removeClass("choosen");
      });
    }

    // Clears over all choosen food quality rate
    function clearFoodQuality(){
      $(".foodquality-rate").each(function(index) {
        $(this).removeClass("choosen");
      });
    }

  }

}
