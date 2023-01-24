import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonsterAutoCompleteComponent } from './monster-auto-complete.component';

describe('MonsterAutoCompleteComponent', () => {
  let component: MonsterAutoCompleteComponent;
  let fixture: ComponentFixture<MonsterAutoCompleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MonsterAutoCompleteComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MonsterAutoCompleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
