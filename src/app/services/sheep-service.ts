import {inject, Injectable, resource} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Sheep} from '../models/sheep';
import {rxResource} from '@angular/core/rxjs-interop';

@Injectable({
  providedIn: 'root'
})
export class SheepService {

  private http = inject<HttpClient>(HttpClient)

  constructor() {

  }

  getSheep() {
    return resource<Sheep[],unknown>({
      loader: () => fetch('http://localhost:8080/sheeps').then(res => res.json() || [] )
    });
  }
}
