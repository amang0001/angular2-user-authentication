import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { InstructorService } from './../instructor.service';
import { Instructor } from './../instructor';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-new-instructor',
  templateUrl: './new-instructor.component.html',
  styleUrls: ['./new-instructor.component.css']
})
export class NewInstructorComponent implements OnInit {

  @ViewChild('newInstructorModal') newInstructorModal;
  instructor: Instructor;

  constructor(private router: Router, private instructorService: InstructorService) {
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.newInstructorModal.show();
  }

  addInstructor(data) {
    this.instructorService.addInstructor(data)
      .map(response => response.json())
      .subscribe(
        data => this.router.navigate(['instructor']),
        error => console.log(error)
      );
  }

}
