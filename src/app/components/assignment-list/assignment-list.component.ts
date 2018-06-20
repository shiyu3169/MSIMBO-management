import { Component, OnInit, ViewChild } from '@angular/core';
import { AssignmentService } from '../../services/assignment.service.client';
import { Assignment } from '../../models/assignment.model.client';
import { NgForm } from '@angular/forms';
import { SharedService } from '../../services/shared.service.client';

@Component({
	selector: 'app-assignment-list',
  	templateUrl: './assignment-list.component.html',
  	styleUrls: ['./assignment-list.component.css']
})
export class AssignmentListComponent implements OnInit {

	assignments: Assignment[];


  	constructor(private assignmentService: AssignmentService, public sharedService: SharedService) { }

  	ngOnInit() {
  		this.assignmentService.findAssignments().subscribe(
  			(assignments: Assignment[]) => {
  				this.assignments = assignments;
  			}
  		);
  	}

}
