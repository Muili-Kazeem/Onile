import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameSearchCompComponent } from './game-search-comp.component';

describe('GameSearchCompComponent', () => {
  let component: GameSearchCompComponent;
  let fixture: ComponentFixture<GameSearchCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GameSearchCompComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GameSearchCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
