import { Component, OnInit } from '@angular/core';
import { WikiService } from '../../services/wiki.service.client';
import { Wiki } from '../../models/wiki.model.client';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-wiki-detail',
  templateUrl: './wiki-detail.component.html',
  styleUrls: ['./wiki-detail.component.css']
})
export class WikiDetailComponent implements OnInit {

  wid: string;
	wiki: Wiki ={
		name : "",
		src : "",
		_id : ""
	}

  constructor(private wikiService: WikiService, private activatedRoute: ActivatedRoute, private sanitizer: DomSanitizer) { }

  ngOnInit() {
  	this.activatedRoute.params.subscribe(
	  		params => {
	  			this.wid = params['wid'];
	  			this.wikiService.findWikiById(this.wid).subscribe(
	  					(wiki: Wiki) => {
	  						this.wiki = wiki;
	  					}
	  				)
	  		}
	  	)
  }

  	santizerUrl(url) {
  		return this.sanitizer.bypassSecurityTrustResourceUrl(url);
    }

}
