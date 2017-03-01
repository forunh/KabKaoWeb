import {Injectable} from '@angular/core';
import {Http, Response, Headers, RequestOptions} from "@angular/http";
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';

@Injectable()
export class ExampleService {

    constructor(private http:Http) {
    }

    public getFoursquare(){
        return Observable.forkJoin(
        this.http.get('https://api.foursquare.com/v2/venues/4c034d0cf56c2d7fa6c71c66/?client_id=2ANDJSV5P2FT3GNVOQNSDQQSPJ5XRNO5XQR2COKWNG0I1K5C&client_secret=NXTDWJVI4RNEKJIBAUIQBKCHL1IWYIJST1YOKOJOYFWNY4KT&v=20161019&limit=500')
            .map((res:Response) => res.json())
        );
    }

    // createFood(food) {
    //     let headers = new Headers({'Content-Type': 'application/json'});
    //     let options = new RequestOptions({headers: headers});
    //     let body = JSON.stringify(food);
    //     // Note: This is only an example. The following API call will fail because there is no actual API to talk to.
    //     return this.http.post('/api/food/', body, headers).map((res:Response) => res.json());
    // }

    // updateFood(food) {
    //     let headers = new Headers({'Content-Type': 'application/json'});
    //     let options = new RequestOptions({headers: headers});
    //     let body = JSON.stringify(food);
    //     // Note: This is only an example. The following API call will fail because there is no actual API to talk to.
    //     return this.http.put('/api/food/' + food.id, body, headers).map((res:Response) => res.json());
    // }

    // deleteFood(food) {
    //     // Note: This is only an example. The following API call will fail because there is no actual API to talk to.
    //     return this.http.delete('/api/food/' + food.id);
    // }
}
