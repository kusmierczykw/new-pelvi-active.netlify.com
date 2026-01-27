import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeroSection } from './sections/hero-section/hero-section';
import { Navbar } from '@ui/components/navbar/navbar';
import { Booksy } from '@ui/components/booksy/booksy';
import { AboutMeSection } from './sections/about-me-section/about-me-section';
import { CoursesSection } from './sections/courses-section/courses-section';
import { PricesSection } from './sections/prices-section/prices-section';
import { ContactSection } from './sections/contact-section/contact-section';
import { FooterSection } from './sections/footer-section/footer-section';
import { OfferSection } from './sections/offer-section/offer-section';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    HeroSection,
    Navbar,
    Booksy,
    AboutMeSection,
    CoursesSection,
    PricesSection,
    ContactSection,
    FooterSection,
    OfferSection,
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {}
