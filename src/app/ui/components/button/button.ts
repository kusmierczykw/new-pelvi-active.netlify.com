import { Component, output } from '@angular/core';

@Component({
  selector: 'app-button',
  imports: [],
  templateUrl: './button.html',
  styleUrl: './button.scss',
})
export class Button {
  readonly clickEvent = output<void>();

  protected handleClick() {
    this.clickEvent.emit();
  }
}
