import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ApiService } from '../api-service';

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
    { number: '100+', label: 'Teams' },
    // { number: '7', label: 'Categories' },
    { number: '₹3L+', label: 'Prize Pool' },
    { number: '100+', label: 'Awards' },
  ];

  particles = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    top: `${Math.random() * 100}%`,
    delay: `${Math.random() * 3}s`,
  }));

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.apiService.getStats().subscribe((stats) => {
      this.stats[0].number = `${stats.totalParticipants}+`;
      this.stats[1].number = `${stats.totalTeams}+`;
    });
  }
}
