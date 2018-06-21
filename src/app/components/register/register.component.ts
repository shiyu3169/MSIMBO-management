import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {UserService} from '../../services/user.service.client';
import {User} from '../../models/user.model.client';
import {NgForm} from '@angular/forms';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

    username: string;
    password: string;
    verifyPassword: string;
    usernameError: boolean;
    passwordError: boolean;
    successFlag : boolean

    constructor(private userService: UserService, private router: Router) { }

    register() {
        this.usernameError = false;
        this.passwordError = false;
        if (this.password !== this.verifyPassword) {
            this.passwordError = true;
        } else {
            this.userService.findUserByUsername(this.username)
            .subscribe(
                (user: any) => {
                    if (!user) {
                        const newUser: User = {
                            username: this.username,
                            password: this.password,
                            firstName: '',
                            lastName: '',
                            email: '',
                            bio: 'MSIMBO Student',
                            image: './assets/uploads/user.png',
                            github: '',
                            linkedin: '',
                            project: ''
                        };
                        this.userService.createUser(newUser)
                        .subscribe(
                            (res: any) => {
                                this.usernameError = false;
                                this.passwordError = false;
                                this.successFlag = true;
                                this.init();
                            });
                    } else {
                        this.usernameError = true;
                        this.successFlag = false;
                    }
                }
            );
        }
    }

    ngOnInit() {
        this.usernameError = false;
        this.passwordError = false;
        this.successFlag = false;
    }

    init() {
        this.username = "";
        this.password = "";
        this.verifyPassword = "";
    }

}
