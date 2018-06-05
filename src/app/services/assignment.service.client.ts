import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { environment } from '../../environments/environment';
import { map } from "rxjs/operators";
import { User } from '../models/user.model.client'


@Injectable()
export class AssignmentService {
	baseUrl = environment.baseUrl;

	constructor(private http: Http) {}

    findAssignments() {
        const url = this.baseUrl + '/api/assignment'
        return this.http.get(url).pipe(map(
            (response: Response) => {
                return response.json();
            }
        ));
    }
}