import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()

export class LoginService {

    private loginUserList = 'http://localhost:3000/loginCredentials';
    private isUserLoggedIn;
    private useremail;

    constructor(private http: Http) {
        this.isUserLoggedIn = false;
    }

    setUserLoggedIn() {
        this.isUserLoggedIn = true;
    }

    getUserLoggedIn() {
        return this.isUserLoggedIn;
    }

    public getUserList(): Promise<Object> {
        return this.http.get(this.loginUserList)
        .toPromise()
        .then((response) => {
            return response.json();
        }).catch((err) => {
            console.log(err);
        });
    }

    public getLoggedInUserDetails(id) {
        return this.http.get(this.loginUserList + '?userid=' + id)
            .toPromise()
            .then((response) => {
                return response.json();
            }).catch((err) => {
                console.log(err);
            });
    }

}
