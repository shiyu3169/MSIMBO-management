import { Component, OnInit, ViewChild } from '@angular/core';
import {Router} from '@angular/router';
import {UserService} from '../../services/user.service.client';
import {User} from '../../models/user.model.client';
import {NgForm} from '@angular/forms';
declare var jQuery: any;


@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

	@ViewChild('f') loginForm: NgForm;

	username: String;
	password: String;
	errorFlag: boolean;

	constructor(private userService: UserService, private router: Router) { }

	ngOnInit() {
		jQuery(function () {
			jQuery('.my-popover').popover({
				trigger:'focus'
			})
		})
	}

	login() {
		this.username = this.loginForm.value.username;
    	this.password = this.loginForm.value.password;

    	this.userService.findUserByCredentials(this.username, this.password).subscribe(
    		(user: User) => {
    			this.errorFlag = false;
          		this.router.navigate(['/user/', user._id]);
    		},
    		(error: any) => {
            	this.errorFlag = true;
          	}
    	);
	}


}
