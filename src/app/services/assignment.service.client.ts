import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { environment } from '../../environments/environment';
import { map } from "rxjs/operators";
import { Assignment } from '../models/assignment.model.client'


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

    findAssignmentById(aid: string) {
        const url = this.baseUrl + '/api/assignment/' + aid;
        return this.http.get(url).pipe(map(
            (response: Response) => {
                return response.json();
            }
        ))
    }

    createAssignment(ass: Assignment) {
        const url = this.baseUrl + '/api/assignment';
        return this.http.post(url, ass).pipe(map(
            (res: Response) => {
                return res.json();
            }
        )) ;
    }

    updateAssignment(aid: string, assignment: Assignment) {
        const url = this.baseUrl + '/api/assignment/' + aid;
        return this.http.put(url, assignment).pipe(map(
            (res: Response) => {
                return res.json();
            }
        ));
    }

    deleteAssignment(aid: string) {
        const url = this.baseUrl + '/api/assignment/' + aid;
        return this.http.delete(url).pipe(map(
            (res: Response) => {
                return res.json();
            }
        ));
    }
}