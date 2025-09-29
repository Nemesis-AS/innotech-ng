import { TestBed } from '@angular/core/testing';

import { MakeTeamService } from './make-team-service';

describe('MakeTeamService', () => {
  let service: MakeTeamService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MakeTeamService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
