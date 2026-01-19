import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeroSection } from './sections/hero-section/hero-section';
import { Navbar } from '@ui/navbar/navbar';
import { Booksy } from '@ui/booksy/booksy';
import { AboutMeSection } from './sections/about-me-section/about-me-section';
import { CoursesSection } from './sections/courses-section/courses-section';
import { OfferSection } from './sections/offer-section/offer-section';
import { PricesSection } from './sections/prices-section/prices-section';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    HeroSection,
    Navbar,
    Booksy,
    AboutMeSection,
    CoursesSection,
    OfferSection,
    PricesSection,
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {}
