import { Routes } from '@angular/router';
import { Lead } from './lead/lead';
import { About } from './about/about';

export const routes: Routes = [
   
  {
    path: '',
    component: Lead  
  },
  {
    path:'about',
    component:About
  }
];

