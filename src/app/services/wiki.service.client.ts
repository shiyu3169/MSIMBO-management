import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { environment } from '../../environments/environment';
import { map } from "rxjs/operators";
import { Wiki} from '../models/wiki.model.client'

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

    createWiki(wiki: Wiki) {
        const url = this.baseUrl + '/api/wiki';
        return this.http.post(url, wiki).pipe(map(
            (res: Response) => {
                return res.json();
            }
        )) ;
    }

    updateWiki(wid: string, wiki: Wiki) {
        const url = this.baseUrl + '/api/wiki/' + wid;
        return this.http.put(url, wiki).pipe(map(
            (res: Response) => {
                return res.json();
            }
        ));
    }

    deleteWiki(wid: string) {
        const url = this.baseUrl + '/api/wiki/' + wid;
        return this.http.delete(url).pipe(map(
            (res: Response) => {
                return res.json();
            }
        ));
    }
}