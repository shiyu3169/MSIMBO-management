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

	name: string = "";
	src: string = "";

    selectedWiki: Wiki = {
        name: "",
        src: ""
    };

	constructor(private wikiService: WikiService, public sharedService: SharedService) { }

	ngOnInit() {
        this.inputName = "";
        this.name = "";
        this.src = "";
		this.wikiService.findWikis().subscribe(
			(wikis: Wiki[]) => {
				this.wikis = wikis;
			}
		);
	}

    update() {
        this.selectedWiki.name = this.name;
        this.selectedWiki.src = this.src;
        this.wikiService.updateWiki(this.selectedWiki._id, this.selectedWiki).subscribe(
            (res: any) => {
                jQuery('#editModal').modal('hide');
                this.ngOnInit();
            }
        );
    }

    remove() {
        this.wikiService.deleteWiki(this.selectedWiki._id).subscribe(
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

    select(wiki) {
        this.selectedWiki = wiki;
        this.name = wiki.name;
        this.src = wiki.src;
    }

}
