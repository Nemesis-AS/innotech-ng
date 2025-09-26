import { Component } from '@angular/core';

@Component({
  selector: 'app-home-prize',
  imports: [],
  templateUrl: './home-prize.html',
  styleUrl: './home-prize.css',
})
export class HomePrize {
  prizes = [
    {
      place: '1st',
      title: 'Champion',
      amount: '₹2,00,000',
      perks: ['Cash Prize', 'Internship Offers', 'Mentorship Program', 'Certificate'],
      icon: '👑',
      color: 'neon-cyan',
      glow: 'shadow-[0_0_40px_rgba(0,255,255,0.4)]',
    },
    {
      place: '2nd',
      title: 'Runner Up',
      amount: '₹1,50,000',
      perks: ['Cash Prize', 'Tech Goodies', 'Industry Connect', 'Certificate'],
      icon: '🥈',
      color: 'neon-purple',
      glow: 'shadow-[0_0_40px_rgba(139,92,246,0.4)]',
    },
    {
      place: '3rd',
      title: 'Second Runner Up',
      amount: '₹1,00,000',
      perks: ['Cash Prize', 'Swag Kit', 'Workshop Access', 'Certificate'],
      icon: '🥉',
      color: 'neon-pink',
      glow: 'shadow-[0_0_40px_rgba(236,72,153,0.4)]',
    },
  ];

  specialPerks = [
    { icon: '🎯', title: 'Best Innovation', desc: 'Special recognition for groundbreaking ideas' },
    { icon: '👥', title: "People's Choice", desc: 'Voted by participants and audience' },
    { icon: '💡', title: 'Most Creative', desc: 'For out-of-the-box thinking' },
    { icon: '⚡', title: 'Fastest Solution', desc: 'Speed and efficiency combined' },
  ];

  additionalBenefits = [
    'Participation Certificate',
    'Networking Opportunities',
    'Workshop Access',
    'Swag & Goodies',
  ];
}
