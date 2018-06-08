import {Component, OnInit, ViewChild} from '@angular/core';
import {UserService} from '../../services/user.service.client';
import {User} from '../../models/user.model.client';
import {NgForm} from '@angular/forms';

@Component({
    selector: 'app-student-list',
    templateUrl: './student-list.component.html',
    styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {

    users: User[];

    inputName: string;

    constructor(private userService: UserService) { }

    ngOnInit() {
        this.userService.findUsers().subscribe(
            (users:User[]) => {
                this.users = users;
                this.filterUser();
  			// console.log(this.users[1]);
          }
          );
    }

    filterUser(){
        let li = document.querySelectorAll('li.sw-filter');
        // console.log(li);
        for(let i=0;i<li.length;i++){
            let a = li[i].querySelector('h4');
            let item = <HTMLElement>li[i];
            if(a && a.innerHTML.toUpperCase().includes(this.inputName.toUpperCase())){
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        }
    }
}
