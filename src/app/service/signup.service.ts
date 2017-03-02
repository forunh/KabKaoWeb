import {Injectable} from '@angular/core';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import { User } from '../model/user';
import 'rxjs/add/operator/map';

@Injectable()
export class SignUpService {
    private headers = new Headers({'Content-Type': 'application/json'});
    constructor(private http:Http) { }

    public addUser(user: User) {
        return this.http.post('http://52.187.62.107:10300/authen/sign_up', JSON.stringify(user), {headers: this.headers})
                .map((res: Response) => res.json());
    }
}