import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Feedback } from '../../app/models/Feedback';
import * as $ from 'jquery';

@Component({
  selector: 'app-feedback',
  templateUrl: '../html/feedback.component.html',
  styleUrls: ['../scss/feedback.component.scss']
})
export class FeedbackComponent implements OnInit {

  feedback : Feedback;

  constructor(private router: Router) { }

  ngOnInit() {
    this.initDataFeedback();
    this.initFunctions();
  }

  initDataFeedback(){
    this.feedback = {
      id: "test",
      overallQuality: 5,
      foodQuality: 2,
      staffQuality: 2
    }
  }

  // Redirects after confirmation of feedback
  redirect() {
    this.router.navigate(['']);
  }

  initFunctions() {
    $(".submit-btn").click(function() {
      // Initiate the feedback model
      this.feedback = {
        id: "",
        overallQuality: parseInt($(".overall-rate.choosen").html()),
        foodQuality: getFoodQuality(),
        staffQuality: getStaffQuality()
      }

      console.log(this.feedback);
    });

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

    $(".staff-rate").click(function(){
      // Clear rate before choosing assigning a new one
      clearStaff();
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

    // Clears over all choosen staff/crew rate
    function clearStaff(){
      $(".staff-rate").each(function(index) {
        $(this).removeClass("choosen");
      });
    }

    // Gets food quality rate base on index
    function getFoodQuality(){
      let result : number;
      result = 0;
      $(".foodquality-rate").each(function(index) {
        if($(this).hasClass("choosen")){
          result = index + 1;
        }
      });
      return result;
    }

    // Gets staff quality rate base on index
    function getStaffQuality(){
      let result : number;
      result = 0;
      $(".staff-rate").each(function(index) {
        if($(this).hasClass("choosen")){
          result = index + 1;
        }
      });
      return result;
    }
  }

}
