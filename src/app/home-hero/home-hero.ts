import { Component } from '@angular/core';

@Component({
  selector: 'app-home-hero',
  imports: [],
  templateUrl: './home-hero.html',
  styleUrl: './home-hero.css',
})
export class HomeHero {
  heroBackground = 'assets/hero-bg.jpg';

  stats = [
    { number: '500+', label: 'Participants' },
    { number: '15', label: 'Events' },
    { number: '₹5L', label: 'Prize Pool' },
    { number: '3', label: 'Days' },
  ];

  particles = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    top: `${Math.random() * 100}%`,
    delay: `${Math.random() * 3}s`,
  }));
}
