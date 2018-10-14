import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Feedback } from '@models/Feedback';
import { FeedbackService } from '@services/feedback.service';
import * as $ from 'jquery';
import swal from 'sweetalert2';

@Component({
  selector: 'app-feedback',
  templateUrl: '../html/feedback.component.html',
  styleUrls: ['../scss/feedback.component.scss']
})
export class FeedbackComponent implements OnInit {

  feedback : Feedback;

  constructor(private router: Router, private feedbackService: FeedbackService) { }

  ngOnInit() {
    this.initDataFeedback();
    this.initFunctions();
  }

  initDataFeedback(){
    this.feedback = {
      overallQuality: 5,
      foodQuality: 2,
      staffQuality: 2,
      date: new Date()
    }
  }

  // Redirects after confirmation of feedback
  redirect() {
    this.router.navigate(['']);
  }

  submitButton() {

    this.feedback = {
      overallQuality: parseInt($(".overall-rate.choosen").html()),
      foodQuality: getFoodQuality(),
      staffQuality: getStaffQuality(),
      date : new Date()
    }

    this.feedbackService.addFeedback(this.feedback).subscribe(
      success => {
        if(success) {
          swal({
            title: "Success",
            text: "Successfully submitted your feedback. Thank you!",
            type: "success",
            timer: 3000
          });
          setTimeout(
            () => {
              this.router.navigate(['']);
          }, 3000);
        } else {
          swal({
            title: "Ooops!",
            text: "There was an error during the process. Please try again!",
            type: "error",
            confirmButtonText: "Try Again",
            confirmButtonColor: "#A40020"
          });   
        }
      }, 
    );

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

  initFunctions() {

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

  }
}
