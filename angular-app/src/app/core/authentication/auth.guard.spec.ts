import { TestBed, async, inject } from '@angular/core/testing';

import { OccupantGuard } from './occupant.guard';

describe('OccupantGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OccupantGuard]
    });
  });

  it('should ...', inject([OccupantGuard], (guard: OccupantGuard) => {
    expect(guard).toBeTruthy();
  }));
});
