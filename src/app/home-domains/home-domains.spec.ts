import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeDomains } from './home-domains';

describe('HomeDomains', () => {
  let component: HomeDomains;
  let fixture: ComponentFixture<HomeDomains>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeDomains]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeDomains);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
