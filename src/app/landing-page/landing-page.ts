import { Component } from '@angular/core';

import { HomeHero } from '../home-hero/home-hero';
import { HomeAbout } from '../home-about/home-about';
import { HomeTimeline } from '../home-timeline/home-timeline';
import { HomeDomains } from '../home-domains/home-domains';
import { HomePrize } from '../home-prize/home-prize';
import { HomeFooter } from '../home-footer/home-footer';
import { HomeStatements } from '../home-statements/home-statements';
import { HomeSponsors } from '../home-sponsors/home-sponsors';

@Component({
  selector: 'app-landing-page',
  imports: [HomeHero, HomeAbout, HomePrize, HomeTimeline, HomeDomains, HomeStatements, HomeSponsors, HomeFooter],
  templateUrl: './landing-page.html',
  styleUrl: './landing-page.css'
})
export class LandingPage {

}
