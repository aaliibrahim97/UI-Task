import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrowthSectionComponent } from './growth-section.component';

describe('GrowthSectionComponent', () => {
  let component: GrowthSectionComponent;
  let fixture: ComponentFixture<GrowthSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GrowthSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GrowthSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
