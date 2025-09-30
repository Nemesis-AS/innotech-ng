import { Component } from '@angular/core';

@Component({
  selector: 'app-home-header',
  imports: [],
  templateUrl: './home-header.html',
  styleUrl: './home-header.css',
})
export class HomeHeader {
  menuOpen = false;

  links: { label: string; href: string }[] = [
    { label: 'Categories', href: '#categories' },
    { label: 'Timeline', href: '#timeline' },
    { label: 'Domains', href: '#domains' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Contact Us', href: '#contact' },
  ];
  cta?: { label: string; href: string };

  isLoggedIn: boolean = false;

  constructor() {
    if (typeof localStorage !== 'undefined' && localStorage.getItem('INNOTECH_USER_DATA')) {
      this.isLoggedIn = true;
    }
  }

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }
}
