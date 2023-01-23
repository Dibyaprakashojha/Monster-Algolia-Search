import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarsAlgoliaComponent } from './mars-algolia.component';

describe('MarsAlgoliaComponent', () => {
  let component: MarsAlgoliaComponent;
  let fixture: ComponentFixture<MarsAlgoliaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MarsAlgoliaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MarsAlgoliaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
