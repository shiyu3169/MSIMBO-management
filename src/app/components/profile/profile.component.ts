import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../../services/user.service.client';
import { SharedService } from '../../services/shared.service.client'
import { User } from '../../models/user.model.client';
declare var jQuery: any;
import { environment } from '../../../environments/environment';

@Component({
	selector: 'app-profile',
	templateUrl: './profile.component.html',
	styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

	uid: string;
	user: User ={
		_id:"",
		username: "",
		password: "",
		firstName: "",
		lastName: "",
		email: '',
		image: '',
		admin: false,
		bio: '',
		github: '',
		linkedin: '',
		project: ''
	};
	fristName: string;
	lastName: string;
	email: string;
	bio: string ="";
	baseUrl: string;
	github: string;
	linkedin: string;
	project: string;
	
	constructor(private userService: UserService ,private activatedRoute: ActivatedRoute, private sharedService: SharedService, private router: Router) { }

	ngOnInit() {
		this.baseUrl = environment.baseUrl;
		this.user = this.sharedService.user;
		this.fristName = this.user.firstName;
		this.lastName = this.user.lastName;
		this.email = this.user.email;
		this.bio = this.user.bio;
		this.github = this.user.github;
		this.linkedin = this.user.linkedin;
		this.project = this.user.project;
	}


	// upload(){
		
	// 	jQuery('#imageModal').modal('hide');
	// }

	logout() {
		this.userService.logout().subscribe(
			(status) => {
				this.router.navigate(['/']);
			}
		);
	}
}
