import { Component, input } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { SectionTitle } from '@ui/components/section-title/section-title';
import { RevealStagger } from '@ui/components/reveal-stagger/reveal-stagger';

@Component({
  selector: 'app-offer-entry',
  imports: [NgOptimizedImage, SectionTitle, RevealStagger],
  templateUrl: './offer-entry.html',
  styleUrl: './offer-entry.scss',
})
export class OfferEntry {
  readonly imageSrc = input<string>('');
  readonly reverse = input(false);
}
