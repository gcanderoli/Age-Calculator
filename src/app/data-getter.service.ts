import { Injectable } from '@angular/core';

import { Http, Response } from '@angular/http';

import 'rxjs/add/operator/map';


@Injectable()
export class DataGetterService {

  constructor(private http: Http) { }


  getData() {
    let serviceUrl = 'https://restcountries.eu/rest/v2/all';

    return this.http.get(serviceUrl)
      .map((res: Response) => res.json());
  }
}