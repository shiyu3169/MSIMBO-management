import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {UserService} from '../../services/user.service.client';
import { SharedService } from '../../services/shared.service.client'
import {User} from '../../models/user.model.client';
import {NgForm} from '@angular/forms';
declare var jQuery: any;


@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

	username: string = "";
	password: string = "";
	errorFlag: boolean;


	constructor(private userService: UserService, private router: Router, private sharedService: SharedService) { }

	ngOnInit() {
		this.errorFlag = false;
        jQuery("[data-toggle=popover]").popover();
	}

	login() {
    	this.userService.login(this.username, this.password).subscribe(
    		(user: User) => {
    			if(!user) {
    				this.errorFlag = true;
    			} else {
    				this.errorFlag = false;
    				this.sharedService.user = user;
    				this.router.navigate(['/user']);
    			}
    		},
    		(err: any) => {
    			this.errorFlag = true;
    		}
    	);
	}


}
