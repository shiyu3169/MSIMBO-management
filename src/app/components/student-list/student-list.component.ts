import {Component, OnInit, ViewChild} from '@angular/core';
import {UserService} from '../../services/user.service.client';
import {SharedService} from '../../services/shared.service.client';
import {User} from '../../models/user.model.client';
import {NgForm} from '@angular/forms';
declare var jQuery: any;

@Component({
    selector: 'app-student-list',
    templateUrl: './student-list.component.html',
    styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {

    users: User[];
    selectedUser: User = {
        username: "",
        password: "",
        firstName: "",
        lastName: "",
        email: "",
        image: "",
        bio: "",
        github: "",
        linkedin: "",
        project: ""
    }

    inputName: string = "";

    constructor(private userService: UserService, public sharedService: SharedService) { }

    ngOnInit() {
        this.inputName = "";
        this.userService.findUsers().subscribe(
            (users:User[]) => {
                this.users = users;
                for(let user of users) {
                    if(!user.admin && user.username !== 'student') {
                        this.userService.findPictureForUser(user._id).subscribe();
                    }
                }
            }
        );
    }

    select(user: User) {
        this.selectedUser = user;
    }

    remove() {
        this.userService.deleteUser(this.selectedUser._id).subscribe(
            (res: any) => {
                jQuery('#removeModal').modal('hide');
                this.ngOnInit();
            }
        )
    }
}
