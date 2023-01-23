import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarsAutoCompleteComponent } from './mars-auto-complete.component';

describe('MarsAutoCompleteComponent', () => {
  let component: MarsAutoCompleteComponent;
  let fixture: ComponentFixture<MarsAutoCompleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MarsAutoCompleteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MarsAutoCompleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
