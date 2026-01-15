import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Theme {

  private darkTheme = new BehaviorSubject<boolean>(false);
  isDark$= this.darkTheme.asObservable();

  toggleTheme() {
    this.darkTheme.next(!this.darkTheme.value);
  }

  get currentTheme() {
    return this.darkTheme.value;
  }


  
}
