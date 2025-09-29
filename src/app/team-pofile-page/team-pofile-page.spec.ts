import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamPofilePage } from './team-pofile-page';

describe('TeamPofilePage', () => {
  let component: TeamPofilePage;
  let fixture: ComponentFixture<TeamPofilePage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TeamPofilePage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TeamPofilePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
