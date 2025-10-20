import { Routes } from '@angular/router';
import {ChangeDetectionComponent} from './change-detection/change-detection.component';
import {Sheeps} from './components/sheeps/sheeps';

export const routes: Routes = [
  {
    path: '',
    component: Sheeps
  },
  {
    path:'change',
    loadComponent:() => ChangeDetectionComponent,
  },
];
