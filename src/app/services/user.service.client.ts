import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { environment } from '../../environments/environment';
import { map } from "rxjs/operators";
import { User } from '../models/user.model.client'


@Injectable()
export class UserService {
	baseUrl = environment.baseUrl;

	constructor(private http: Http) {}

	findUserByCredentials(username: String, password: String) {
        const url =  this.baseUrl + '/api/user?username=' + username + '&password=' + password;
        return this.http.get(url).pipe(map(
        	(response: Response) => {
                return response.json();
            }
            ));
    }

    findUsers() {
        const url = this.baseUrl + '/api/user'
        return this.http.get(url).pipe(map(
            (response: Response) => {
                return response.json();
            }
            ));
    }

    findUserById(uid: string) {
        const url = this.baseUrl + '/api/user/' + uid;
        return this.http.get(url).pipe(map(
            (response: Response) => {
                return response.json();
            }
        ));
    }
}