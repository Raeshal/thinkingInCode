import { Routes } from '@angular/router';
import { Lead } from './lead/lead';
import { About } from './about/about';
import { Experience } from './experience/experience';

export const routes: Routes = [
   
  {
    path: '',
    component: Lead  
  },
  {
    path:'about',
    component:About
  },
  {
  path:'experience',
  component:Experience
  }

];

