import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home-hero',
  imports: [RouterLink],
  templateUrl: './home-hero.html',
  styleUrl: './home-hero.css',
})
export class HomeHero {
  heroBackground = 'assets/hero-bg.jpg';

  stats = [
    { number: '500+', label: 'Participants' },
    { number: '7', label: 'Categories' },
    { number: '₹4L+', label: 'Prize Pool' },
    { number: '200+', label: 'Awards' },
  ];

  particles = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    top: `${Math.random() * 100}%`,
    delay: `${Math.random() * 3}s`,
  }));
}
