import { Component } from '@angular/core';
import { Scrolling } from '@ui/scrolling/scrolling';

@Component({
  selector: 'app-hero-section',
  imports: [Scrolling],
  templateUrl: './hero-section.html',
  styleUrl: './hero-section.scss',
})
export class HeroSection {}
