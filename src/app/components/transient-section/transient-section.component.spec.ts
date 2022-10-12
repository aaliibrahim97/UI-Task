import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransientSectionComponent } from './transient-section.component';

describe('TransientSectionComponent', () => {
  let component: TransientSectionComponent;
  let fixture: ComponentFixture<TransientSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransientSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TransientSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
