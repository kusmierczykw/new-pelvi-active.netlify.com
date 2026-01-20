import { Component } from '@angular/core';
import { SectionContainer } from '@ui/section-container/section-container';
import { SectionTitle } from '@ui/section-title/section-title';
import { ContactIcon } from '@ui/contact-icon/contact-icon';

@Component({
  selector: 'app-contact-section',
  imports: [SectionContainer, SectionTitle, ContactIcon],
  templateUrl: './contact-section.html',
  styleUrl: './contact-section.scss',
})
export class ContactSection {}
