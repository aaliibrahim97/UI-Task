import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccordingSliderComponent } from './according-slider.component';

describe('AccordingSliderComponent', () => {
  let component: AccordingSliderComponent;
  let fixture: ComponentFixture<AccordingSliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccordingSliderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccordingSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
