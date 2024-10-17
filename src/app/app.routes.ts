import { Routes } from '@angular/router';
import {SubConsultComponent} from './sub/sub-consult/sub-consult.component';
import {HomeComponent} from './home/home.component';
import {ConsultDetails1Component} from './sub/sub-consult/consult-details1/consult-details1.component';
import {NotFoundComponent} from './not-found/not-found.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'consults', component: SubConsultComponent },
  { path: 'consultdetails', component: ConsultDetails1Component },
  { path: '**', component: NotFoundComponent }
];
