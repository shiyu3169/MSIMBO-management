import {Component, OnInit, ViewChild} from '@angular/core';
import {UserService} from '../../services/user.service.client';
import {User} from '../../models/user.model.client';
import {NgForm} from '@angular/forms';

@Component({
    selector: 'app-student-list',
    templateUrl: './student-list.component.html',
    styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {

    users: User[];

    inputName: string = "";

    constructor(private userService: UserService) { }

    ngOnInit() {
        this.inputName = "";
        this.userService.findUsers().subscribe(
            (users:User[]) => {
                this.users = users;
          }
          );
    }
}
