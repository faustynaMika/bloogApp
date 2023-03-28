import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";


@Injectable()
export class RestService {

  constructor(private http: HttpClient) {
  }

  makeGetRequest(url: string): Observable<any> {
    return this.http.get(url)
  }

}
