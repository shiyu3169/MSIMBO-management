import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { environment } from '../../environments/environment';
import { map } from "rxjs/operators";
import { User } from '../models/user.model.client'


@Injectable()
export class WikiService {
	baseUrl = environment.baseUrl;

	constructor(private http: Http) {}

    findWikis() {
        const url = this.baseUrl + '/api/wiki'
        return this.http.get(url).pipe(map(
            (response: Response) => {
                return response.json();
            }
        ));
    }

    findWikiById(wid: string) {
        const url = this.baseUrl + '/api/wiki/' + wid;
        return this.http.get(url).pipe(map(
            (response: Response) => {
                return response.json();
            }
        ))
    }
}