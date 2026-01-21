import { Routes } from '@angular/router';
import { Lead } from './lead/lead';
import { About } from './about/about';
import { Experience } from './experience/experience';
import { Contact } from './contact/contact';

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
  },
  {
  path:'contact',
  component:Contact
  }

];

