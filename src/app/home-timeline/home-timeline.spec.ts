import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeTimeline } from './home-timeline';

describe('HomeTimeline', () => {
  let component: HomeTimeline;
  let fixture: ComponentFixture<HomeTimeline>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeTimeline]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeTimeline);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
