import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonsterAlgoliaComponent } from './monster-algolia.component';

describe('MonsterAlgoliaComponent', () => {
  let component: MonsterAlgoliaComponent;
  let fixture: ComponentFixture<MonsterAlgoliaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MonsterAlgoliaComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MonsterAlgoliaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
