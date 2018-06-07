import { Component, OnInit, ViewChild } from '@angular/core';
import { WikiService } from '../../services/wiki.service.client';
import { Wiki } from '../../models/wiki.model.client';
import { NgForm } from '@angular/forms';

@Component({
	selector: 'app-wiki',
	templateUrl: './wiki.component.html',
	styleUrls: ['./wiki.component.css']
})
export class WikiComponent implements OnInit {

	wikis: Wiki[];

	constructor(private wikiService: WikiService) { }

	ngOnInit() {
		this.wikiService.findWikis().subscribe(
			(assignments: Wiki[]) => {
				this.wikis = assignments;
			}
		);
	}

}
