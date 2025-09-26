import { Component } from '@angular/core';
import { KeyValuePipe } from '@angular/common';

@Component({
  selector: 'app-home-footer',
  imports: [KeyValuePipe],
  templateUrl: './home-footer.html',
  styleUrl: './home-footer.css'
})
export class HomeFooter {
  currentYear: number = new Date().getFullYear();

  footerLinks: Record<string, { name: string; href: string }[]> = {
    'Quick Links': [
      { name: 'About Innotech', href: '#about' },
      { name: 'Events', href: '#events' },
      { name: 'Timeline', href: '#timeline' },
      { name: 'Prizes', href: '#prizes' },
      { name: 'Gallery', href: '#gallery' },
      { name: 'Team', href: '#team' },
    ],
    'Participate': [
      { name: 'Register Now', href: '#register' },
      { name: 'Event Rules', href: '#rules' },
      { name: 'Submission Guidelines', href: '#guidelines' },
      { name: 'FAQ', href: '#faq' },
    ],
    'Connect': [
      { name: 'Contact Us', href: '#contact' },
      { name: 'Sponsors', href: '#sponsors' },
      { name: 'Partners', href: '#partners' },
      { name: 'Media Kit', href: '#media' },
    ]
  };

  socialLinks = [
    { name: 'Instagram', icon: '📷', href: '#', color: 'hover:text-neon-pink' },
    { name: 'LinkedIn', icon: '💼', href: '#', color: 'hover:text-neon-cyan' },
    { name: 'Twitter', icon: '🐦', href: '#', color: 'hover:text-neon-purple' },
    { name: 'Discord', icon: '🎮', href: '#', color: 'hover:text-neon-cyan' },
    { name: 'YouTube', icon: '📺', href: '#', color: 'hover:text-neon-pink' },
  ];

  particles = Array.from({ length: 8 }, (_, i) => i);
}
