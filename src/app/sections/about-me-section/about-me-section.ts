import { Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { SectionTitle } from '@ui/section-title/section-title';
import { Button } from '@ui/button/button';

@Component({
  selector: 'app-about-me-section',
  imports: [NgOptimizedImage, SectionTitle, Button],
  templateUrl: './about-me-section.html',
  styleUrl: './about-me-section.scss',
})
export class AboutMeSection {}
