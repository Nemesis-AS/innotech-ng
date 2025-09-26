import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeSponsors } from './home-sponsors';

describe('HomeSponsors', () => {
  let component: HomeSponsors;
  let fixture: ComponentFixture<HomeSponsors>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeSponsors]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeSponsors);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
