import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePrize } from './home-prize';

describe('HomePrize', () => {
  let component: HomePrize;
  let fixture: ComponentFixture<HomePrize>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomePrize]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomePrize);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
