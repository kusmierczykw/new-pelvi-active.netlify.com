import { Component } from '@angular/core';
import { OfferEntry } from '@ui/components/offer-entry/offer-entry';

@Component({
  selector: 'app-offer-section',
  imports: [OfferEntry],
  templateUrl: './offer-section.html',
  styleUrl: './offer-section.scss',
})
export class OfferSection {}
