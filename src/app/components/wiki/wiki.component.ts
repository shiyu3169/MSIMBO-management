import { Component, OnInit, ViewChild } from '@angular/core';
import { WikiService } from '../../services/wiki.service.client';
import { Wiki } from '../../models/wiki.model.client';
import { NgForm } from '@angular/forms';
import { SharedService } from '../../services/shared.service.client';
declare var jQuery: any;

@Component({
	selector: 'app-wiki',
	templateUrl: './wiki.component.html',
	styleUrls: ['./wiki.component.css']
})
export class WikiComponent implements OnInit {

	inputName: string;
	wikis: Wiki[];
	name: string;
	src: string;
    newWiki: Wiki = {
        name: "",
        src: ""
    };

	constructor(private wikiService: WikiService, public sharedService: SharedService) { }

	ngOnInit() {
        this.inputName = "";
		this.wikiService.findWikis().subscribe(
			(wikis: Wiki[]) => {
				this.wikis = wikis;
			}
		);
	}

    update(wiki: Wiki) {
        this.wikiService.updateWiki(wiki._id, wiki).subscribe(
            (res: any) => {
                jQuery('#editModal').modal('hide');
            }
        );
    }

    remove(wiki: Wiki) {
        this.wikiService.deleteWiki(wiki._id).subscribe(
            (res: any) => {
                jQuery('#removeModal').modal('hide');
                this.ngOnInit();
            }
        );
    }

    create() {
        const wiki2: Wiki = {
          name: this.name,
          src: this.src
        }
        this.wikiService.createWiki(wiki2).subscribe(
            (res: any) => {
                jQuery('#newModal').modal('hide');
                this.ngOnInit();
            }
        )
    }

    init(wiki) {
        this.newWiki = wiki;
    }

}
