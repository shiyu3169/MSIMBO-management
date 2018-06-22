import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { environment } from '../../environments/environment';
import { map } from "rxjs/operators";
import { Grade } from '../models/grade.model.client'

@Injectable()
export class GradeService {
	baseUrl = environment.baseUrl;
	constructor(private http: Http) {}

	createGrade(grade: Grade){
		const url = this.baseUrl + '/api/grade';
		return this.http.post(url, grade).pipe(map(
            (res: Response) => {
                return res.json();
            }
        ));
	}

	findGradeByUser(uid: string){
		const url = this.baseUrl + '/api/grade/' + uid;
		return this.http.get(url).pipe(map(
            (response: Response) => {
                return response.json();
            }
        ))
	}

	findAllGrade(){
		const url = this.baseUrl + '/api/grade';
		return this.http.get(url).pipe(map(
            (response: Response) => {
                return response.json();
            }
        ))
	}

	updateGrade(gid: string, grade: Grade){
		const url = this.baseUrl + '/api/grade/' + gid;
		return this.http.put(url, grade).pipe(map(
            (res: Response) => {
                return res.json();
            }
        ));
	}

	deleteGrade(gid: string){
		const url = this.baseUrl + '/api/grade/' + gid;
		return this.http.delete(url).pipe(map(
            (res: Response) => {
                return res.json();
            }
        ));
	}
}