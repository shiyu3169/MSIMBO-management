import { Component, OnInit, ViewChild } from '@angular/core';
import { WikiService } from '../../services/wiki.service.client';
import { Wiki } from '../../models/wiki.model.client';
import { NgForm } from '@angular/forms';
import { SharedService } from '../../services/shared.service.client';

@Component({
	selector: 'app-wiki',
	templateUrl: './wiki.component.html',
	styleUrls: ['./wiki.component.css']
})
export class WikiComponent implements OnInit {

	inputName: string;
	wikis: Wiki[];

	constructor(private wikiService: WikiService, public sharedService: SharedService) { }

	ngOnInit() {
		this.wikiService.findWikis().subscribe(
			(assignments: Wiki[]) => {
				this.wikis = assignments;
				this.filterWiki();
			}
		);
	}

	filterWiki(){
        let tr = document.querySelectorAll('tr.sw-wiki');
        // console.log(tr);
        for(let i=0;i<tr.length;i++){
            let a = tr[i].querySelector('a');
            // console.log(a);
            let item = <HTMLElement>tr[i];
            if(a && a.innerHTML.toUpperCase().includes(this.inputName.toUpperCase())){
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        }
    }

}
