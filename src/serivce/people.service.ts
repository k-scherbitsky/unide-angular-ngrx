import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IPeopleApiModel, ISwapiResponse } from 'src/state/api/people.api.model';

@Injectable({
  providedIn: 'root',
})
export class PeopleService {

  constructor(private http: HttpClient) {
  }

  public retrievePeople(): Observable<ISwapiResponse<IPeopleApiModel>> {
    return this.http.get<ISwapiResponse<IPeopleApiModel>>('https://swapi.dev/api/people');
  }
}
