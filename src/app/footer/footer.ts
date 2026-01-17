import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from "@angular/router";

@Component({
  selector: 'app-footer',
  imports: [RouterLink, RouterLinkActive, CommonModule],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
})
export class Footer {
 activeLink:String='Home'

 setActive(link:String)
 {
  debugger
  this.activeLink=link;
 }

}
