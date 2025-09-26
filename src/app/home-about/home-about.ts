import { Component } from '@angular/core';

@Component({
  selector: 'app-home-about',
  imports: [],
  templateUrl: './home-about.html',
  styleUrl: './home-about.css',
})
export class HomeAbout {
  features = [
    {
      icon: '💡',
      title: 'Innovation Challenges',
      desc: 'Push boundaries with real-world problem solving',
    },
    {
      icon: '🏆',
      title: 'Competitive Events',
      desc: 'Showcase skills in coding, design, and robotics',
    },
    {
      icon: '🤝',
      title: 'Industry Connect',
      desc: 'Network with professionals and potential employers',
    },
  ];

  counters = [
    {
      value: 500,
      label: 'Participants',
      suffix: '+',
      color: 'neon-cyan',
    },
    { value: 2, label: 'Events', suffix: '', color: 'neon-purple' },
    { value: 5, label: 'Years', suffix: '', color: 'neon-pink' },
  ];
}
