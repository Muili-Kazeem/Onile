import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameGenreCompComponent } from './game-genre-comp.component';

describe('GameGenreCompComponent', () => {
  let component: GameGenreCompComponent;
  let fixture: ComponentFixture<GameGenreCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GameGenreCompComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GameGenreCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
