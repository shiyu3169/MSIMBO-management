import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions } from '@angular/http';
import { environment } from '../../environments/environment';
import { map } from "rxjs/operators";
import { User } from '../models/user.model.client'


@Injectable()
export class UserService {
	baseUrl = environment.baseUrl;
    options: RequestOptions = new RequestOptions();

	constructor(private http: Http) {}

	findUserByCredentials(username: string, password: string) {
        const url =  this.baseUrl + '/api/user?username=' + username + '&password=' + password;
        return this.http.get(url).pipe(map(
        	(response: Response) => {
                return response.json();
            }
            ));
    }

    findUserByUsername(username: string) {
        const url =  this.baseUrl + '/api/user?username=' + username;
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

    createUser(user: User) {
        const url = this.baseUrl + '/api/user';
        return this.http.post(url, user).pipe(map(
            (res: Response) => {
                return res.json();
            }
        ))
    }

    // register(username: string, password: string) {
    //     const url = this.baseUrl + '/api/register';
    //     const credentials = {
    //         username: username,
    //         password: password
    //     };
    //     this.options.withCredentials = true;
    //     return this.http.post(url, credentials, this.options).pipe(map(
    //         (response: Response) => {
    //             return response.json();
    //         }
    //     ));
    // }

    login(username: string, password: string) {
        const url = this.baseUrl + '/api/login';
        const credentials = {
            username: username,
            password: password
        };
        this.options.withCredentials = true;
        return this.http.post(url, credentials, this.options).pipe(map(
            (response: Response) => {
                return response.json();
            }
        ));
    }

    logout() {
        const url = this.baseUrl + '/api/logout';
        this.options.withCredentials = true;
        return this.http.post(url, {}, this.options).pipe(map(
            (res: Response) => {
                return res;
            }
        ));
    }
}