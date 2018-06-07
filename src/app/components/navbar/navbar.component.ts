import { Component, OnInit } from '@angular/core';
import { AssignmentService } from '../../services/assignment.service.client';
import { Assignment } from '../../models/assignment.model.client';
declare var jQuery: any;

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

	assignments: Assignment[];

  	constructor(private assignmentService: AssignmentService) { }

  ngOnInit() {
    jQuery(document).on('click',function(){
      jQuery('.collapse').collapse('hide');
    })
  	this.assignmentService.findAssignments().subscribe(
  			(assignments: Assignment[]) => {
  				this.assignments = assignments;
  			}
  		);
  }

}
