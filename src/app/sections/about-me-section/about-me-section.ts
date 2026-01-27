import { Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { SectionTitle } from '@ui/components/section-title/section-title';
import { Button } from '@ui/components/button/button';
import { SectionContainer } from '@ui/components/section-container/section-container';

@Component({
  selector: 'app-about-me-section',
  imports: [NgOptimizedImage, SectionTitle, Button, SectionContainer],
  templateUrl: './about-me-section.html',
  styleUrl: './about-me-section.scss',
})
export class AboutMeSection {}
