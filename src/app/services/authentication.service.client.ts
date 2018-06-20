import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { UserService } from './user.service.client';

@Injectable()
export class AuthenticationService implements CanActivate {
	constructor (private userService: UserService) { }
	canActivate() {
    	return this.userService.loggedIn();
	}
}