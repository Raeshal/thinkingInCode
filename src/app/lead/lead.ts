import { Component, inject, Input } from '@angular/core';
import { Theme } from '../service/theme';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lead',
  imports: [],
  templateUrl: './lead.html',
  styleUrl: './lead.scss',
})
export class Lead {
     isDark:boolean = false;
     intro:string="Hey there! I'm Raeshal Khurana <br> A Full Stack Web Developer"
    private themeService=inject(Theme)
    constructor(private route:Router)
    {
     this.themeService.isDark$.subscribe((res=>
     {
      this.isDark=res;
     }
     ))
    }

    downloadDoc()
    {
       window.open('/Raeshal-Khurana-FSD-Resume.pdf', '_blank');
    }
    navigateTo()
    {
      this.route.navigate(['contact']);
    }


}
