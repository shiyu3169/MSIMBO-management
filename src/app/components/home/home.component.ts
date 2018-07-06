import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
declare var jQuery: any;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit() {
  	jQuery('.carousel').carousel({
  		interval: 3000
	})
  }

  // getUrl(link) {
  // 	return this.sanitizer.bypassSecurityTrustUrl(link);
  // }


}
