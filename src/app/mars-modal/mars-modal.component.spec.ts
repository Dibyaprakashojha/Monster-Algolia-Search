import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarsModalComponent } from './mars-modal.component';

describe('MarsModalComponent', () => {
  let component: MarsModalComponent;
  let fixture: ComponentFixture<MarsModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MarsModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MarsModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
