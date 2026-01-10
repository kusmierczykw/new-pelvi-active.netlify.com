import { Component, input } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-booksy',
  imports: [NgOptimizedImage],
  templateUrl: './booksy.html',
  styleUrl: './booksy.scss',
})
export class Booksy {
  readonly withLabel = input(false);
}
