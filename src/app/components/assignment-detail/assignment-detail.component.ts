import { Component, OnInit } from '@angular/core';
import { AssignmentService } from '../../services/assignment.service.client';
import { Assignment } from '../../models/assignment.model.client';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
@Component({
  selector: 'app-assignment-detail',
  templateUrl: './assignment-detail.component.html',
  styleUrls: ['./assignment-detail.component.css']
})
export class AssignmentDetailComponent implements OnInit {

	aid: string;
	assignment: Assignment ={
		name : "",
		src : "",
		_id : "",
		due : ""
	}

	constructor(private assignmentService: AssignmentService, private activatedRoute: ActivatedRoute, private sanitizer: DomSanitizer) { }

	ngOnInit() {
	  	this.activatedRoute.params.subscribe(
	  		params => {
	  			this.aid = params['aid'];
	  			this.assignmentService.findAssignmentById(this.aid).subscribe(
	  					(assignment: Assignment) => {
	  						this.assignment = assignment;
	  					}
	  				)
	  		}
	  	)
    }

    santizerUrl(url) {
  		return this.sanitizer.bypassSecurityTrustResourceUrl(url);
    }
}
