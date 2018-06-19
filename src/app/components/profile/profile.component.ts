import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../../services/user.service.client';
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
	
	constructor(private userService: UserService ,private activatedRoute: ActivatedRoute) { }

	ngOnInit() {
		this.activatedRoute.params.subscribe(
			params => {
				this.uid = params['uid'];
				this.baseUrl = environment.baseUrl;
				this.userService.findUserById(this.uid).subscribe(
					(user: User) => {
						this.user = user;
						this.fristName = this.user.firstName;
						this.lastName = this.user.lastName;
						this.email = this.user.email;
						this.bio = this.user.bio;
					}
				);
			}
		);
	}


	// upload(){
		
	// 	jQuery('#imageModal').modal('hide');
	// }

}
