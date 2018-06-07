import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../../services/user.service.client';
import { User } from '../../models/user.model.client';

@Component({
	selector: 'app-profile',
	templateUrl: './profile.component.html',
	styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

	uid: string;
	user: User;

	constructor(private userService: UserService ,private activatedRoute: ActivatedRoute) { }

	ngOnInit() {
		this.activatedRoute.params.subscribe(
			params => {
				this.uid = params['uid'];
				this.userService.findUserById(this.uid).subscribe(
					(user: User) => {
						this.user = user;
					}
					)
			}
			)
	}


}
