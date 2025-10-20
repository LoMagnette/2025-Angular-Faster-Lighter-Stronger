import {inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Sheep} from '../models/sheep';

@Injectable({
  providedIn: 'root'
})
export class SheepService {

  private http = inject<HttpClient>(HttpClient)

  constructor() {

  }

  getSheep(){
    return this.http.get<Sheep[]>(`http://localhost:8080/sheeps`);
  }
}
