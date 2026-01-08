import { Component } from '@angular/core';
import { Fullscreen } from '@ui/fullscreen/fullscreen';
import { Scrolling } from '@ui/scrolling/scrolling';

@Component({
  selector: 'app-hero-section',
  imports: [Fullscreen, Scrolling],
  templateUrl: './hero-section.html',
  styleUrl: './hero-section.scss',
})
export class HeroSection {}
