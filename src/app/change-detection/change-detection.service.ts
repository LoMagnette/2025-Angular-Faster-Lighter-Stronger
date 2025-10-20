import {Injectable, signal} from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable(
  {
    providedIn: 'root'
  }
)
export class ChangeDetectionService {
    private _count = signal<number>(0);
    private _countSubject = new BehaviorSubject<number>(0);

    count = this._count.asReadonly();
    count$ = this._countSubject.asObservable();

    incrementCountObs(){
      this._countSubject.next(this._countSubject.value+1);
    }
    incrementCount(){
      this._count.update(v => v+1);
    }


}
