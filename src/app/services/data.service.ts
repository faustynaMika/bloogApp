import {Injectable} from '@angular/core';
import {RestService} from "./rest.service";
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";


interface Result {
  abstract: string;
  byline: string;
  created_date: string;
  des_facet: string[];
  geo_facet: string[];
  item_type: string;
  kicker: string;
  material_type_facet: string;
  multimedia: {
    caption: string;
    copyright: string;
    format: string;
    height: number;
    subtype: string;
    type: string;
    url: string;
    width: number
  }[]
  org_facet: string[];
  per_facet: string[];
  published_date: string;
  section: string;
  short_url: string;
  subsection: string;
  title: string;
  updated_date: string;
  uri: string;
  url: string;
}

export interface TimesResponse extends Response {
  copyright: string
  last_updated: Date
  num_results: number
  results: Result[]
}

@Injectable()
export class DataService {

  private url: string = 'https://api.nytimes.com/svc/topstories/v2/'

  constructor(private restService: RestService) {
  }

  getTimesWorldData(): Observable<TimesResponse> {
    return this.restService.makeGetRequest(this.url + 'world.json?api-key=' + environment.timesApiKey);
  }
}
