import { TestBed } from '@angular/core/testing';

import { AdminGuard,RegisterGuard} from './Main.guard';

describe('Guard', () => {
  let guard: AdminGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AdminGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});

describe('Guard', () => {
  let guard: RegisterGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(RegisterGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});

