import { Component, OnInit } from '@angular/core';
import { AssignmentService } from '../../services/assignment.service.client';
import { Assignment } from '../../models/assignment.model.client';
import { User } from '../../models/user.model.client';
import { SharedService } from '../../services/shared.service.client';
declare var jQuery: any;

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

	assignments: Assignment[];
    //user: User;

    constructor(private assignmentService: AssignmentService, private sharedService: SharedService) { }

    ngOnInit() {
        jQuery(document).on('click',function(){
            jQuery('.collapse').collapse('hide');
        })
        this.assignmentService.findAssignments().subscribe(
            (assignments: Assignment[]) => {
                this.assignments = assignments;
            }
        );
        // this.user = this.sharedService.user;
    }

}
