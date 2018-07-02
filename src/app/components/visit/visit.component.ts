import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../../services/user.service.client';
import { GradeService } from '../../services/grade.service.client';
import { SharedService } from '../../services/shared.service.client'
import { User } from '../../models/user.model.client';
import { Grade } from '../../models/grade.model.client';
declare var $: any;
import { environment } from '../../../environments/environment';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-visit',
  templateUrl: './visit.component.html',
  styleUrls: ['./visit.component.css']
})
export class VisitComponent implements OnInit {

	uid: string;
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
		project: ""
	};
	baseUrl: string = '';
	firstName: string = '';
	lastName: string = '';
	email: string = '';
	bio: string = '';
	project: string = '';
	linkedin: string = '';
	github: string = '';
	grades: Grade[];
	gradeName: string = '';
	score: string = '';
	year: number;


	selectedGrade: Grade = {
		name: "",
		user: "",
		score: ""
	}

    constructor(private sanitizer: DomSanitizer, private gradeService: GradeService, private userService: UserService, private activatedRoute: ActivatedRoute, public sharedService: SharedService, private router: Router) { }


    ngOnInit() {
	  	this.baseUrl = environment.baseUrl;
	  	this.gradeName = '';
		this.score = '';
	  	this.activatedRoute.params.subscribe(
	  		params => {
	  			this.uid = params['uid'];
	  			this.userService.findUserById(this.uid).subscribe(
	  				(res: User) => {
	  					this.user = res;
	  					this.firstName = this.user.firstName;
						this.lastName = this.user.lastName;
						this.email = this.user.email;
						this.bio = this.user.bio;
						this.project = this.user.project;
						this.linkedin = this.user.linkedin;
						this.github = this.user.github;
						this.year = new Date(this.user.dateCreated).getFullYear();
	  				}
	  			);
	  			this.gradeService.findGradeByUser(this.uid).subscribe(
	  				(res: Grade[]) => {
	  					this.grades = res;
	  				}
	  			)
	  		}
	  	);
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
					$('*').modal('hide');
			}
		)
	}

	create(){
		const newGrade: Grade ={
			name: this.gradeName,
			score: this.score,
			user: this.uid
		}
		this.gradeService.createGrade(newGrade).subscribe(
			res => {
				$('#newModal').modal('hide');
				this.ngOnInit();
			}
		)
		
	}

	select(grade: Grade){
		this.selectedGrade = grade;
		this.gradeName = this.selectedGrade.name;
		this.score = this.selectedGrade.score;
	}

	updateGrade() {
		this.selectedGrade.name = this.gradeName;
		this.selectedGrade.score = this.score;
		this.gradeService.updateGrade(this.selectedGrade._id, this.selectedGrade).subscribe(
			res => {
				$('#editModal').modal('hide');
				this.ngOnInit();
			}
		)
	}

	getEmbedUrl(link: string) {
	    return this.sanitizer.bypassSecurityTrustResourceUrl(link);
  	}

	remove() {
		this.gradeService.deleteGrade(this.selectedGrade._id).subscribe(
			res => {
				$('#removeModal').modal('hide');
				this.ngOnInit();
			}
		)
	}

}
