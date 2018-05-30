import { Component, OnInit } from '@angular/core';
declare var jQuery: any;
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  	 jQuery(function () {
  		jQuery('.my-popover').popover()
	})
  }

}
