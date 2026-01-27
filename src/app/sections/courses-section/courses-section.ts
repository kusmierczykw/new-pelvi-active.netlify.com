import { Component } from '@angular/core';
import { SectionContainer } from '@ui/components/section-container/section-container';
import { SectionTitle } from '@ui/components/section-title/section-title';
import { CircleDecor } from '@ui/components/circle-decor/circle-decor';

@Component({
  selector: 'app-courses-section',
  imports: [SectionContainer, SectionTitle, CircleDecor],
  templateUrl: './courses-section.html',
  styleUrl: './courses-section.scss',
})
export class CoursesSection {}
