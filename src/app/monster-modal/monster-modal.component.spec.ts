import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonsterModalComponent } from './monster-modal.component';

describe('MonsterModalComponent', () => {
  let component: MonsterModalComponent;
  let fixture: ComponentFixture<MonsterModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MonsterModalComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MonsterModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
