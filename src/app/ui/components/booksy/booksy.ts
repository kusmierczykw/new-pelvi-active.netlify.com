import { Component, input, signal } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { Icon } from '@ui/components/icon/icon';

@Component({
  selector: 'app-booksy',
  imports: [NgOptimizedImage, Icon],
  templateUrl: './booksy.html',
  styleUrl: './booksy.scss',
})
export class Booksy {
  readonly withLabel = input(false);
  readonly withCloseButton = input(true);
  readonly visible = signal<boolean>(true);

  protected handleCloseClick(event: MouseEvent): void {
    this.visible.set(false);

    event.preventDefault();
  }
}
