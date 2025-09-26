import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeStatements } from './home-statements';

describe('HomeStatements', () => {
  let component: HomeStatements;
  let fixture: ComponentFixture<HomeStatements>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeStatements]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeStatements);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
