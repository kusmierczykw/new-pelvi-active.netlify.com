import { Component, signal } from '@angular/core';
import { SectionContainer } from '@ui/section-container/section-container';

@Component({
  selector: 'app-footer-section',
  imports: [SectionContainer],
  templateUrl: './footer-section.html',
  styleUrl: './footer-section.scss',
})
export class FooterSection {
  readonly year = signal(new Date().getFullYear());
}
