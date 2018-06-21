import { Component, OnInit, ViewChild } from '@angular/core';
import { AssignmentService } from '../../services/assignment.service.client';
import { Assignment } from '../../models/assignment.model.client';
import { NgForm } from '@angular/forms';
import { SharedService } from '../../services/shared.service.client';
declare var jQuery: any;

@Component({
	selector: 'app-assignment-list',
  	templateUrl: './assignment-list.component.html',
  	styleUrls: ['./assignment-list.component.css']
})
export class AssignmentListComponent implements OnInit {

	assignments: Assignment[];
  name: string ="";
  src: string = "";
  due: string = "";

  selectedASS: Assignment = {
        name: "",
        src: "",
        due: ""
    };

  	constructor(private assignmentService: AssignmentService, public sharedService: SharedService) { }

  	ngOnInit() {
      this.name ="";
      this.src = "";
      this.due = "";
  		this.assignmentService.findAssignments().subscribe(
  			(assignments: Assignment[]) => {
  				this.assignments = assignments;
  			}
  		);
  	}

    update() {
        this.selectedASS.name = this.name;
        this.selectedASS.src = this.src;
        this.selectedASS.due = this.due;
        this.assignmentService.updateAssignment(this.selectedASS._id, this.selectedASS).subscribe(
            (res: any) => {
                jQuery('#editModal').modal('hide');
                this.ngOnInit();
            }
        );
    }

    remove() {
        this.assignmentService.deleteAssignment(this.selectedASS._id).subscribe(
            (res: any) => {
                jQuery('#removeModal').modal('hide');
                this.ngOnInit();
            }
        );
    }

    create() {
        const newAss: Assignment = {
          name: this.name,
          src: this.src,
          due: this.due
        }
        this.assignmentService.createAssignment(newAss).subscribe(
            (res: any) => {
                jQuery('#newModal').modal('hide');
                this.ngOnInit();
            }
        )
    }

    select(assignment: Assignment) {
      this.selectedASS = assignment;
      this.name = assignment.name;
      this.src = assignment.src;
      this.due = assignment.due;
    }
}
