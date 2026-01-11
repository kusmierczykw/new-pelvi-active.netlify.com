import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeroSection } from './sections/hero-section/hero-section';
import { Navbar } from '@ui/navbar/navbar';
import { Booksy } from '@ui/booksy/booksy';
import { AboutMeSection } from './sections/about-me-section/about-me-section';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeroSection, Navbar, Booksy, AboutMeSection],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {}
