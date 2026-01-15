import { Component, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './header/header';
import { Footer } from './footer/footer';
import { Theme } from './service/theme';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Header,Footer],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  //protected readonly title = signal('thinkingInCode');
 private themeService = inject(Theme);
  isDarkTheme:boolean=false;

  toggleTheme()
  {
    this.isDarkTheme=!this.isDarkTheme;
    this.themeService.toggleTheme();
  }
}
