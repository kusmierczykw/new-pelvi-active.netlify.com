import { Component } from '@angular/core';
import { SectionContainer } from '@ui/components/section-container/section-container';
import { SectionTitle } from '@ui/components/section-title/section-title';
import { ContactIcon } from '@ui/components/contact-icon/contact-icon';

@Component({
  selector: 'app-contact-section',
  imports: [SectionContainer, SectionTitle, ContactIcon],
  templateUrl: './contact-section.html',
  styleUrl: './contact-section.scss',
})
export class ContactSection {}
