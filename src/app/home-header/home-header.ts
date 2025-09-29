import { Component } from '@angular/core';
// import { HomeHowTo } from '../home-how-to/home-how-to';

@Component({
  selector: 'app-home-header',
  imports: [],
  templateUrl: './home-header.html',
  styleUrl: './home-header.css',
})
export class HomeHeader {
  logoSrc?: string =
    'https://res.cloudinary.com/dbugu6aej/image/upload/v1759128744/KIET_LOGO_tiizw3.png';
  title: string = 'Innotech 25';
  subtitle: string = 'Innotech 25';
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
}
