import { Component } from '@angular/core';
import { Fullscreen } from '@ui/fullscreen/fullscreen';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-about-me-section',
  imports: [Fullscreen, NgOptimizedImage],
  templateUrl: './about-me-section.html',
  styleUrl: './about-me-section.scss',
})
export class AboutMeSection {}
