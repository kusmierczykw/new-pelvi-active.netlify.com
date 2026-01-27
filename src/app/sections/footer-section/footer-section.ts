import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-footer-section',
  templateUrl: './footer-section.html',
  styleUrl: './footer-section.scss',
})
export class FooterSection {
  readonly year = signal(new Date().getFullYear());
}
