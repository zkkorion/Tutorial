import { Component, OnInit } from '@angular/core';
import { HttpClientService } from '../../services/http-client.service';

@Component({
    selector: 'app-users',
    templateUrl: './users.component.html',
    styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

    constructor(
        private httpService: HttpClientService,
    ) { }

    ngOnInit(): void {

    }

    public addUser(): void {
        let newUser = {
            name: 'Jhony',
            age: 22,
        };
        this.httpService.postEntity('users', JSON.stringify(newUser)).subscribe(res => { console.log(res); });
    }

    public getUsers(): void {
        this.httpService.getEntity('users').subscribe(users => {
            console.log(users);
        });
    }

}
