import { Component, OnInit } from '@angular/core';
declare var jQuery: any;
import {User} from '../../models/user.model.client';
import {UserService} from '../../services/user.service.client';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    users: User[];

    constructor(private userService: UserService) { }

    ngOnInit() {
  	    jQuery('.carousel').carousel({
  		    interval: 3000
	    });
        this.userService.findUsers().subscribe(
            (users:User[]) => {
                this.users = users;
                for(let user of users) {
                    this.userService.findPictureForUser(user._id).subscribe();
                }
            }
        );
    }
}
