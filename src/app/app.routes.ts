import { Routes } from '@angular/router';
import {SubConsultComponent} from './sub/sub-consult/sub-consult.component';
import {HomeComponent} from './home/home.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'consults', component: SubConsultComponent }
];
