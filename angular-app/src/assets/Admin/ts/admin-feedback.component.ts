import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FeedbackService } from '@services/feedback.service';
import { Feedback } from '@models/Feedback';
import * as $ from 'jquery';
import 'datatables.net';
import swal from 'sweetalert2';

@Component({
  selector: 'app-admin-feedback',
  templateUrl: '../html/admin-feedback.component.html',
  styleUrls: ['../scss/admin-feedback.component.scss']
})
export class AdminFeedbackComponent implements OnInit {
  title = 'FEEDBACK';
  feedbackModal;
  feedbackList: Array<Feedback> = new Array<Feedback>();

  constructor(private feedbackService: FeedbackService, private modalService: NgbModal) {}

  ngOnInit() {
    $("#table-orders").dataTable();
    this.getFeedbacks();
    $('.preloader').fadeOut();
  }

  getFeedbacks() {
    this.feedbackService.getFeedbacks().subscribe(
      data => {
        this.feedbackList = data;
        $("#table-orders").DataTable().clear();
        $('#table-orders').DataTable().destroy();
      }
    );
  }

  reinitialize(isLast: boolean) {
    if (isLast && !$.fn.DataTable.isDataTable('#table-orders')) {
      $('#table-orders').dataTable();
      eval("$('[data-toggle=tooltip]').tooltip();");
    }
  }

  displayError(error) {
    swal({
      title: error.title,
      text: error.message,
      type: "error",
      confirmButtonText: "Got it!",
      confirmButtonColor: "#A40020"
    });
  }

}
