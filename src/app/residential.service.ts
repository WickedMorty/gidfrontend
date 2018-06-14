import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {IResidential} from './residential';
import {Observable} from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class ResidentialService {

  private _url: string = 'http://192.168.9.155:8090/api/residential/all';

  constructor(private http: HttpClient) { }

  getResidential(): Observable<IResidential[]> {
    return this.http.get<IResidential[]>(this._url);
  }
}