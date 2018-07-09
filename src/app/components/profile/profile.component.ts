import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service.client';
import { SharedService } from '../../services/shared.service.client'
import { User } from '../../models/user.model.client';
declare var jQuery: any;
import { environment } from '../../../environments/environment';
import { Grade } from '../../models/grade.model.client';
import { GradeService } from '../../services/grade.service.client';
@Component({
	selector: 'app-profile',
	templateUrl: './profile.component.html',
	styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

	user: User = {
		username: "",
		password: "",
		firstName: "",
		lastName: "",
		email: "",
		bio: "",
		image: "",
		github: "",
		linkedin: "",
		project: "",
	};
	baseUrl: string = "";
	firstName: string = "";
	lastName: string = "";
	email: string = "";
	bio: string = "";
	project: string = '';
	linkedin: string= '';
	github: string = '';
	grades: Grade[];
	year: number;
	month: number;
	selectedGrade: Grade = {
		name: "",
		user: "",
		score: "",
		comment: ""
	}
	
	constructor(private gradeService: GradeService, private userService: UserService, private sharedService: SharedService, private router: Router) { }

	ngOnInit() {
		this.baseUrl = environment.baseUrl;
		this.user = this.sharedService.user;
		this.firstName = this.user.firstName;
		this.lastName = this.user.lastName;
		this.email = this.user.email;
		this.bio = this.user.bio;
		this.project = this.user.project;
		this.linkedin = this.user.linkedin;
		this.github = this.user.github;
		this.year = new Date(this.user.dateCreated).getFullYear();
		this.month = new Date(this.user.dateCreated).getMonth();
		this.gradeService.findGradeByUser(this.user._id).subscribe(
			(res: Grade[]) => {
				this.grades = res;
				this.userService.findPictureForUser(this.user._id).subscribe();
			}
		);
	}

	logout() {
		this.userService.logout().subscribe(
			(status) => {
				this.router.navigate(['/']);
			}
		);
	}

	select(grade: Grade){
		this.selectedGrade = grade;
	}

	update() {
		this.user.firstName = this.firstName;
		this.user.lastName = this.lastName;
		this.user.email = this.email;
		this.user.bio = this.bio;
		this.user.project = this.project;
		this.user.linkedin = this.linkedin;
		this.user.github = this.github;
		this.userService.updateUser(this.user._id, this.user).subscribe(
			(res: any) => {
					jQuery('*').modal('hide');
			}
		)
	}
}
