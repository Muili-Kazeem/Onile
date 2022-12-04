import { TestBed } from '@angular/core/testing';

import { GameResolverResolver } from './game-resolver.resolver';

describe('GameResolverResolver', () => {
  let resolver: GameResolverResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(GameResolverResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
