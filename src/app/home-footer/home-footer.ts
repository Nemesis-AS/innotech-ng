import { Component } from '@angular/core';
import { KeyValuePipe } from '@angular/common';

@Component({
  selector: 'app-home-footer',
  imports: [KeyValuePipe],
  templateUrl: './home-footer.html',
  styleUrl: './home-footer.css',
})
export class HomeFooter {
  currentYear: number = new Date().getFullYear();

  footerLinks: Record<string, { name: string; href: string }[]> = {
    'Quick Links': [
      { name: 'About Innotech', href: '#top' },
      { name: 'Categories', href: '#categories' },
      { name: 'Timeline', href: '#timeline' },
      { name: 'Domains', href: '#domains' },
      { name: 'Gallery', href: '#gallery' },
      // { name: 'Team', href: '#team' },
    ],
    'Participate & Connect': [
      { name: 'Register Now', href: '#register' },
      { name: 'Contact Us', href: '#contact' },
      { name: 'Special Attractions', href: '#sponsors' },
      // { name: 'Event Rules', href: '#rules' },
      // { name: 'Submission Guidelines', href: '#guidelines' },
      // { name: 'FAQ', href: '#faq' },
    ],
    // 'Connect': [
    // { name: 'Partners', href: '#partners' },
    // { name: 'Media Kit', href: '#media' },
    // ]
  };

  socialLinks = [
    {
      name: 'Instagram',
      icon: 'https://res.cloudinary.com/dbugu6aej/image/upload/v1758241490/Instagram_icon_ng3tfz.png',
      href: 'https://www.instagram.com/kiet_edu',
      color: 'hover:text-neon-pink',
    },
    {
      name: 'LinkedIn',
      icon: 'https://res.cloudinary.com/dbugu6aej/image/upload/v1758241425/LinkedIn_logo_initials_jfudmk.png',
      href: 'https://www.linkedin.com/school/kiet-group-of-institutions/',
      color: 'hover:text-neon-cyan',
    },
    {
      name: 'Twitter',
      icon: 'https://res.cloudinary.com/dbugu6aej/image/upload/v1758241634/X_logo_2023__white_-Photoroom_d2nn29.png',
      href: 'https://twitter.com/Kiet_edu',
      color: 'hover:text-neon-purple',
    },
    // { name: 'Discord', icon: '🎮', href: '#', color: 'hover:text-neon-cyan' },
    {
      name: 'YouTube',
      icon: 'https://res.cloudinary.com/dbugu6aej/image/upload/v1759134383/youtube-color-svgrepo-com_a6fs32.svg',
      href: 'https://twitter.com/Kiet_edu',
      color: 'hover:text-neon-pink',
    },
  ];

  particles = Array.from({ length: 8 }, (_, i) => i);
}
