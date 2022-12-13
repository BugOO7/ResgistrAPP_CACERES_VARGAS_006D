import { TestBed } from '@angular/core/testing';

import { Noingresado2Guard } from './noingresado2.guard';

describe('Noingresado2Guard', () => {
  let guard: Noingresado2Guard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(Noingresado2Guard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
