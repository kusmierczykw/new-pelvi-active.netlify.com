import { Component } from '@angular/core';
import { RevealStagger } from '@ui/components/reveal-stagger/reveal-stagger';
import { SectionTitle } from '@ui/components/section-title/section-title';

@Component({
  selector: 'app-offer-section',
  imports: [RevealStagger, SectionTitle],
  templateUrl: './offer-section.html',
  styleUrl: './offer-section.scss',
})
export class OfferSection {}
