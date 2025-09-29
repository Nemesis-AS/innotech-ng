import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeHowTo } from './home-how-to';

describe('HomeHowTo', () => {
  let component: HomeHowTo;
  let fixture: ComponentFixture<HomeHowTo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeHowTo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeHowTo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
