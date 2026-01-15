import { Component, EventEmitter, Input, Output, output } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  @Input() isDark = false;
  @Output() private themeToggle = new EventEmitter<void>();

  onToggleClick()
  {
    this.themeToggle.emit();
  }

}
